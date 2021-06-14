import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Main = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: lightblue;
  width: 100%;
  height: 100%;
`;

const Tile  = React.forwardRef((props, ref) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(  
      () => {
        setDate(new Date())
      },  
      1000  
    );  
  }, []);

  return (
      <Main>
         <h1>{date.toLocaleString()}</h1>
      </Main>
  );
});

export default Tile;
