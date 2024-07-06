import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Footer } from '../components/Footer/footer.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Banner } from '../components/Banner/banner.jsx';

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinks = json.data;


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true}/>
    <main>
      <Banner />
      <Menu drinks={drinks}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);


const hamburger = document.querySelector('.nav-btn');
const menuPolozky = document.querySelector('.rollout-nav');

const closeNav = () => {
  menuPolozky.classList.add('nav-closed');
};

hamburger.addEventListener('click', () => { 
  menuPolozky.classList.toggle('nav-closed');});

menuPolozky.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeNav();
  }
});


const forms = document.querySelectorAll('.drink__controls');

forms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    const drinkId = event.currentTarget.dataset.id;
    const ordered = button.classList.contains('order-btn--ordered');

    console.log('ID nápoje:', drinkId);

      const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ op: 'replace', path: '/ordered', value: !ordered }]),
      });

      const responseData = await response.json();
      console.log(responseData);

  
      button.classList.toggle('order-btn--ordered');
      button.textContent = button.classList.contains('order-btn--ordered') ? 'Zrušit' : 'Objednat';
    
  });
});