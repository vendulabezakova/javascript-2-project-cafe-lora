import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Footer } from '../components/Footer/footer.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Banner } from '../components/Banner/banner.jsx';

const fetchDrinks = async () => {
  const response = await fetch('http://localhost:4000/api/drinks');
  const json = await response.json();
  return json.data;
};

const renderDrinks = async () => {
  const drinks = await fetchDrinks();

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header />
      <main>
        <Banner />
        <Menu drinks={drinks} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

renderDrinks();