import { useState, useEffect } from 'react';
import moment from 'jalali-moment';

const DateConverter = ({initialDate}) => {
  // const [gregorianDate, setGregorianDate] = useState('2023-08-31T18:14:14.903Z');
  const [jalaliDate, setJalaliDate] = useState('');

  useEffect(() => {
    const jalaliDateObject = moment(initialDate).locale('fa');
    const jalaliDateString = jalaliDateObject.format('jD jMMMM jYYYY');
    
    setJalaliDate(jalaliDateString);
  }, [initialDate]);

  return (
    <div>
      <p className='fw-bold gray-text-color'>{jalaliDate}</p>
    </div>
  );
};

export default DateConverter;
