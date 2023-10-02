var moment = require("moment-timezone");

const GameTimeCell = ({ game }) => {
  const momentFormat = (time) => {
    const gameTime = moment(time).local().format("h:mm A");

    const zoneName = moment.tz.guess();
    const timeZone = moment.tz(zoneName).zoneAbbr();

    const formattedTime = gameTime + " " + timeZone;

    return formattedTime;
  };

  return <div> {momentFormat(game.gameDate)}</div>;
};

export default GameTimeCell;
