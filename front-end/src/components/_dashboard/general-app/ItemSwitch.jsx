import { FormControl, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { useSnackbar } from 'notistack5';
import React, { useState } from 'react';
import UserService from 'src/services/user';

function ItemSwitch({ user, getListUser }) {
  const [active, setActive] = useState(user.active === 1);
  const { enqueueSnackbar } = useSnackbar();

  const onToggle = async (e) => {
    setActive(e.target.checked);
    const res = await UserService.updateActive({ userId: user._id });

    if (res.success) {
      enqueueSnackbar('Update User Success', { variant: 'success' });
    }
    getListUser();
  };

  return (
    <FormControl onChange={onToggle} component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Switch color={(user.active === 2 && 'error') || 'success'} checked={active} />}
          label={''}
          color={(user.active === 2 && 'error') || 'success'}
        />
      </FormGroup>
    </FormControl>
  );
}

export default ItemSwitch;
