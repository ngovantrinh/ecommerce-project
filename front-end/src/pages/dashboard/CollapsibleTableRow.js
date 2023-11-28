import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
// material
import {
  Box,
  Table,
  Collapse,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import CollapsibleTableRowComment from './CollapsibleTableRowComment';

// ----------------------------------------------------------------------

CollapsibleTable.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired
  }).isRequired
};

export default function CollapsibleTable({ row, handleDeleteProduct, fetchProducts }) {
  const [open, setOpen] = useState(false);

  // type: key, value
  // valuesVariant [ 13,14];
  // option { "key": "size", "value": [  {"id": 13, "value": "D2250 - R905 - C790 mm" } ] },
  const renderOption = ({ valuesVariant = [], option = [] }) => {
    const listOption = option.map((itemOption) => {
      const findValue = itemOption.value?.find((itemOptionValue) => valuesVariant.includes(itemOptionValue.id));
      if (!findValue) return null;
      let itemValueData = findValue.value;
      if (itemOption.key === 'color')
        itemValueData = (
          <span
            style={{
              width: '15px',
              height: '15px',
              background: findValue.value,
              display: 'inline-block',
              borderRadius: '50%'
            }}
          ></span>
        );
      return (
        <div>
          <p>
            {itemOption.key}: {itemValueData}
          </p>
        </div>
      );
    });
    return listOption;
  };
  console.log(row.variants, 'variants');
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            <Icon icon={open ? arrowIosUpwardFill : arrowIosDownwardFill} />
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">
          <img style={{ display: 'block', margin: 'auto' }} width={100} height={100} src={row.image} alt="" />
        </TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.sold}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">
          <Button>
            <CreateIcon />
          </Button>
          <Button onClick={() => handleDeleteProduct(row.id)} variant="primary">
            <DeleteIcon color="red" />
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box dangerouslySetInnerHTML={{ __html: row.description }} />
            {row?.variants?.length > 0 && (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Variants
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name variant</TableCell>
                      <TableCell>Sku</TableCell>
                      <TableCell>Value Variant</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Sale Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row?.variants.map((variantItem) => (
                      <TableRow key={variantItem._id}>
                        <TableCell component="th" scope="row">
                          {variantItem.name}
                        </TableCell>
                        <TableCell>{variantItem.sku}</TableCell>
                        <TableCell>{renderOption({ valuesVariant: variantItem.values, option: row.option })}</TableCell>
                        <TableCell align="right">{variantItem.quantity}</TableCell>
                        <TableCell align="right">{variantItem.price}</TableCell>
                        <TableCell align="right">{variantItem.salePrice}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            )}
            {row?.comment?.length ? <CollapsibleTableRowComment fetchProducts={fetchProducts} comments={row?.comment} /> : null}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
