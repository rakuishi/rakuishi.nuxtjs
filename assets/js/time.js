/**
 * @param {String} ISO8601
 * @return {String} formattedDatetime
 * @see https://docs.microsoft.com/en-us/scripting/javascript/date-and-time-strings-javascript#iso-date-format
 */
export const formattedDatetime = ISO8601 => {
  return new Date(ISO8601).toLocaleTimeString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};
