import TeamMap from "../utils/TeamMap";
import Box from "@mui/material/Box";

const GameResultCell = ({ game }) => {
  return (
    <>
      {(game.status.abstractGameState === "Live" || game.status.abstractGameState === "Final") && (
        <Box>
          {game.status.abstractGameState === "Live" && `Live: `} {game.status.abstractGameState === "Final" && `Final: `}({TeamMap.find((team) => team.id === game.teams.away.team.id)?.abbreviation}{" "}
          {game.teams.away.score}, {TeamMap.find((team) => team.id === game.teams.home.team.id)?.abbreviation} {game.teams.home.score})
        </Box>
      )}
      <Box sx={{ "@media screen and (max-width: 710px)": { display: "none" } }}>{game.status.abstractGameState === "Preview" && <div>-</div>}</Box>
    </>
  );
};

export default GameResultCell;
