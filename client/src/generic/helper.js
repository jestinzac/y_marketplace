const formattedDate = (date) => {
  if (!isDate(date)) return "--";
  
  const locale = navigator.language;
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    timeZone: "UTC",
  };

  return new Date(date).toLocaleDateString(locale, options);
};

const isDate = (date) => Date.parse(date) > 0;

export {
  formattedDate
}