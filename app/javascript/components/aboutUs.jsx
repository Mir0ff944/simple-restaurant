import React from 'react';
import { Object } from 'es6-shim';

export default class AboutUs extends React.Component {

  constructor() {
    super();
    this.state = { contacts: [], open_hours: [] }
  }

  componentDidMount() {
    this.setState({
      contacts: [
        { id: 1, title: 'Адрес', value: 'ул. „Житница“ 44, 1612 Нпз Стедец, София' },
        { id: 2, title: 'Facebook', value: <a href='https://www.facebook.com/bistroagi5'>Натиснете тук!</a> },
        { id: 3, title: 'Google Maps', value: <a href='https://www.google.com/maps/place/Bistro+%26+Office+Persima+Ltd/@42.6854285,23.2786317,16.77z/data=!4m8!1m2!2m1!1sRestaurants!3m4!1s0x0:0x6cf443ee8e2b1252!8m2!3d42.6852047!4d23.2801178?hl=en-US'>Натиснете тук!</a> },
        { id: 4, title: 'Телефон', value: '+359 89 841 8162' }
      ],
      open_hours: [
        { id: 4, title: 'Понеделник', value: '07:00 до 17:00' },
        { id: 5, title: 'Вторник', value: '07:00 до 17:00' },
        { id: 6, title: 'Сряда', value: '07:00 до 17:00' },
        { id: 7, title: 'Четвъртък', value: '07:00 до 17:00' },
        { id: 8, title: 'Петък', value: '07:00 до 17:00' },
        { id: 9, title: 'Събота', value: '07:00 до 16:00' },
        { id: 10, title: 'Неделя', value: 'Затворено' }
      ]
    })
  }

  render() {
    return (
      <div className='row justify-content-md-center'>
        <div className='col-md-4'>
          <Build_info array={this.state.open_hours} />
        </div>
        <div className='col-md-4'>
          <Build_info array={this.state.contacts} />
        </div>
      </div>
    )
  }
}

function Build_info(props) {
  const list = props.array.map((item) =>
    <span key={item.id}><strong>{item.title}</strong>: {item.value}<br /></span>
  );

  return(
    <div className='info-list'>
      <p className='rem-1-font'>
        {list}
      </p>
    </div>
  )
}