import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

// Import images
import dish_1 from '../images/dish_1.jpg';
import dish_2 from '../images/dish_2.jpg';
import dish_3 from '../images/dish_3.jpg';
import dish_4 from '../images/dish_4.png';
import dish_5 from '../images/dish_5.png';
import dish_6 from '../images/dish_6.png';
import restaurant_1 from '../images/restaurant_1.jpg'
import restaurant_2 from '../images/restaurant_2.jpg'
import restaurant_4 from '../images/restaurant_4.jpg'
import restaurant_5 from '../images/restaurant_5.png'


// convert to using setsrc http://neptunian.github.io/react-photo-gallery/examples/srcset-and-sizes.html
const photos = [
  { src: `${dish_1}`, width: 4, height: 3 },
  { src: `${dish_2}`, width: 4, height: 3 },
  { src: `${dish_3}`, width: 4, height: 2 },
  { src: `${dish_4}`, width: 4, height: 3 },
  { src: `${dish_5}`, width: 4, height: 2 },
  { src: `${dish_6}`, width: 4, height: 2 },
  { src: `${restaurant_1}`, width: 4, height: 3 },
  { src: `${restaurant_2}`, width: 4, height: 3 },
  { src: `${restaurant_4}`, width: 5, height: 6 },
  { src: `${restaurant_5}`, width: 4, height: 3 }
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