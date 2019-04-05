import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

// Import images
import dish_1 from '../images/dish_1.jpg';
import dish_2 from '../images/dish_2.jpg';
import dish_3 from '../images/dish_3.jpg';
import dish_4 from '../images/dish_4.jpg';
import dish_4_small from '../images/dish_4_small.jpg';
import dish_5 from '../images/dish_5.jpg';
import dish_5_preview from '../images/dish_5_preview.jpg';
import dish_6 from '../images/dish_6.jpg';
import dish_6_small from '../images/dish_6_small.jpg';
import restaurant_1 from '../images/restaurant_1.jpg'
import restaurant_2 from '../images/restaurant_2.jpg'
import restaurant_4 from '../images/restaurant_4.jpg'
import restaurant_5 from '../images/restaurant_5.jpg'
import restaurant_5_small from '../images/restaurant_5_small.jpg'

const photos = [
  { src: `${dish_1}`, width: 4, height: 3, alt: 'Dishes on display' },
  { src: `${dish_2}`, width: 4, height: 3, alt: 'Fries on oven and sausages' },
  { src: `${dish_3}`, width: 4, height: 2, alt: 'Musaka' },
  {
    src: `${dish_4}`,
    srcSet: [`${dish_4} 1440w`, `${dish_4_small} 1024w`],
    size: ['(min-width 768px) 40vw', '(min-width 1024px) 33.3vw'],
    width: 4, height: 3, alt: 'Dishes on display 2'
  },
  {
    src: `${dish_5}`,
    srcSet: [`${dish_5} 1440w`, `${dish_5_preview} 1024w`],
    size: ['(min-width 768px) 40vw', '(min-width 1024px) 33.3vw'],
    width: 4, height: 2, alt: 'Mackerel with lemon'
  },
  {
    src: `${dish_6}`,
    srcSet: [`${dish_6} 1440w`, `${dish_6_small} 1024w`],
    size: ['(min-width 768px) 40vw', '(min-width 1024px) 33.3vw'],
    width: 4, height: 2, alt: 'Chicken with potatoes and vegetables'
  },
  { src: `${restaurant_1}`, width: 4, height: 3, alt: 'View 1' },
  { src: `${restaurant_2}`, width: 4, height: 3, alt: 'View 2' },
  { src: `${restaurant_4}`, width: 5, height: 6, alt: 'View 3' },
  {
    src: `${restaurant_5}`,
    srcSet: [`${restaurant_5} 1440w`, `${restaurant_5_small} 1024w`],
    size: ['(min-width 768px) 40vw', '(min-width 1024px) 33.3vw'],
    width: 4, height: 3, alt: 'View 4'
  }
];

export default class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}