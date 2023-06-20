import { customRender } from "../../utils/testUtils";
import CharacterItem from "../CharacterItem";

// should display a list of characters
describe("CharactersList", () => {
  it("should display a list of characters", () => {
    const { getByText } = customRender(
      <CharacterItem
        isFetching={false}
        isLoading={false}
        character={{
          _id: "1",
          name: "Legolas",
          height: "6",
          race: "Human",
          gender: "Male",
          birth: "unknown",
          spouse: "N/A",
          death: "Alive",
          realm: "N/A",
          hair: "Blue",
          wikiUrl: "https://lotr.fandom.com/wiki/Legolas",
        }}
        setShow={() => null}
        setCharacter={() => null}
      />
    );
    expect(getByText("Legolas")).toBeInTheDocument();
  });
  it.todo("should display N/A for missing data");
});
