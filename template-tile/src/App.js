import Tile from "./Tile";
import React from "react";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkgray;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 20px;
  overflow: clip;
`

const Sizes = [
  {w: 2, h: 2},
  {w: 5, h: 2}
]

const CreateTileGrid = (sizes) => {
  return sizes.map(size => {
    return (
    <Card width={(size.w * 100) + "px"} height={(size.h * 100) + "px"}>
      <Tile width={size.w} height={size.h}/>
    </Card>
    )
  }
  );
}

const App = () => (
  <Holder>
    {CreateTileGrid(Sizes)}
  </Holder>
);

export default App;
