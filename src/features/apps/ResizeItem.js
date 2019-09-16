import React, { useEffect, useState } from "react";
import styled from "styled-components";

// actions
import { data } from "./data";

const App = () => {
  const [number, setNumber] = useState(5);
  const [dataSlice, setDataSlice] = useState(data);
  const [itemWidth, setItemWidth] = useState(null);

  useEffect(() => {
    if (number !== "") {
      const newData = data.slice(0, number);
      if (number <= 4 && number < data.length) {
        setItemWidth(48.5);
      } else if (number >= 5) {
        setItemWidth(23.5);
      }
      setDataSlice(newData);
    }
  }, [number]);

  const onChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  return (
    <main>
      <ContainerStyled>
        <TitleStyled>Users</TitleStyled>
        <input type="text" value={number} onChange={onChangeNumber} />
        <GridStyled>
          {dataSlice.length > 0 &&
            dataSlice.map((val, key) => (
              <CardStyled key={key} itemWidth={itemWidth}>
                <BoxStyled>
                  <button type="button">
                    <img src="/images/icon-delete.png" alt="Trash" />
                  </button>
                  <TitleStyled>{val.name}</TitleStyled>
                  <DateStyled>{val.id}</DateStyled>
                </BoxStyled>
              </CardStyled>
            ))}
        </GridStyled>
      </ContainerStyled>
    </main>
  );
};

export default App;

// styled
const ContainerStyled = styled.div`
  max-width: 768px;
  margin: 0 auto;
  border: 1px solid #a5a4a4;
  margin-top: 30px;
  padding: 10px 20px;
`;

const TitleStyled = styled.h1`
  margin-bottom: 15px;
`;

const BoxStyled = styled.div`
  padding: 5px 10px;
  button {
    display: none;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
  }
`;

const CardStyled = styled.div`
  position: relative;
  border: 1px solid #525151;
  width: ${props => props.itemWidth}%;
  margin: 0.7%;

  &:hover button {
    display: block;
  }
`;

const DateStyled = styled.div`
  font-size: 12px;
`;

const GridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &::after {
    content: "";
    flex: auto;
  }
`;
