import {
  Anchor,
  Button,
  Card,
  Heading,
  NameValueList,
  NameValuePair,
  Text,
} from "grommet";
import { Character } from "../utils/types";

interface CharacterItemProps {
  character: Character;
  isLoading: boolean;
  isFetching: boolean;
  setShow: (show: boolean) => void;
  setCharacter: (character: { _id: string; name: string }) => void;
}

const CharacterItem = (props: CharacterItemProps) => {
  const { character, isLoading, isFetching, setCharacter, setShow } = props;
  const {
    _id,
    height,
    race,
    gender,
    birth,
    spouse,
    death,
    realm,
    hair,
    name,
    wikiUrl,
  } = character;

  return (
    <Card
      pad="small"
      background="dark-1"
      gap="medium"
      key={_id}
      onClick={() => null}
      skeleton={
        isLoading || isFetching
          ? {
              animation: true,
            }
          : undefined
      }
    >
      <Heading level={3}>{name}</Heading>
      <NameValueList>
        <NameValuePair name="Realm">
          <Text color="text-strong">{realm || "N/A"}</Text>
        </NameValuePair>
        <NameValuePair name="Birth">
          <Text color="text-strong">{birth || "N/A"}</Text>
        </NameValuePair>
        <NameValuePair name="Death">
          <Text color="text-strong">{death || "N/A"}</Text>
        </NameValuePair>
        <NameValuePair name="Height">
          <Text color="text-strong">{height || "N/A"}</Text>
        </NameValuePair>
        <NameValuePair name="Gender">
          <Text color="text-strong">{gender || "N/A"}</Text>
        </NameValuePair>
        <NameValuePair name="Spouse">
          <Text color="text-strong">{spouse || "N/A"}</Text>
        </NameValuePair>
        <NameValuePair name="Hair">
          <Text color="text-strong">{hair || "N/A"}</Text>
        </NameValuePair>
        <NameValuePair name="Race">
          <Text color="text-strong">{race || "N/A"}</Text>
        </NameValuePair>

        <Anchor label={wikiUrl} href={wikiUrl} />
      </NameValueList>
      <Button
        label="Quotes"
        onClick={() => {
          setShow(true);
          setCharacter({ _id, name });
        }}
        disabled={isLoading || isFetching}
      />
    </Card>
  );
};

export default CharacterItem;
