var moment = require("moment-timezone");

const TableDateHeader = ({ schedule }) => {
  return <>{moment(schedule.date).format("dddd, MMMM Do")}</>;
};

export default TableDateHeader;
