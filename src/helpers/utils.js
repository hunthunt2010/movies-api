const formatAsPrice = (price) => {
  const dollars = price / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const formatDateAsString = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
};

module.exports = { formatAsPrice, formatDateAsString };
