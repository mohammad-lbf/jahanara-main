import React, { useState } from 'react'
import styles from '../../../../../styles/filterselect.module.css';
import ToPersianNumber from '@/assets/functions/ToPersianNumber';

function CountByBook({data , selectedOption , handleChange}) {
    const count = data.reduce((acc, item) => {
        acc[item.book] = (acc[item.book] || 0) + 1;
        return acc;
      }, {});

    return (
        <select
        id="filter"
        className={styles.selectBox}
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="all">همه دروس ({ToPersianNumber(data.length)})</option>
        <option value="quran">آموزش قرآن ({ToPersianNumber(count.quran || 0)})</option>
        <option value="riazi">ریاضی ({ToPersianNumber(count.riazi || 0)})</option>
        <option value="oloom">علوم ({ToPersianNumber(count.oloom || 0)})</option>
        <option value="farsi">فارسی ({ToPersianNumber(count.farsi || 0)})</option>
        <option value="hedye">هدیه های آسمان ({ToPersianNumber(count.hedye || 0)})</option>
        <option value="motaleat">مطالعات اجتماعی ({ToPersianNumber(count.motaleat || 0)})</option>
      </select>
    )
}

export default CountByBook
