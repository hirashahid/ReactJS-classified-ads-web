'use client';
import { useState } from 'react';
import facebookLogo from '@assets/icons/facebook-logo.svg';
import googleLogo from '@assets/icons/google-logo.svg';
import { DevicePhoneMobileIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { Button } from 'app/common/Button';
import { Checkbox, Label, Modal } from 'flowbite-react';
import { Form, Formik } from 'formik';
import { AuthenticationCarousel } from 'layout/AuthenticationCarousel';
import Image from 'next/image';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { signInSchema } from 'Schema/signInSchema';

import { FormikPasswordField } from 'components/common/FormikPasswordField/FormikPasswordField';
import { TextInput } from 'components/common/TextInput/TextInput';
import { TranslationNamespaces } from 'constants/translationNamespaces';

type SignInProps = {
  isOpenSignInModal: boolean;
  openForgotPasswordModal: () => void;
  closeSignInModal: () => void;
  openSignUpModal: () => void;
};

export const SignInComponent = ({
  isOpenSignInModal,
  openForgotPasswordModal,
  closeSignInModal,
  openSignUpModal,
}: SignInProps): JSX.Element => {
  const [isPhoneSignIn, setIsPhoneSignIn] = useState(false);
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  const handleFormSubmit = async (values: unknown): Promise<void> => {
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Http-X-Api-Token': '1a3b5c7d9eb1a2r3b4e5qx8y9z0w1v2',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.error(response.body);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('API error:', error);
    }
  };

  return (
    <Modal show={isOpenSignInModal} size="6xl" popup onClose={closeSignInModal} className="rounded-lg">
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
          <div className="h-1/6  "></div>
        </div>
        <div className=" justify-center justify-items-center w-full md:w-7/12 pl-10">
          <div className="w-5/6 justify-center justify-items-center ">
            <h2 className="text-3xl font-large text-gray-900 dark:text-white  mb-8 mt-4">{t('signIn')}</h2>
            <Formik
              initialValues={{ email: '', phone: '', password: '' }}
              onSubmit={handleFormSubmit}
              validationSchema={signInSchema}
            >
              <Form>
                <div>
                  {!isPhoneSignIn ? (
                    <div className="max-h-14 mb-8 min-h-12">
                      <TextInput name="email" type="email" label={t('email')} placeholder={t('enterYourEmail')} />
                    </div>
                  ) : (
                    <div className="max-h-14 mb-8 min-h-12">
                      <div className="">
                        <Label htmlFor="phone" value={t('phoneNumber')} className="text-sm font-semibold" />
                      </div>
                      <div className="flex flex-row min-h-12  max-h-14 ">
                        <div className="w-2/12 mr-3 mt-1">
                          <TextInput disabled placeholder="+92" type="text" name="+92" />
                        </div>

                        <div className="flex-row w-full  mr-3 mt-1">
                          <TextInput label="" name="phone" placeholder={t('enterYourMobileNumber')} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className=" w-full max-h-16">
                  <FormikPasswordField
                    name="password"
                    label={t('password')}
                    placeholder={t('enterYourPassword')}
                    showPasswordLabel="password"
                  />
                </div>

                <div className="flex justify-between pt-2">
                  <div className="flex items-center gap-2 ">
                    <Checkbox id="remember" />
                    <Label className="text-gray-500" htmlFor="remember">
                      {t('rememberMe')}
                    </Label>
                  </div>
                  <Button
                    variant="textLink"
                    className="text-gray-500"
                    onClick={() => {
                      closeSignInModal();
                      openForgotPasswordModal();
                    }}
                  >
                    {t('forgotPassword?')}
                  </Button>
                </div>

                <div className="w-full rounded-lg mt-6 justify-center  items-center flex">
                  <Button variant="secondary" className="w-full" type="submit">
                    {t('login')}
                  </Button>
                </div>
              </Form>
            </Formik>

            <div className="w-full mt-8 flex justify-center items-center">
              <div className="w-6/12 border border-gray-200 h-px " />
              <p className=" ml-2 mr-2 text-gray-400">or</p>
              <div className="w-6/12 border border-gray-200 h-px" />
            </div>

            <div className="w-full mt-8 flex">
              <div className="w-4/6 rounded-lg border bg-white hover:bg-gray-200">
                <Button variant="link" className="w-full ">
                  <Image
                    width={16}
                    src={googleLogo}
                    className="w-4 mr-2"
                    height={16}
                    alt={t('google')}
                    unoptimized={true}
                  />
                  {t('continueWithGoogle')}
                </Button>
              </div>
              <div className="w-1/6   flex justify-center items-center ">
                <Button variant="iconLink" className=" w-1/2 ">
                  <div className="w-5 h-5">
                    <Image src={facebookLogo} width={20} height={20} alt={t('facebook')} unoptimized={true} />
                  </div>
                </Button>
              </div>
              <div className="w-1/6">
                {isPhoneSignIn === false ? (
                  <Button variant="iconLink" className="w-1/2" onClick={() => setIsPhoneSignIn(true)}>
                    <DevicePhoneMobileIcon className="text-black h-5 w-5" aria-label={t('mobileIcon')} />
                  </Button>
                ) : (
                  <Button variant="iconLink" className="w-1/2 " onClick={() => setIsPhoneSignIn(false)}>
                    <EnvelopeIcon className="text-black h-5 w-5" aria-label={t('envelopeIcon')} />
                  </Button>
                )}
              </div>
            </div>

            <div className="flex mt-12 justify-center items-center  text-sm font-medium text-gray-500 dark:text-gray-300">
              {t('dontHaveAnAccount')}
              <Button
                className=" text-black"
                variant="textLink"
                onClick={() => {
                  closeSignInModal();
                  openSignUpModal();
                }}
              >
                {t('register')}
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
