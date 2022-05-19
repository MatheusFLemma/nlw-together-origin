import { NextPage } from 'next';

import Header from '../components/Header/';
import Home from '../components/Home/';
import Divider from '../components/Divider/';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageToUp from '../components/PageToUp';

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
        <Testimonials />
        <Divider type={2} />
        <Contact />
        <Divider type={1} />
      </main>

      <Footer />

      <PageToUp />
    </>
  );
};

export default App;
