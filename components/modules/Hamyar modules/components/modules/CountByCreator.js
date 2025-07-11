import React from 'react';
import styles from '../../../../../styles/filterselect.module.css';
import ToPersianNumber from '@/assets/functions/ToPersianNumber';
import personnelList from '@/DB/personnelList';

function CountByCreator({ data, selectedCreator, handleChange }) {
  // شمارش تعداد محتوای هر طراح
  const countByCreator = data.reduce((acc, item) => {
    acc[item.creator] = (acc[item.creator] || 0) + 1;
    return acc;
  }, {});

  return (
    <select
      id="filter"
      className={styles.selectBox}
      value={selectedCreator}
      onChange={handleChange}
    >
      <option value="all">همه طراحان ({ToPersianNumber(data.length)})</option>
      {personnelList.map((person) => {
        const count = countByCreator[person.name] || 0;
        if (count > 0) {
          return (
            <option key={person.name} value={person.name}>
              {person.name} ({ToPersianNumber(count)})
            </option>
          );
        }
        return null;
      })}
    </select>
  );
}

export default CountByCreator;
