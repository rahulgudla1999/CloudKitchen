import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Specialty from './components/Specialty';
import Testimonials from './components/Testimonials';
import Order from './components/Order';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="ikat" />
      <Story />
      <Menu />
      <div className="ikat thin" />
      <Gallery />
      <Stats />
      <Specialty />
      <Testimonials />
      <Order />
      <Footer />
      <BackToTop />
    </>
  );
}
