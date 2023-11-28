import { useEffect } from 'react';
// material
import { Container, Grid, Skeleton } from '@material-ui/core';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getUsers } from '../../redux/slices/user';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { UserCard } from '../../components/_dashboard/user/cards';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import useCart from '../cart/useCart';
import { getAllCarts } from 'src/redux/slices/cart';
import { AppNewInvoice } from 'src/components/_dashboard/general-app';

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    {[...Array(8)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

export default function UserCarts() {
  const { listCarts } = useSelector((state) => state.cart);
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarts());
  }, [dispatch]);

  console.log(listCarts);
  let listTitleTable = ['', 'Total Product', 'Total Price', 'Status', ''];

  return (
    <Page title="User: Cards | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Orders"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Cards' }
          ]}
        />
        <Grid item xs={12} lg={12}>
          <AppNewInvoice title={'List order'} listTitleTable={listTitleTable} listData={listCarts} mode={'cart'} />
        </Grid>
      </Container>
    </Page>
  );
}
