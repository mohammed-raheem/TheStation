import React, {useState} from 'react';

import WithEvents from './WithEvents';
import NoEvents from './NoEvents';

function Events() {
  const [eventsList, setEventsList] = useState([
    {
      key: '1',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '2',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '3',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '4',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '5',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '6',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
  ]);

  return eventsList === null ? (
    <NoEvents />
  ) : (
    <WithEvents eventsList={eventsList} />
  );
}

export default Events;
