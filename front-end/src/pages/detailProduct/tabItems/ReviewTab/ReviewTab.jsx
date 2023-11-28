import React, { useEffect, useState } from 'react';
import './index.css';
import noAvt from '../../../images/detailProduct/noAvt.png';
import { QuillEditor } from 'src/components/editor';
import { LoadingButton } from '@material-ui/lab';
import { Stack, CardHeader, TableContainer } from '@material-ui/core';
import { axiosClient } from 'src/services';
import { useSnackbar } from 'notistack5';

const ReviewTab = ({ fetchDetailProduct, comment, productId }) => {
  const [fieldValue, setFieldValue] = useState();
  const [review, setReview] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmitComment = async () => {
    setIsSubmitting(true);
    try {
      const res = await axiosClient.post(`/comment/add/${productId}`, { content: fieldValue });
      if (res.success) {
        enqueueSnackbar("Your review is awaiting approval", { variant: 'success' });
        setIsSubmitting(false);
      }
      // fetchDetailProduct();
    } catch (error) {
      enqueueSnackbar("Please login before commenting", { variant: 'error' });
      setIsSubmitting(false);
    }
  };
  console.log(comment);
  console.log(fieldValue);
  return (
    <div className="dflex review">
      <div className="col-6">
        <CardHeader title="REVIEWS" sx={{ mb: 3, pl: 0 }} />
        <TableContainer sx={{ maxHeight: 600 }}>
          <div className="list-review">
            {!comment.length ? (
              <div style={{ color: '#777777' }}>There are no reviews yet.</div>
            ) : (
              <>
                {comment.map((item) => (
                  <div key={item._id} className="dflex review-item">
                    <div className="avatar">
                      <img src={item.userInfo.photoUrl !== '' ? item.userInfo.photoUrl : noAvt} alt="" />
                    </div>
                    <div className="comment">
                      <div className="username">{item.userInfo.displayName}</div>
                      <div className="content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </TableContainer>
      </div>
      <div className="col-6">
        <CardHeader title="ADD A REVIEW" sx={{ mb: 3, pl: 0 }} />
        {/* <div className="review-title">ADD A REVIEW</div> */}
        <div className="input-review">
          <div className="input-title">
            Your review <span className="require">*</span>
          </div>
          <Stack spacing={2}>
            <QuillEditor simple value={fieldValue} id="product-description" onChange={(val) => setFieldValue(val)} />
            <LoadingButton
              onClick={onSubmitComment}
              type="button"
              fullWidth
              variant="outlined"
              size="large"
              loading={isSubmitting}
            >
              Add Comment
            </LoadingButton>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ReviewTab;
