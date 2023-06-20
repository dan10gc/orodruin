// Components
import { Box, Grid, Heading } from "grommet";
// Hooks
import useMoviesAPI from "../utils/useMoviesAPI";
import MovieItem from "./MovieItem";

const skeleton = { message: { start: "Loading", end: "Content Loaded" } };

const MoviesList = () => {
  const { data, isLoading } = useMoviesAPI();

  return (
    <div id="movies">
      <Heading size="xLarge">Lord of The Rings Movies</Heading>
      <Box
        pad="large"
        height="100%"
        width={"100%"}
        skeleton={isLoading ? skeleton : undefined}
      >
        <Grid gap="medium" columns={{ count: "fit", size: "medium" }}>
          {data?.docs.map((movie) => {
            return <MovieItem movie={movie} isLoading={isLoading} />;
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default MoviesList;
