import { Box, Grommet, Heading, Paragraph } from "grommet";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Grommet full background="light-1">
      <Box justify="center" align="center" id="error-page" height="100%">
        <Heading size="xLarge">Oops!</Heading>
        <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
        <Paragraph>
          <i>{error?.statusText || error?.message}</i>
        </Paragraph>
      </Box>
    </Grommet>
  );
}
