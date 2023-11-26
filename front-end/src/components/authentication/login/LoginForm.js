import * as Yup from 'yup';
import { useState } from 'react';
import { useSnackbar } from 'notistack5';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Alert,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Button,
  Box
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
//
import { MIconButton } from '../../@material-extend';
import AuthService from 'src/services/auth';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const LoginSchema = Yup.object().shape({
    // .email('Email must be a valid email address')
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPass: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      email: 'admin',
      password: 'admin123@',
      confirmPass: ''
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        if (isSignUp) {
          const res = await AuthService.signUp({ username: values.email, password: values.password });
          console.log(res, 'res');
          const { success } = res;
          if (!success) return;
        }

        await login(values.email, values.password);
        enqueueSnackbar('Login success', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        resetForm();
        if (isMountedRef.current) {
          setSubmitting(false);
          setErrors({ afterSubmit: error.message });
        }
      }
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Username"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          {isSignUp ? (
            <TextField
              fullWidth
              autoComplete="confirm-password"
              type={showPassword2 ? 'text' : 'password'}
              label="Confirm Password"
              {...getFieldProps('confirmPass')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword2} edge="end">
                      <Icon icon={showPassword2 ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={Boolean(touched.confirmPass && errors.confirmPass)}
              helperText={touched.confirmPass && errors.confirmPass}
            />
          ) : null}
        </Stack>

        {!isSignUp ? (
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            {/* <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
              Forgot password?
            </Link> */}

            <Button style={{ color: '#83b735' }} onClick={toggleSignUp} variant="subtitle2">
              You don't have account?
            </Button>
          </Stack>
        ) : (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              <Button style={{ color: '#83b735' }} onClick={toggleSignUp} variant="subtitle2">
                You already have account?
              </Button>
            </Stack>
          </>
        )}
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
