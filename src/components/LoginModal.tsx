'use client';

import { useCallback, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { Button } from 'components/common/Button';
import { ForgotPassword } from 'components/ForgotPassword';
import { SignInComponent } from 'components/SignInComponent';
import { SignUpComponent } from 'components/SignUpComponent';
import { TranslationNamespaces } from 'constants/translationNamespaces';

export const LoginModal = (): JSX.Element => {
  const [isOpenForgotPasswordModal, setisOpenForgotPasswordModal] = useState<boolean>(false);
  const [isOpenSignInModal, setisOpenSignInModal] = useState<boolean>(false);
  const [isOpenSignUpModal, setisOpenSignUpModal] = useState<boolean>(false);
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  const closeForgotPasswordModal = useCallback((): void => {
    setisOpenForgotPasswordModal(false);
  }, []);
  const closeSignInModal = useCallback((): void => {
    setisOpenSignInModal(false);
  }, []);
  const closeSignUpModal = useCallback((): void => {
    setisOpenSignUpModal(false);
  }, []);
  const openForgotPasswordModal = useCallback((): void => {
    setisOpenForgotPasswordModal(true);
  }, []);
  const openSignInModal = useCallback((): void => {
    setisOpenSignInModal(true);
  }, []);
  const openSignUpModal = useCallback((): void => {
    setisOpenSignUpModal(true);
  }, []);

  return (
    <>
      <Button variant="link" onClick={openSignInModal}>
        {t('SignupSignin')}
      </Button>
      <SignInComponent
        isOpenSignInModal={isOpenSignInModal}
        closeSignInModal={closeSignInModal}
        openForgotPasswordModal={openForgotPasswordModal}
        openSignUpModal={openSignUpModal}
      />
      <SignUpComponent
        isOpenSignUpModal={isOpenSignUpModal}
        closeSignUpModal={closeSignUpModal}
        openSignInModal={openSignInModal}
      />
      <ForgotPassword
        isOpenForgotPasswordModal={isOpenForgotPasswordModal}
        closeForgotPasswordModal={closeForgotPasswordModal}
      />
    </>
  );
};
