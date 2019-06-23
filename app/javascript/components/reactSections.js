import React from 'react';
const ImageGallery = lazy(() => import('./imageGallery'));
const AboutUs = lazy(() => import('./aboutUs'));
const DailyMenu = lazy (() => import('/.dailyMenu'));

export default class ReactSections extends React.Component {

  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  render() {
    return (
      <div className="container">
        <section id="menu" className="content-section text-center">
          <div className="container sections-content">
            <h1 className='section-title'>Меню</h1>
            <hr className='line-separator' />
            <div className="row justify-content-md-center">
              < DailyMenu />
              <p className='menu-info'>
                Всеки делничен ден заведението предлага топли напитки и домашно приготвени закуски,
                <br /> храната е приготвена с много желание и любов изцяло от нас.
                <br />Предлагаме разнообразни яснтия на ниски цени от бългърската и гръдската традиционна кухня.
                <br /><strong>Поръчки за обяд моля да бъдат нарпавени преди 11:00 ч. на телефон +359 89 841 8162</strong>
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="content-section text-center">
          <div className='container sections-content'>
            <h1 className='section-title'>Информация и работно време</h1>
            <hr className='line-separator' />
            < AboutUs />
          </div>
        </section>

        <section id="gallery" className="content-section text-center">
          <div className="container sections-content">
            <h1 className='section-title'>Галерия</h1>
            <hr className='line-separator' />
            < ImageGallery />
          </div>
        </section>
      </div>
    );
  }
}
