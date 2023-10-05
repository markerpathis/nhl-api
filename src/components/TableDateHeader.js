var moment = require("moment-timezone");

const TableDateHeader = ({ schedule }) => {
  // example format "Wednesday, Octobther 4th"
  return <>{moment(schedule.date).format("dddd, MMMM Do")}</>;
};

export default TableDateHeader;
