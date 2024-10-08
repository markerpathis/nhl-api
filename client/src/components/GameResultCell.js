import TeamMap from "../utils/TeamMap";
import Box from "@mui/material/Box";

const GameResultCell = ({ game }) => {
  return (
    <>
      {(game.gameState === "LIVE" ||
        game.gameState === "OFF" ||
        game.gameState === "FINAL") && (
        <Box>
          {/* LISTS LIVE AND FINAL SCORES */}
          {
            TeamMap.find((team) => team.id === game.awayTeam.id)?.abbreviation
          }{" "}
          {game.awayTeam.score},{" "}
          {TeamMap.find((team) => team.id === game.homeTeam.id)?.abbreviation}{" "}
          {game.homeTeam.score}
          {game.gameState === "LIVE" && ` [Live]`}{" "}
          {(game.gameState === "OFF" || game.gameState === "FINAL") &&
            ` [Final]`}
        </Box>
      )}
      {/* FOR PREVIEW GAMES - DASH ONLY DISPLAYED WHEN RESULT COLUMN HEADER IS PRESENT ON LARGER SCREEN */}
      <Box sx={{ "@media screen and (max-width: 710px)": { display: "none" } }}>
        {(game.gameState === "FUT" || game.gameState === "PRE") && <div>-</div>}
      </Box>
    </>
  );
};

export default GameResultCell;
