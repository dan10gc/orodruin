import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "../components/ErrorBoundary";
import { Anchor, Nav, Grommet, Header } from "grommet";
import { Link, Outlet } from "react-router-dom";

const queryClient = new QueryClient();
const Root = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Grommet full background="light-1">
          <Header
            background="light-1"
            sticky="scrollup"
            pad={{ vertical: "medium", horizontal: "medium" }}
          >
            <Nav align="center" direction="row">
              {/* <Anchor href="/" label="Home">
                <Link to={`/`}>Home</Link>
              </Anchor> */}
              <Link to={`/`}>Home</Link>
              {/* <Anchor href="/characters" label="Characters"> */}
              <Link to={`/characters`}>Characters</Link>
              {/* </Anchor> */}
              <Anchor href="/quotes" label="Quotes" />
            </Nav>
          </Header>
          <Outlet />
        </Grommet>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default Root;
