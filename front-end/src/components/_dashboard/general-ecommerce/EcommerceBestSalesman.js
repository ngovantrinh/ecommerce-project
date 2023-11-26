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
  TableContainer
} from '@material-ui/core';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import mockData from '../../../utils/mock-data';
//
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';

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

export default function EcommerceBestSalesman({ listCupon = [] }) {
  const theme = useTheme();

  return (
    <Card sx={{ pb: 3 }}>
      <CardHeader title="Best Salesman" sx={{ mb: 3 }} />
        <TableContainer sx={{ maxHeight: 280 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Cupon Code</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listCupon?.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.cuponId}</TableCell>
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.value}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Card>
  );
}
