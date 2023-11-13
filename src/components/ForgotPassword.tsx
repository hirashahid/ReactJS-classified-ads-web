'use client';

import forgotPasswordPicture from '@assets/images/forgot-password.png';
import { Button } from 'app/common/Button';
import { Modal } from 'flowbite-react';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { TextInput } from 'components/common/TextInput/TextInput';
import { TranslationNamespaces } from 'constants/translationNamespaces';

type ForgotPasswordProps = {
  isOpenForgotPasswordModal: boolean;
  closeForgotPasswordModal: () => void;
};

export const ForgotPassword = ({
  isOpenForgotPasswordModal,
  closeForgotPasswordModal,
}: ForgotPasswordProps): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  const handleFormSubmit = (): void => {
    console.log('working');
  };

  return (
    <Modal show={isOpenForgotPasswordModal} size="lg" popup onClose={closeForgotPasswordModal} className="rounded-lg">
      <Modal.Header className="p-[-2rem]" />
      <Modal.Body className="flex flex-col md:flex-col w-full min-h-[20rem] ">
        <div className="flex flex-col h-full items-center text-center justify-center ">
          <div>
            <Image
              src={forgotPasswordPicture}
              width={300}
              height={500}
              className="w-54"
              alt={t('forgotPassword')}
              unoptimized={true}
            />
          </div>
          <p className="mt-4">{t('emailReset')}</p>
        </div>
        <div>
          <Formik initialValues={{ email: '' }} onSubmit={handleFormSubmit}>
            <Form>
              <div className="mb-2 block mt-6">
                <TextInput name="email" type="email" label={t('email')} placeholder={t('enterYourEmail')} />
              </div>
              <Button variant="secondary" className="w-full mt-6 ">
                {t('sendResetLink')}
              </Button>
            </Form>
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};
