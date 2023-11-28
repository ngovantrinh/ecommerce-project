// material
import { Container, Grid } from '@material-ui/core';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {
  EcommerceWelcome,
  EcommerceNewProducts,
  EcommerceProductSold,
  EcommerceSalesProfit,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceTotalBalance,
  EcommerceSaleByGender,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance
} from '../../components/_dashboard/general-ecommerce';
import { useCallback, useEffect, useState } from 'react';
import { axiosClient } from 'src/services';

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  const { themeStretch } = useSettings();

  const [totalSold, setTotalSold] = useState(0);
  const [listCupon, setListCupon] = useState(null);

  const getTotalSold = useCallback(async () => {
    try {
      const response = await axiosClient.get('/cart/sold/total');
      setTotalSold(response.data);
    } catch (error) {
      console.log(error)
    }
  }, []);

  const getListCupon = useCallback(async () => {
    try {
      const response = await axiosClient.get('/cupons/cupon_type');
      setListCupon(response.data);
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    getTotalSold();
    getListCupon()
  }, [getTotalSold,getListCupon]);
  return (
    <Page title="General: E-commerce | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <EcommerceWelcome />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceNewProducts />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceProductSold totalSold={totalSold.quantity}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <EcommerceTotalBalance />
          </Grid>
          <Grid item xs={12} md={4}>
            <EcommerceSalesProfit salesProfit={totalSold.salesProfit}/>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceCurrentBalance />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceBestSalesman listCupon={listCupon}/>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceLatestProducts getListCupon={getListCupon} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
