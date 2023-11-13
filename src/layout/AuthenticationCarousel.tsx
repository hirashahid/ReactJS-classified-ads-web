import buyerReview from '@assets/images/buyer-review-1.png';
import flashSale from '@assets/images/flash-sale-1.png';
import priceTag from '@assets/images/price-tag-1.png';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { TranslationNamespaces } from 'constants/translationNamespaces';
export const AuthenticationCarousel = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);

  return (
    <Carousel>
      <div className="flex flex-col h-full items-center text-center justify-center ">
        <Image src={buyerReview} width={250} height={250} className="w-54" alt={t('flashSale')} unoptimized={true} />
        <h1 className="text-2xl font-medium">{t('userEase')}</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex flex-col h-full items-center justify-center">
        <Image src={flashSale} width={250} height={250} className="w-54" alt={t('buyerReview')} unoptimized={true} />
        <h1 className="text-2xl font-medium">{t('genuineOffers')}</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex flex-col h-full items-center justify-center">
        <Image src={priceTag} width={250} height={250} className="w-54" alt={t('lowPrice')} unoptimized={true} />
        <h1 className="text-2xl font-medium">{t('bestPrice')}</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </Carousel>
  );
};
