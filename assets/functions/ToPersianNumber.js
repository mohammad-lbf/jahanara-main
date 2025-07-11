const ToPersianNumber = (num) => {
    return num
      .toString()
      .replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
  };

  export default ToPersianNumber;