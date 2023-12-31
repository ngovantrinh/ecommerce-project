import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import shieldFill from '@iconify/icons-eva/shield-fill';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Switch, Divider, Typography, Stack } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
//
import Label from '../../Label';
import { fCurrency } from 'src/utils/formatNumber';
import CartService from 'src/services/cart';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(1),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    borderRadius: theme.shape.borderRadiusMd,
    backgroundColor: theme.palette.background.neutral
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  }
}));

// ----------------------------------------------------------------------

PaymentSummary.propTypes = {
  formik: PropTypes.object
};

export default function PaymentSummary({ formik, orderPrice }) {
  const { getFieldProps, isSubmitting } = formik;

  // const onPayment = async () => {
  //   let params = {
  //     cartId,
  //     orderPrice
  //   };
  //   await CartService.checkoutCartProduct(params);
  // };

  return (
    <RootStyle>
      <Typography variant="subtitle1" sx={{ mb: 5 }}>
        Summary
      </Typography>

      <Stack spacing={2.5}>
        <Stack direction="row" justifyContent="flex-end">
          <Typography sx={{ color: 'text.secondary' }}>$</Typography>
          <Typography variant="h2" sx={{ mx: 1 }}>
            {fCurrency(orderPrice)}
          </Typography>
          <Typography component="span" variant="body2" sx={{ mb: 1, alignSelf: 'flex-end', color: 'text.secondary' }}>
            VND
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="p">
            Total Billed
          </Typography>
          <Typography variant="h6" component="p">
            $9.99*
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', mb: 1 }} />
      </Stack>

      <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>
        * Plus applicable taxes
      </Typography>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 5, mb: 3 }}
      >
        Payment
      </LoadingButton>

      <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box component={Icon} icon={shieldFill} sx={{ width: 20, height: 20, color: 'primary.main' }} />
          <Typography variant="subtitle2">Secure credit card payment</Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          This is a secure 128-bit SSL encrypted payment
        </Typography>
      </Stack>
    </RootStyle>
  );
}
