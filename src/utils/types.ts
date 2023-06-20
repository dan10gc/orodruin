export interface Character {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}

export interface CharacterJSON {
  docs: Character[];
}

export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface MovieJSON {
  docs: Movie[];
}

export interface CharacterQuote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface CharacterQuoteJSON {
  docs: CharacterQuote[];
}
