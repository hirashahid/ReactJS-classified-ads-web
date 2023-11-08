import useTranslation from 'next-translate/useTranslation';

import { HomeScreen } from 'components/HomeScreen';
import { ItemCard } from 'components/ItemCard';
import { ItemGroup } from 'components/ItemGroup';
import { TranslationNamespaces } from 'constants/translationNamespaces';
const Home = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);

  return (
    <>
      <HomeScreen />
      <ItemGroup title={t('bestSellers')}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ItemGroup>
    </>
  );
};

export default Home;
