import React from "react";
import styled from "styled-components";
// actions

const Card = ({ name, date, onClick }) => {
  return (
    <>
      <CardStyled>
        <BoxStyled>
          <button type="button" onClick={onClick}>
            <img src="/images/icon-delete.png" alt="Trash" />
          </button>
          <TitleStyled>{name}</TitleStyled>
          <DateStyled>{date}</DateStyled>
        </BoxStyled>
      </CardStyled>
    </>
  );
};

export default Card;

// styled
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
  width: 30%;
  &:hover button {
    display: block;
  }
`;

const TitleStyled = styled.h3`
  text-transform: capitalize;
  padding-right: 30px;
  margin-top: 30px;
`;

const DateStyled = styled.div`
  font-size: 12px;
`;
