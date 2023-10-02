import Box from "@mui/material/Box";
import TeamMap from "../utils/TeamMap";

const GameMatchupCell = ({ game }) => {
  return (
    <>
      <Box align="right" sx={{ width: "25%", px: 1, fontWeight: "bold" }}>
        {TeamMap.find((team) => team.id === game.teams.away.team.id)?.location}
      </Box>

      <Box align="center" sx={{ px: 1 }}>
        <img src={TeamMap.find((team) => team.id === game.teams.away.team.id)?.logo} alt="" width={40} />
      </Box>

      <Box align="center" sx={{ width: "5%", px: 0 }}>
        @
      </Box>

      <Box align="center" sx={{ px: 1 }}>
        <img src={TeamMap.find((team) => team.id === game.teams.home.team.id)?.logo} alt="" width={40} />
      </Box>

      <Box align="left" sx={{ width: "25%", px: 1, fontWeight: "bold" }}>
        {TeamMap.find((team) => team.id === game.teams.home.team.id)?.location}
      </Box>
    </>
  );
};

export default GameMatchupCell;
