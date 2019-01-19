import React from 'react';
import ImageGallery from './imageGallery';
import AboutUs from './aboutUs';
import DailyMenu from './dailyMenu'

export default class ReactSections extends React.Component {
  render() {
    return (
      <div className="container">
        <section id="new-section" className="content-section text-center">
          <div className="container menu-white-bg">
            <h1 className='section-title'>Меню</h1>
            <hr className='line-separator' />
            < DailyMenu />
            <p>
              Всеки делничен ден заведението предлага топли напитки и домашно приготвени закуски, храната е приготвена с много желание и любов изцяло от нас.
              Предлагаме разнообразни яснтия на ниски цени от бългърската и гръдската традиционна кухня.
              <br/><strong>Поръчки за обяд моля да бъдат нарпавени преди 11:00 ч.</strong>
            </p>
          </div>
        </section>

        <section id="about" className="content-section text-center">
          <div className='container menu-white-bg'>
            <h1 className='section-title'>Информация и работно време</h1>
            <hr className='line-separator' />
            < AboutUs />
          </div>
        </section>

        <section id="new-section" className="content-section text-center">
          <div className="container menu-white-bg">
            <h1 className='section-title'>Галерия</h1>
            <hr className='line-separator' />
            < ImageGallery />
          </div>
        </section>
      </div>
    );
  }
}
