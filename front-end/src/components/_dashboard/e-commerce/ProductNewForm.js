import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack5';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { styled } from '@material-ui/core/styles';
import { LoadingButton } from '@material-ui/lab';
import {
  Card,
  Chip,
  Grid,
  Stack,
  Radio,
  Switch,
  Select,
  TextField,
  InputLabel,
  Typography,
  RadioGroup,
  FormControl,
  Autocomplete,
  InputAdornment,
  FormHelperText,
  FormControlLabel,
  Box,
  Button,
  MenuItem
} from '@material-ui/core';
// utils
import fakeRequest from '../../../utils/fakeRequest';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { QuillEditor } from '../../editor';
import { UploadMultiFile } from '../../upload';
import VariantService from 'src/services/variant';
import UpfileService from 'src/services/upload';
import { IMG_ROOT } from 'src/constant';
import ProductService from 'src/services/product';

// ----------------------------------------------------------------------

const GENDER_OPTION = ['Men', 'Women', 'Kids'];

const CATEGORY_OPTION = [
  { group: 'Clothing', classify: ['Shirts', 'T-shirts', 'Jeans', 'Leather'] },
  { group: 'Tailored', classify: ['Suits', 'Blazers', 'Trousers', 'Waistcoats'] },
  { group: 'Accessories', classify: ['Shoes', 'Backpacks and bags', 'Bracelets', 'Face masks'] }
];

const TAGS_OPTION = [
  'Toy Story 3',
  'Logan',
  'Full Metal Jacket',
  'Dangal',
  'The Sting',
  '2001: A Space Odyssey',
  "Singin' in the Rain",
  'Toy Story',
  'Bicycle Thieves',
  'The Kid',
  'Inglourious Basterds',
  'Snatch',
  '3 Idiots'
];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));

// ----------------------------------------------------------------------

ProductNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentProduct: PropTypes.object
};

export default function ProductNewForm({ isEdit, currentProduct }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [variantCount, setVariantCount] = useState([]);
  const [valueOption, setValueOption] = useState({});
  const [valueVariant, setValueVariant] = useState([]);
  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    images: Yup.array().min(1, 'Images is required'),
    price: Yup.number().required('Price is required'),
    salePrice: Yup.number().required('Price is required'),
    quantity: Yup.number().required('Quantity is required')
  });
  console.log(valueVariant, 'valueVariant');

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: currentProduct?.name || '',
      description: currentProduct?.description || '',
      images: currentProduct?.images || [],
      image: null,
      quantity: currentProduct?.quantity || '',
      price: currentProduct?.price || '',
      salePrice: currentProduct?.salePrice || ''
    },
    validationSchema: NewProductSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        const data = new FormData();
        data.append('uploadImage', values.image);
        const res = await UpfileService.upfile(data);
        if (!res.success) return;

        const listVariantConvert = valueVariant?.map((itemVariant) => {
          const values = [];
          Object.keys(itemVariant.values || {}).forEach((key) => {
            if (!!itemVariant.values[key]) {
              values.push(itemVariant.values[key]);
            }
          });
          return {
            ...itemVariant,
            values
          };
        });

        const imgageReplace = IMG_ROOT + res.url;
        const { success } = await ProductService.addProduct({
          ...values,
          image: imgageReplace,
          images: [imgageReplace],
          variants: listVariantConvert
        });

        resetForm();
        setSubmitting(false);
        if (success) {
          enqueueSnackbar(!isEdit ? 'Create success' : 'Update success', { variant: 'success' });
        }

        navigate(PATH_DASHBOARD.general.productPage);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;
  console.log(errors, 'errors');
  const handleDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles, 'acceptedFiles');
      setFieldValue('image', acceptedFiles[0]);
      setFieldValue(
        'images',
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setFieldValue]
  );

  const handleRemoveAll = () => {
    setFieldValue('images', []);
  };

  const createVariant = () => {
    setVariantCount((pre) => [...pre, Date.now()]);
  };

  const handleRemove = (file) => {
    const filteredItems = values.images.filter((_file) => _file !== file);
    setFieldValue('images', filteredItems);
  };

  const handleChangeVariant = (index, key, value) => {
    let newData = [...valueVariant];
    newData[index] = { ...newData[index] };
    newData[index][key] = value;
    setValueVariant(newData);
  };

  const handleChangeVariantOption = (index, key, value) => {
    let newData = [...valueVariant];
    newData[index] = { ...newData[index] };
    newData[index].values = { ...newData[index].values, [key]: value };
    setValueVariant(newData);
  };

  const removeVariant = (count, idCount) => {
    let newData = [...valueVariant].filter((_, index) => count !== index);
    let newDataCount = [...variantCount].filter((item) => item !== idCount);
    setValueVariant(newData);
    setVariantCount(newDataCount);
  };

  useEffect(() => {
    const fetchVariantValue = async () => {
      let varaintMap = {};
      const { success, data } = await VariantService.getVariants();
      if (success) {
        data.forEach((optionsVariant) => {
          varaintMap[optionsVariant.key] = optionsVariant.value;
        });
        setValueOption(varaintMap);
      }
    };
    fetchVariantValue();
  }, []);

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Product Name"
                  {...getFieldProps('name')}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  fullWidth
                  label="Quantity"
                  {...getFieldProps('quantity')}
                  error={Boolean(touched.quantity && errors.quantity)}
                  helperText={touched.quantity && errors.quantity}
                />
                <div>
                  <LabelStyle>Description</LabelStyle>
                  <QuillEditor
                    simple
                    id="product-description"
                    value={values.description}
                    onChange={(val) => setFieldValue('description', val)}
                    error={Boolean(touched.description && errors.description)}
                  />
                  {touched.description && errors.description && (
                    <FormHelperText error sx={{ px: 2 }}>
                      {touched.description && errors.description}
                    </FormHelperText>
                  )}
                </div>
                {Array.from(variantCount)?.map((idCount, index) => (
                  <div key={index}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Variant {index + 1}</h4>
                      <Button onClick={() => removeVariant(index, idCount)} variant="outlined" color="error">
                        Remove
                      </Button>
                    </Box>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Variant Name</LabelStyle>
                        <TextField
                          value={valueVariant[index]?.name || ''}
                          onChange={(e) => handleChangeVariant(index, 'name', e.target.value)}
                          fullWidth
                          label="Variant Name"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Size Option</LabelStyle>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Size</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label=""
                            value={valueVariant[index]?.values?.size || ''}
                            onChange={(e) => handleChangeVariantOption(index, 'size', e.target.value)}
                            // onChange={handleChange}
                          >
                            <MenuItem value={''}>None</MenuItem>
                            {valueOption?.size?.map((item) => (
                              <MenuItem value={item.id}>{item.value}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Color Option</LabelStyle>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Color</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label=""
                            value={valueVariant[index]?.values?.color || ''}
                            onChange={(e) => handleChangeVariantOption(index, 'color', e.target.value)}
                          >
                            <MenuItem value={''}>None</MenuItem>
                            {valueOption?.color?.map((item) => (
                              <MenuItem value={item.id}>
                                <p
                                  style={{
                                    background: item.value,
                                    width: '100%',
                                    color: item.value === 'white' ? 'black' : 'white'
                                  }}
                                >
                                  {item.value}
                                </p>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Material Option</LabelStyle>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Material</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label=""
                            value={valueVariant[index]?.values?.material || ''}
                            onChange={(e) => handleChangeVariantOption(index, 'material', e.target.value)}
                          >
                            <MenuItem value={''}>None</MenuItem>
                            {valueOption?.material?.map((item) => (
                              <MenuItem value={item.id}>{item.value}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Quantity</LabelStyle>
                        <TextField
                          value={valueVariant[index]?.quantity || ''}
                          onChange={(e) => handleChangeVariant(index, 'quantity', e.target.value)}
                          fullWidth
                          label="Quantity"
                          type="number"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Sku</LabelStyle>
                        <TextField
                          value={valueVariant[index]?.sku || ''}
                          onChange={(e) => handleChangeVariant(index, 'sku', e.target.value)}
                          fullWidth
                          label="Sku"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Price</LabelStyle>
                        <TextField
                          value={valueVariant[index]?.price || ''}
                          onChange={(e) => handleChangeVariant(index, 'price', e.target.value)}
                          fullWidth
                          placeholder="0.00"
                          label=""
                          InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            type: 'number'
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LabelStyle>Sale Price</LabelStyle>
                        <TextField
                          value={valueVariant[index]?.salePrice || ''}
                          onChange={(e) => handleChangeVariant(index, 'salePrice', e.target.value)}
                          fullWidth
                          placeholder="0.00"
                          label=""
                          InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            type: 'number'
                          }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                ))}
                <LoadingButton
                  onClick={createVariant}
                  type="button"
                  fullWidth
                  variant="outlined"
                  size="large"
                  loading={isSubmitting}
                >
                  Add Variant
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card sx={{ p: 3 }}>
                <div>
                  <LabelStyle>Add Images</LabelStyle>
                  <UploadMultiFile
                    showPreview
                    maxSize={3145728}
                    accept="image/*"
                    files={values.images}
                    onDrop={handleDrop}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                    error={Boolean(touched.images && errors.images)}
                  />
                  {touched.images && errors.images && (
                    <FormHelperText error sx={{ px: 2 }}>
                      {touched.images && errors.images}
                    </FormHelperText>
                  )}
                </div>
                <Stack spacing={3}>
                  {/* <TextField fullWidth label="Product Code" {...getFieldProps('code')} /> */}
                  {/* <TextField fullWidth label="Product SKU" {...getFieldProps('sku')} /> */}

                  <div>
                    {/* <LabelStyle>Gender</LabelStyle> */}
                    {/* <RadioGroup {...getFieldProps('gender')} row>
                      <Stack spacing={1} direction="row">
                        {GENDER_OPTION.map((gender) => (
                          <FormControlLabel key={gender} value={gender} control={<Radio />} label={gender} />
                        ))}
                      </Stack>
                    </RadioGroup> */}
                  </div>

                  {/* <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select label="Category" native {...getFieldProps('category')} value={values.category}>
                      {CATEGORY_OPTION.map((category) => (
                        <optgroup key={category.group} label={category.group}>
                          {category.classify.map((classify) => (
                            <option key={classify} value={classify}>
                              {classify}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </Select>
                  </FormControl>
                  <Autocomplete
                    multiple
                    freeSolo
                    value={values.tags}
                    onChange={(event, newValue) => {
                      setFieldValue('tags', newValue);
                    }}
                    options={TAGS_OPTION.map((option) => option)}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
                      ))
                    }
                    renderInput={(params) => <TextField label="Tags" {...params} />}
                  /> */}
                </Stack>
              </Card>

              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    placeholder="0.00"
                    label="Regular Price"
                    {...getFieldProps('price')}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      type: 'number'
                    }}
                    error={Boolean(touched.price && errors.price)}
                    helperText={touched.price && errors.price}
                  />

                  <TextField
                    fullWidth
                    placeholder="0.00"
                    label="Sale Price"
                    {...getFieldProps('salePrice')}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      type: 'number'
                    }}
                  />
                </Stack>
              </Card>

              <LoadingButton type="submit" fullWidth variant="contained" size="large" loading={isSubmitting}>
                {!isEdit ? 'Create Product' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
//  "variants": [
//         {
//             "name": "Sofa Landa 3 Chỗ Da Root L3P",
//             "values": [
//                 1,
//                 8
//             ], // id value cua table Variant_value
//             "quantity": "30",
//             "sku": "33004",
//             "price": 170,
//             "salePrice": 80
//         },
//         {
//             "name": "Sofa Landa 3 chỗ Da Brown L01",
//             "values": [
//                 2,
//                 9
//             ], // id value cua table Variant_value
//             "quantity": "50",
//             "sku": "33005",
//             "price": 160,
//             "salePrice": 100
//         }
//     ]
