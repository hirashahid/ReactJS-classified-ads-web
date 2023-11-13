'use client';

import backToggle from '@assets/icons/back-toggle.svg';
import { Button } from 'app/common/Button';
import { Modal } from 'flowbite-react';
import { Form, Formik } from 'formik';
import { AuthenticationCarousel } from 'layout/AuthenticationCarousel';
import Image from 'next/image';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { signUpSchema } from 'Schema/signUpSchema';

import { FormikPasswordField } from 'components/common/FormikPasswordField/FormikPasswordField';
import { TextInput } from 'components/common/TextInput/TextInput';
import { TranslationNamespaces } from 'constants/translationNamespaces';
type SignUpProps = {
  isOpenSignUpModal: boolean;
  closeSignUpModal: () => void;
  openSignInModal: () => void;
};
export const SignUpComponent = ({ isOpenSignUpModal, closeSignUpModal, openSignInModal }: SignUpProps): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  const handleFormSubmit = (): void => {
    console.log('working');
  };

  return (
    <Modal show={isOpenSignUpModal} size="6xl" popup onClose={closeSignUpModal} className="rounded-lg">
      <Modal.Header className="p-[-2rem]" />
      <Modal.Body className="flex flex-col md:flex-row w-full min-h-[32rem]">
        <div className=" bg-gray-50 w-full md:w-5/12  rounded-lg ">
          <div className="h-5/6 ">
            <AuthenticationCarousel />
            <div className="mt-12 text-center text-gray-400 text-sm">
              <Trans
                i18nKey="common:terms&Conditions"
                // eslint-disable-next-line react/jsx-key
                components={[<Link href="/" />, <Link href="/" />]}
                values={{ count: 42 }}
                defaultTrans="<component> <a/> <b/> <c/> <d/> </component>"
              />
            </div>
          </div>
        </div>
        <div className=" justify-center justify-items-center w-full md:w-7/12 pl-10">
          <div className="w-5/6 justify-center justify-items-center ">
            <div className="flex justify-start items-center">
              <Image src={backToggle} width={20} height={20} alt={t('back')} unoptimized={true} />

              <h2 className="ml-4 h-6 text-3xl font-large text-gray-900 dark:text-white  mb-8 mt-4 ">
                {t('createAnAccount')}
              </h2>
            </div>

            <Formik
              initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
              onSubmit={handleFormSubmit}
              validationSchema={signUpSchema}
            >
              <Form>
                <div className="max-h-14 mb-8 min-h-12">
                  <TextInput name="fullName" type="text" label={t('fullName')} placeholder={t('enterYourFullName')} />
                </div>

                <div className="max-h-14 mb-8 min-h-12">
                  <TextInput name="email" type="email" label={t('email')} placeholder={t('enterYourRegisteredEmail')} />
                </div>

                <div className="max-h-14 mb-8 min-h-12">
                  <FormikPasswordField
                    name="password"
                    label={t('password')}
                    placeholder={t('createAStrongPassword')}
                    showPasswordLabel="password"
                  />
                </div>

                <div className="max-h-14 mb-10 min-h-12">
                  <FormikPasswordField
                    name="confirmPassword"
                    label={t('password')}
                    placeholder={t('confirmPassword')}
                    showPasswordLabel="password"
                  />
                </div>

                <div className="w-full rounded-lg mt-6 justify-center items-center flex">
                  <Button variant="secondary" className="w-full" type="submit">
                    {t('signUp')}
                  </Button>
                </div>
                <div className="flex mt-10 justify-center items-center  text-sm font-medium text-gray-500 dark:text-gray-300">
                  {t('alreadyHaveAnAccount')}
                  <Button
                    variant="textLink"
                    className="text-black"
                    onClick={() => {
                      closeSignUpModal();
                      openSignInModal();
                    }}
                  >
                    {t('login')}
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
