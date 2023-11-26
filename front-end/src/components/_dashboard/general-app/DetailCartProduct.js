import { Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import { Icon } from '@iconify/react';
import { useTheme } from '@material-ui/core/styles';
import Label from '../../Label';
import { LoadingButton } from '@material-ui/lab';
import CartService from 'src/services/cart';
import { useDispatch } from 'react-redux';
import { getAllCarts } from 'src/redux/slices/cart';
import { useSnackbar } from 'notistack5';

const DetailCartProduct = ({ item }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const renderOption = ({ valuesVariant = [] }) => {
    const listOption = valuesVariant.map((itemOption) => {
      return (
        <div>
          <p>
            {itemOption.key}: {itemOption.value}
          </p>
        </div>
      );
    });
    return listOption;
  };

  const confirmBtn = async (id) => {
    setLoading(true);
    let params = {
      cartId: id,
      status: 2
    };
    let res = await CartService.changeStatusCart(params);
    dispatch(getAllCarts());
    if (res.success) enqueueSnackbar('Received cart success', { variant: 'success' });
    setLoading(false);
  };
  const cancelOrderBtn = async (id) => {
    setOrderLoading(true);
    let params = {
      cartId: id,
      status: 3
    };
    let res = await CartService.changeStatusCart(params);
    dispatch(getAllCarts());
    if (res.success) enqueueSnackbar('Cancel cart success', { variant: 'success' });
    setOrderLoading(false);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            <Icon icon={open ? arrowIosUpwardFill : arrowIosDownwardFill} />
          </IconButton>
        </TableCell>
        <TableCell>{item?.cart.length}</TableCell>
        <TableCell>{item.orderPrice}</TableCell>
        <TableCell>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={item.status === 1 ? 'primary' : item.status === 2 ? 'success' : 'error'}
          >
            {item.status === 1 ? 'Đang giao' : item.status === 2 ? 'Đã nhận' : 'Đã Hủy'}
          </Label>
        </TableCell>
        {item?.status !== 2 && item?.status !== 3 ? (
          <TableCell style={{ display: 'flex', columnGap: '10px' }}>
            <LoadingButton
              size="small"
              onClick={() => confirmBtn(item.idCart)}
              loading={loading}
              loadingPosition="center"
              variant="contained"
            >
              <span>Received</span>
            </LoadingButton>
            <LoadingButton
              size="small"
              onClick={() => cancelOrderBtn(item.idCart)}
              loading={orderLoading}
              loadingPosition="center"
              variant="contained"
            >
              <span>Cancel order</span>
            </LoadingButton>
          </TableCell>
        ) : null}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {item?.cart?.length > 0 && (
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name variant</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Value Variant</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Sale Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.cart.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell>
                          <img width={50} height={50} src={item.image} alt="" />
                        </TableCell>
                        <TableCell align="left">{renderOption({ valuesVariant: item.optionChoose })}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">{item.salePrice}</TableCell>
                        <TableCell align="right">{item.quantityBuy}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DetailCartProduct;
