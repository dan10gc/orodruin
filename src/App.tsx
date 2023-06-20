import "./App.css";
// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import { Anchor, Nav, Grommet, Header } from "grommet";
import { Box } from "grommet";
import MoviesList from "./components/MoviesList";
import CharactersList from "./components/CharactersList";
import ErrorBoundary from "./components/ErrorBoundary";

// Query Client
const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Grommet full background="light-1">
          <Box pad="large">
            <Header
              background="light-1"
              sticky="scrollup"
              pad={{ vertical: "small" }}
            >
              <Nav align="center" direction="row">
                <Anchor href="#movies" label="Movies" />
                <Anchor href="#characters" label="Characters" />
              </Nav>
            </Header>
            <MoviesList />
            <CharactersList />
          </Box>
        </Grommet>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
