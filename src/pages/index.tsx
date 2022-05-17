import { NextPage } from 'next';

import Header from '../components/Header/';
import Home from '../components/Home/';
import Divider from '../components/Divider/';
import About from '../components/About';
import Services from '../components/Services';

const App: NextPage = () => {
  return (
    <>
      <Header />

      <main>
        <Home />

        <Divider type={1} />

        <About />

        <Divider type={2} />

        <Services />

        <Divider type={1} />
      </main>
    </>
  );
};

export default App;
