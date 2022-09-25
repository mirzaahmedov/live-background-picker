import React from "react";
import styled from "styled-components";

import * as colors from "./utils/colors";

import Picker from "./components/Picker";

const Container = styled.div<{
  color: string;
  backgroundColor: string;
}>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;
const Headline = styled.h1`
  font-size: 10rem;
  text-align: center;
`;

const App = () => {
  const [theme, setTheme] = React.useState<{
    color: string;
    backgroundColor: string;
  }>({
    color: "black",
    backgroundColor: "#ffffff",
  });

  React.useEffect(
    function () {
      const color = colors.getContrastColorFromRGB(
        colors.converHexColorToRGB(theme.backgroundColor)
      );
      setTheme((state) => ({
        ...state,
        color,
      }));
    },
    [theme.backgroundColor]
  );

  return (
    <Container color={theme.color} backgroundColor={theme.backgroundColor}>
      <Picker
        color={theme.backgroundColor}
        onChange={(color) => {
          setTheme((state) => ({
            ...state,
            backgroundColor: color.hex,
          }));
        }}
      />
      <Headline>Content</Headline>
    </Container>
  );
};

export default App;
