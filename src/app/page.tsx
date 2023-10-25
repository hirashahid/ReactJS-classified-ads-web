import { HomePage } from 'components/HomePage';
import { ItemCard } from 'components/ItemCard';

const Home = (): JSX.Element => (
  <>
    <HomePage />
    <div className="bg-white grid md:grid-cols-4 gap-5 p-5">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  </>
);

export default Home;
