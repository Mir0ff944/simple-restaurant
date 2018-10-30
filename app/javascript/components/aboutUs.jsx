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
        { id: 2, title: 'Facebook', value: <u><a href='https://www.facebook.com/bistroagi5'>Натиснете тук!</a></u> },
        { id: 3, title: 'Телефон', value: '+359 89 841 8162' }
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