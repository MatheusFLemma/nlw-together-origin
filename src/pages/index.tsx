import { NextPage } from 'next';

import Header from '../components/Header/';
import Home from '../components/Home/';
import Divider from '../components/Divider/';

const App: NextPage = () => {
  return (
    <>
      <Header />

      <main>
        <Home />

        <Divider type={1} />
      </main>
    </>
  );
};

export default App;
