// material
import { useTheme } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Table,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  TableContainer,
  Button
} from '@material-ui/core';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import mockData from '../../../utils/mock-data';
//
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import { axiosClient } from 'src/services';
import { useSnackbar } from 'notistack5';

// ----------------------------------------------------------------------

const COUNTRY = ['de', 'en', 'fr', 'kr', 'us'];
const CATEGORY = ['CAP', 'Branded Shoes', 'Headphone', 'Cell Phone', 'Earings'];

const MOCK_SALES = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  email: mockData.email(index),
  avatar: mockData.image.avatar(index + 8),
  category: CATEGORY[index],
  flag: `/static/icons/ic_flag_${COUNTRY[index]}.svg`,
  total: mockData.number.price(index),
  rank: `Top ${index + 1}`
}));

// ----------------------------------------------------------------------

export default function EcommerceBestSalesman({ listCupon = [] , getListCupon}) {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const deleteCupon = async (id) => {
    try {
      const { success } = await axiosClient.delete(`/cupons/delete/${id}`);
      if (success) {
        getListCupon()
        enqueueSnackbar('Delete success', { variant: 'success' });
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Card sx={{ pb: 3 }}>
      <CardHeader title="List Cupon" sx={{ mb: 3 }} />
      <TableContainer sx={{ maxHeight: 280 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Cupon Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>value</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCupon?.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.cuponId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.value}%</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteCupon(row._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
