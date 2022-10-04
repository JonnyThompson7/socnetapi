const dayjs = require('dayjs');

const dateFormat = function(date) {
  let formatDate = dayjs(date).format('MM/DD/YYYY');
  return formatDate;
};

module.exports = dateFormat;