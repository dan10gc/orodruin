// Components
import { Box, Grid, Heading, Text, Carousel, Button } from "grommet";
// Hooks
import useMoviesAPI from "../utils/useMoviesAPI";
import MovieItem from "./MovieItem";

const skeleton = { message: { start: "Loading", end: "Content Loaded" } };

const MoviesList = () => {
  const { data, isLoading } = useMoviesAPI();

  return (
    <div id="movies">
      <Box align="center" pad="large">
        <Carousel controls="arrows" height="large" width="large">
          <Box
            fill
            align="center"
            justify="center"
            background="lavender"
            gap="small"
          >
            <Text weight="bold" size="xlarge">
              Slide 1
            </Text>
            <Button label="Button" />
          </Box>
          <Box
            fill
            align="center"
            justify="center"
            background="light-3"
            gap="small"
          >
            <Text weight="bold" size="xlarge">
              Slide 2
            </Text>
            <Button label="Button" />
            <Button label="Button" />
          </Box>
          <Box
            fill
            align="center"
            justify="center"
            background="light-5"
            gap="small"
          >
            <Text weight="bold" size="xlarge">
              Slide 3
            </Text>
            <Button label="Button" />
            <Button label="Button" />
            <Button label="Button" />
          </Box>
        </Carousel>
      </Box>
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
