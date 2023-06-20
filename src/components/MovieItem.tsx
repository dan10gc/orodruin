import { Card, Heading, NameValueList, NameValuePair, Text } from "grommet";
import { Movie } from "../utils/types";

interface MovieItemProps {
  movie: Movie;
  isLoading: boolean;
}

const MovieItem = (props: MovieItemProps) => {
  const { movie, isLoading } = props;
  const {
    _id,
    name,
    runtimeInMinutes,
    budgetInMillions,
    boxOfficeRevenueInMillions,
    academyAwardNominations,
    academyAwardWins,
    rottenTomatoesScore,
  } = movie;

  return (
    <Card
      pad="small"
      background="dark-1"
      gap="medium"
      key={_id}
      skeleton={
        isLoading
          ? {
              animation: true,
            }
          : undefined
      }
    >
      <Heading level={3}>{name}</Heading>

      <NameValueList>
        <NameValuePair name="Run Time">
          <Text color="text-strong">{runtimeInMinutes}</Text>
        </NameValuePair>
        <NameValuePair name="Budget">
          <Text color="text-strong">{`$${parseFloat(
            budgetInMillions.toFixed(1)
          )} M`}</Text>
        </NameValuePair>
        <NameValuePair name="Box Office Revenue">
          <Text color="text-strong">
            {`$${parseFloat(boxOfficeRevenueInMillions.toFixed(1))} M`}
          </Text>
        </NameValuePair>
        <NameValuePair name="Academy Award Nominations">
          <Text color="text-strong">{academyAwardNominations}</Text>
        </NameValuePair>
        <NameValuePair name="Academy Award Wins">
          <Text color="text-strong">{academyAwardWins}</Text>
        </NameValuePair>
        <NameValuePair name="Rotten Tomatoes Score">
          <Text color="text-strong">
            {`${parseFloat(rottenTomatoesScore.toFixed(1))}%`}
          </Text>
        </NameValuePair>
      </NameValueList>
    </Card>
  );
};

export default MovieItem;
