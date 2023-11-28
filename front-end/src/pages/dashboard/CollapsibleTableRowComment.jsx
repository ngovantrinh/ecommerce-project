import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
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
import { LoadingButton } from '@material-ui/lab';
import { useTheme } from '@material-ui/core/styles';
import Label from 'src/components/Label';
import { axiosClient } from 'src/services';
import { useSnackbar } from 'notistack5';
import useProduct from '../products/useProduct';
import { useEffect } from 'react';

const CollapsibleTableRowComment = ({ comments, fetchProducts }) => {
  const [showComment, setShowComment] = useState(false);
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const approvedComment = async (commentId) => {
    try {
      const res = await axiosClient.put(`/comment/active/change/${commentId}`);
      if (res.success) {
          fetchProducts({});
        enqueueSnackbar('Approval success', { variant: 'success' });
      }
    } catch (error) {
        console.log(error);
        enqueueSnackbar('Approval error', { variant: 'error' });
    }
  };

  const removeComment = async (commentId) => {
    try {
      const res = await axiosClient.delete(`/comment/delete/${commentId}`);
      if (res.success) {
          fetchProducts({});
        enqueueSnackbar('Delete success', { variant: 'success' });
      }
    } catch (error) {
        console.log(error);
        enqueueSnackbar('Delete error', { variant: 'error' });
    }
  };

  return (
    <Table>
      <span>Show list comment</span>
      <IconButton size="small" onClick={() => setShowComment(!showComment)}>
        <Icon icon={showComment ? arrowIosUpwardFill : arrowIosDownwardFill} />
      </IconButton>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={showComment} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>DisplayName</TableCell>
                  <TableCell>Comment</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comments?.map((item) => (
                  <TableRow key={item._id} style={{ paddingBottom: '10px' }}>
                    <TableCell>{item.userInfo.userName}</TableCell>
                    <TableCell component="th" scope="row">
                      <img width={50} height={50} src={item.userInfo.photoUrl} alt="" />
                    </TableCell>
                    <TableCell>{item.userInfo.displayName}</TableCell>
                    <TableCell width={'200px'} sx={{ minWidth: '200px', maxHeight: '300px' }} align="left">
                      <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </TableCell>
                    <TableCell>
                      <Label
                        variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                        color={(item.isActive && 'success') || 'error'}
                      >
                        {item.isActive ? 'Approved' : 'Unapproved'}
                      </Label>
                    </TableCell>
                    <TableCell style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                      <LoadingButton
                        size="small"
                        onClick={() => approvedComment(item._id)}
                        loadingPosition="center"
                        variant="contained"
                      >
                        <span>{item.isActive ? 'Unapproved' : 'Approved'}</span>
                      </LoadingButton>
                      <LoadingButton
                        size="small"
                        onClick={() => removeComment(item._id)}
                        loadingPosition="center"
                        variant="contained"
                      >
                        <span>Delete comment</span>
                      </LoadingButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </Table>
  );
};

export default CollapsibleTableRowComment;
