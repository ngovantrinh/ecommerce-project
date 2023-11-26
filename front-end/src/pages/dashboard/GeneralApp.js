// material
import { Container, Grid, Stack } from '@material-ui/core';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {
  AppWelcome,
  AppWidgets1,
  AppWidgets2,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppTotalDownloads,
  AppTotalInstalled,
  AppCurrentDownload,
  AppTotalActiveUsers,
  AppTopInstalledCountries
} from '../../components/_dashboard/general-app';
import { useEffect, useState } from 'react';
import UserService from 'src/services/user';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();
  const [info, setInfo] = useState({
    total: 0,
    totalActive: 0,
    listUser: null,
    activeUser: 0
  });
  const getListUser = async () => {
    try {
      const res = await UserService.getAllUser();
      if (!res || !res.success) return;
      const { data } = res;
      const activeUserTotal = data.filter((usr) => usr.active === 1);
      setInfo({
        total: data.length,
        listUser: data,
        activeUser: activeUserTotal.length
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user.role !== 1) {
      getListUser();
    }
  }, [user.role]);
  console.log(info, 'info');

  return (
    <Page title="List Users">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome displayName={user.displayName} />
          </Grid>

          {user.role === 0 && (
            <>
              <Grid item xs={12} md={4}>
                <AppFeatured />
              </Grid>

              <Grid item xs={12} md={4}>
                <AppTotalActiveUsers totalUser={info.total} />
              </Grid>

              <Grid item xs={12} md={4}>
                <AppTotalInstalled activeUser={info.activeUser} />
              </Grid>

              <Grid item xs={12} md={4}>
                <AppTotalDownloads />
              </Grid>
              {!!info.listUser ? (
                <Grid item xs={12} lg={12}>
                  <AppNewInvoice mode={'user'} getListUser={getListUser} listData={info.listUser} />
                </Grid>
              ) : null}
              <Grid item xs={12} md={6} lg={4}>
                <AppCurrentDownload />
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                <AppAreaInstalled />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Page>
  );
}
