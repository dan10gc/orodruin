import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Button,
  Heading,
  Layer,
  NameValueList,
  NameValuePair,
  Pagination,
  Spinner,
  Text,
} from "grommet";
import fetchApi from "../utils";
import { useState } from "react";
import useMoviesAPI from "../utils/useMoviesAPI";
import { CharacterQuoteJSON } from "../utils/types";
interface QuotesDialogProps {
  character: {
    _id: string;
    name: string;
  } | null;
  setShow: (show: boolean) => void;
}

interface CharacterQuotesProps {
  characterQuotes: CharacterQuoteJSON | undefined;
}

const CharacterQuotes = ({ characterQuotes }: CharacterQuotesProps) => {
  const { data: movies } = useMoviesAPI();
  return (
    <>
      {characterQuotes?.docs.map((quote) => {
        const movie = movies?.docs.find((movie) => {
          return movie._id === quote.movie;
        });
        return (
          <NameValueList>
            {/* Map movie ID with movie title */}
            <NameValuePair name={movie?.name}>
              <Text>{quote.dialog}</Text>
            </NameValuePair>
          </NameValueList>
        );
      })}
    </>
  );
};

const QuotesDialog = ({ character, setShow }: QuotesDialogProps) => {
  const [page, setPage] = useState(1);

  const {
    data: characterQuotes,
    isLoading,
    isFetching,
  } = useQuery<CharacterQuoteJSON>(
    ["quote", character?._id, page],
    () =>
      fetchApi(`/character/${character?._id}/quote`, {
        limit: 5,
        page,
      }),
    { enabled: !!character?._id }
  );

  return (
    <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
      <Box pad="large" width={"100%"}>
        <Box direction="row" align="center" justify="between">
          <Heading level={3}>{`${character?.name} Quotes`}</Heading>

          <Pagination
            numberItems={characterQuotes?.total}
            step={50}
            onChange={({ page }) => {
              setPage(page);
            }}
            page={page}
          />
        </Box>
        <Box align="center" justify="center" pad="small">
          {isLoading || isFetching ? (
            <Spinner />
          ) : (
            <CharacterQuotes characterQuotes={characterQuotes} />
          )}

          {characterQuotes?.docs.length === 0 && (
            <Heading fill>🔍 No Quotes</Heading>
          )}
        </Box>

        <Button label="close" onClick={() => setShow(false)} />
      </Box>
    </Layer>
  );
};

export default QuotesDialog;
