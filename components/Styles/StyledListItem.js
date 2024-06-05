import styled from "styled-components";

const StyledListItem = styled.li`
  ${(props) =>
    props.$variant === "select" &&
    ` 

 

    border: 2px black solid;
    border-radius: 5px;
    padding: 5px;
    min-width: 80px;
    text-align: center;

  `}
  ${(props) =>
    props.$variant === "livingroom" &&
    `
  padding: 8px;
  width: 50%;
  margin: 1%;
  box-sizing: border-box;
  height: 23%;
  `}
  ${(props) =>
    props.$selected === true &&
    `

    border: 3px orange solid;
    `}

`;

export default StyledListItem;
