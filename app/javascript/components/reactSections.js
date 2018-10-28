import React from 'react';
import ImageGallery from './imageGallery';
import AboutUs from './aboutUs';

export default class ReactSections extends React.Component {
  render() {
    return (
      <div className="container">
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
