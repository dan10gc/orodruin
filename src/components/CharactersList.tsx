import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchApi from "../utils";

// Components
import QuotesDialog from "./QuotesDialog";
import { Box, Grid, Heading, Pagination } from "grommet";
import CharacterItem from "./CharacterItem";
import { CharacterJSON } from "../utils/types";

const CharactersList = () => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState<{
    _id: string;
    name: string;
  } | null>(null);

  const { data, isLoading, isFetching } = useQuery<CharacterJSON>(
    ["character", page],
    () =>
      fetchApi("/character", {
        limit: 50,
        page,
      }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div id="characters">
      <Box direction="row" align="center" justify="between" pad={"large"}>
        <Heading>Characters</Heading>
        <Pagination
          // @ts-ignore
          numberItems={data?.total}
          step={50}
          onChange={({ page }) => {
            setPage(page);
          }}
          page={page}
        />
      </Box>

      <Grid gap="medium" columns={{ count: "fit", size: "medium" }} pad="large">
        {data?.docs.map((character) => {
          return (
            <CharacterItem
              isFetching={isFetching}
              isLoading={isLoading}
              character={character}
              setCharacter={setCharacter}
              setShow={setShow}
            />
          );
        })}
      </Grid>

      {show && <QuotesDialog character={character} setShow={setShow} />}
    </div>
  );
};

export default CharactersList;
