import moment from 'moment';

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (d) => {
  const date = new Date(d);
  let m = moment(
    new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
  );
  return m.format('MMM Do YY');
};
