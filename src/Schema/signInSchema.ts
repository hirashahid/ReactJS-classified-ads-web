import * as Yup from 'yup';

export const signInSchema = (isPhoneSignIn: boolean): Yup.AnyObjectSchema => {
  return Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .test('email-required', 'Email is required', function (value) {
        if (!isPhoneSignIn) {
          return value ? true : false;
        }

        return true;
      }),
    phone: Yup.number().test('phone-required', 'Phone is required', function (value) {
      if (isPhoneSignIn) {
        return value ? true : false;
      }

      return true;
    }),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
};
