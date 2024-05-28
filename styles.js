import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 45vh;
`;

export const StyledListItem = styled.li`
  border: 2px black solid;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledHeading = styled.h1`
  text-align: center;
`;

export const ListButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-block;
`;

export const StyledSelectForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: black solid 2px;
  border-radius: 5px;
  height: 33vh;
  margin: 14px;
  padding: 10px;
  margin-top: 30px;
`;

export const StyledNameInput = styled.input`
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 50%;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 18px;
`;

export const StyledStatsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  border: black solid 2px;
  border-radius: 5px;
  height: 37vh;
  margin: 14px;
  padding: 10px;
  list-style: none;
`;

export const StyledStatsListItems = styled.li`
  padding: 8px;
  width: 70px;
`;

export const StyledStatKey = styled.span`
  font-weight: bold;
  border-bottom: solid 1px black;
  padding: 2px;
`;
