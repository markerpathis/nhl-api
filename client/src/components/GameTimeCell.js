var moment = require("moment-timezone");

const GameTimeCell = ({ game }) => {
  // console.log(game);
  const momentFormat = (time) => {
    // guess local (example format: 4:00 PM)
    const gameTime = moment(time).local().format("h:mm A");

    // guess user's timezone and convert to the abbreviation (example: PDT)
    const zoneName = moment.tz.guess();
    const timeZone = moment.tz(zoneName).zoneAbbr();

    // merge the time and timezone abbreviation together
    const formattedTime = gameTime + " " + timeZone;

    return formattedTime;
  };

  return <div> {momentFormat(game.startTimeUTC)}</div>;
};

export default GameTimeCell;
