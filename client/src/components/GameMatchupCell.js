import Box from "@mui/material/Box";
import TeamMap from "../utils/TeamMap";

const GameMatchupCell = ({ game }) => {
  return (
    <>
      {/* AWAY TEAM LOCATION  */}
      <Box align="right" sx={{ width: "25%", px: 1, fontWeight: "bold" }}>
        {TeamMap.find((team) => team.id === game.awayTeam.id)?.location}
      </Box>

      {/* AWAY TEAM LOGO */}
      <Box align="center" sx={{ px: 1 }}>
        <img src={TeamMap.find((team) => team.id === game.awayTeam.id)?.logo} alt="" width={40} />
      </Box>

      <Box align="center" sx={{ width: "5%", px: 0 }}>
        @
      </Box>

      {/* HOME TEAM LOGO */}
      <Box align="center" sx={{ px: 1 }}>
        <img src={TeamMap.find((team) => team.id === game.homeTeam.id)?.logo} alt="" width={40} />
      </Box>

      {/* HOME TEAM LOCATION */}
      <Box align="left" sx={{ width: "25%", px: 1, fontWeight: "bold" }}>
        {TeamMap.find((team) => team.id === game.homeTeam.id)?.location}
      </Box>
    </>
  );
};

export default GameMatchupCell;
