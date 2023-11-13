import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().test('passwords-match', 'Passwords must match', function (value, context) {
    return (value && value === context.parent.password) as boolean;
  }),
});
