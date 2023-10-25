import { Button } from 'components/common/Button';

export const HomePage = (): JSX.Element => (
  <div className="bg-gray-300 flex items-center justify-center h-screen flex-col">
    <div className="flex">
      <h1 className="text-black text-7xl text-center">Buy or Sell certified pre-owned devices</h1>
    </div>
    <div className="flex m-8">
      <Button variant="primary" className="mr-4">
        Buy Devices
      </Button>
      <Button variant="secondary" className="ml-4">
        Sell Devices
      </Button>
    </div>
    <div>
      <p className="text-black">With thousands of devices, we have just the right one for you.</p>
    </div>
  </div>
);
