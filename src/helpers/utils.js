const formatAsPrice = (price) => {
  const dollars = price / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const formatDateAsString = (date) => {
  const offset = date.getTimezoneOffset();
  const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
  return adjustedDate.toISOString().split("T")[0];
};

const validateParams = (ctx, next) => {
  const yearFilter = ctx.query.year;
  if (yearFilter && isNaN(yearFilter)) {
    ctx.status = 400;
    ctx.body = { message: `Invalid year param ${yearFilter}` };
  }
};

module.exports = { formatAsPrice, formatDateAsString, validateParams };
