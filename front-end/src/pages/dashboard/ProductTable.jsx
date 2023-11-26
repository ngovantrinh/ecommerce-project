import React from 'react';
// material
import { styled } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Container,
  CardHeader,
  Stack,
  Button,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer
} from '@material-ui/core';

import CollapsibleTableRow from './CollapsibleTableRow';

import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import Page from 'src/components/Page';
import { PATH_PAGE } from 'src/routes/paths';
import ContainedButtons from '../components-overview/material-ui/buttons/ContainedButtons';
import useProduct from '../products/useProduct';
import Scrollbar from 'src/components/Scrollbar';
import { useNavigate } from 'react-router';

// import CollapsibleTable from './collapsible-table';
// import SortingSelecting from './sorting-selecting';
// import GroupingFixedHeader from './GroupingFixedHeader';
const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

function ProductTable() {
  const { listProduct, loading, handleDeleteProduct } = useProduct({ limitItem: 1000 });
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate('/dashboard/product/new');
  };

  return (
    <div>
      <RootStyle title="Components: Table | Minimal-UI">
        <Box
          sx={{
            pt: 6,
            pb: 1,
            mb: 10,
            bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
          }}
        >
          <Container maxWidth="lg">
            <HeaderBreadcrumbs
              heading="Manager products"
              links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Table' }]}
              //   moreLink="https://next.material-ui.com/components/tables"
            />
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Button onClick={goToCreate} style={{ marginBottom: 10 }} variant="contained">
            Add Product
          </Button>
          <Stack spacing={5}>
            <Card>
              <CardHeader title="Collapsible Table" />
              <Scrollbar>
                <TableContainer sx={{ minWidth: 800, mt: 3 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>Name product</TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Sold</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listProduct?.map((row) => (
                        <CollapsibleTableRow handleDeleteProduct={handleDeleteProduct} key={row.name} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Scrollbar>
            </Card>
          </Stack>
        </Container>
      </RootStyle>
    </div>
  );
}

export default ProductTable;
