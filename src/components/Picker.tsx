import React from "react";
import styled from "styled-components";
import { Wheel, ColorResult } from "@uiw/react-color";

const Container = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
`;

const Picker = ({
  color,
  onChange,
}: {
  color: string;
  onChange: (color: ColorResult) => void;
}) => {
  return (
    <Container>
      <Wheel className="picker" color={color} onChange={onChange} />
    </Container>
  );
};

export default Picker;
