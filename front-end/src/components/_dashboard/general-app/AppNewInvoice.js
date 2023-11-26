import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { sentenceCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import shareFill from '@iconify/icons-eva/share-fill';
import printerFill from '@iconify/icons-eva/printer-fill';
import archiveFill from '@iconify/icons-eva/archive-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { useTheme } from '@material-ui/core/styles';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import {
  Box,
  Menu,
  Card,
  Table,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  CardHeader,
  TableContainer,
  IconButton,
  Collapse
} from '@material-ui/core';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import mockData from '../../../utils/mock-data';
//
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import { MIconButton } from '../../@material-extend';
import ItemSwitch from './ItemSwitch';
import DetailCartProduct from './DetailCartProduct.js';

// ----------------------------------------------------------------------

const MOCK_INVOICES = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  price: mockData.number.price(index),
  category: (index === 0 && 'Android') || (index === 2 && 'Mac') || 'Windows',
  status: (index === 0 && 'paid') || (index === 2 && 'out_of_date') || 'in_progress'
}));

// ----------------------------------------------------------------------

function MoreMenuButton() {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <MIconButton ref={menuRef} size="large" onClick={handleOpen}>
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </MIconButton>
      </>

      <Menu
        open={open}
        anchorEl={menuRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem>
          <Icon icon={downloadFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Download
          </Typography>
        </MenuItem>
        <MenuItem>
          <Icon icon={printerFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Print
          </Typography>
        </MenuItem>
        <MenuItem>
          <Icon icon={shareFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Share
          </Typography>
        </MenuItem>
        <MenuItem>
          <Icon icon={archiveFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Archive
          </Typography>
        </MenuItem>

        <Divider />
        <MenuItem sx={{ color: 'error.main' }}>
          <Icon icon={trash2Outline} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function AppNewInvoice({
  listData,
  getListUser,
  mode,
  listTitleTable = ['Username', 'Image', 'Display Name', 'Email', 'Phone', 'Address', 'Status']
}) {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="New Invoice" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                {listTitleTable.map((item) => (
                  <TableCell key={item}>{item}</TableCell>
                ))}
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {mode === 'user' &&
                listData?.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>
                      <img width={50} height={50} src={user.photoUrl} alt="" />
                    </TableCell>
                    <TableCell>{user.displayName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>
                      <ItemSwitch getListUser={getListUser} user={user} />
                      <Label
                        variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                        color={(user.active === 2 && 'error') || 'success'}
                      >
                        {user.active === 2 ? 'DeActive' : 'Active'}
                      </Label>
                    </TableCell>

                    <TableCell align="right">
                      <MoreMenuButton />
                    </TableCell>
                  </TableRow>
                ))}
              {mode === 'cart' &&
                listData?.map((item) => (
                  <DetailCartProduct key={item.idCart} item={item} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />

      {mode === 'user' && (
        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button
            to="#"
            size="small"
            color="inherit"
            component={RouterLink}
            endIcon={<Icon icon={arrowIosForwardFill} />}
          >
            View All
          </Button>
        </Box>
      )}
    </Card>
  );
}
