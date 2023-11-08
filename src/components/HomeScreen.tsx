import useTranslation from 'next-translate/useTranslation';

import { Button } from 'components/common/Button';
import { TranslationNamespaces } from 'constants/translationNamespaces';

export const HomeScreen = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.HOME);

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen flex-col">
      <div className="flex">
        <h1 className="text-black text-7xl text-center">{t('homeHeader')}</h1>
      </div>
      <div className="flex m-8">
        <Button variant="primary" className="mr-4">
          {t('buyButton')}
        </Button>
        <Button variant="secondary" className="ml-4">
          {t('sellButton')}
        </Button>
      </div>
      <div>
        <p className="text-black">{t('homeParag')}</p>
      </div>
    </div>
  );
};
