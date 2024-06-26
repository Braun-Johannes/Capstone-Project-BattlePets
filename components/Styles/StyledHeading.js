import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 2px black;
  ${(props) =>
    props.$variant === "livingroom" &&
    `  
   color: #424242;
   text-shadow: 2px 2px 2px white;
  `}
`;

export default StyledHeading;
