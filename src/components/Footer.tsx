'use client';

import { Button } from 'app/common/Button';
import { Footer as FlowBiteFooter } from 'flowbite-react';
import useTranslation from 'next-translate/useTranslation';

import { TranslationNamespaces } from 'constants/translationNamespaces';

export const Footer = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-gray-200 w-screen px-20 py-8 items-center flex max-sm:flex-col max-sm:items-start justify-between">
        <p className="text-2xl text-primary-300">{t('featureAdHeading')}</p>
        <p className="text-gray-400">{t('featureAdText')}</p>
        <Button className="text-bold text-xl max-w-fit justify-right">{t('featureAdButton')}</Button>
      </div>
      <FlowBiteFooter bgDark className="flex flex-col">
        <div className="flex flex-row w-full bg-primary-200 grid-cols-2">
          <div className="grid w-1/3 grid-cols-1 px-6 py-8">
            <FlowBiteFooter.Title title={t('getInTouchHeader')} className="text-white text-lg"></FlowBiteFooter.Title>
            <p className="text-gray-400">{t('getInTouchParag')}</p>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <FlowBiteFooter.Title title={t('categoriesHeader')} className="text-white text-xl" />
              <FlowBiteFooter.LinkGroup col className="text-gray-400">
                <FlowBiteFooter.Link href="#">{t('mobilePhone')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('accessories')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('handsfree')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('charger')}</FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title={t('topSearches')} className="text-white text-xl" />
              <FlowBiteFooter.LinkGroup col className="text-gray-400">
                <FlowBiteFooter.Link href="#">{t('iphone')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('samsung')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('onePlus')} 12</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('onePlus')}</FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title={t('topCities')} className="text-white text-xl" />
              <FlowBiteFooter.LinkGroup col className="text-gray-400">
                <FlowBiteFooter.Link href="#">{t('lahore')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('islamabad')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('karachi')}</FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title={t('aboutUs')} className="text-white text-xl" />
              <FlowBiteFooter.LinkGroup col className="text-gray-400">
                <FlowBiteFooter.Link href="#">{t('whoAreWe')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('privacyPolicy')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('termsOfUse')}</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">{t('help')}</FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full text-gray-300 bg-primary-100 px-4 py-4 flex items-center justify-center">
          <FlowBiteFooter.Copyright
            className="text-gray-400 text-center"
            by={t('copyright')}
            href="#"
            year={currentYear}
          />
        </div>
      </FlowBiteFooter>
    </>
  );
};
