import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;

  ${(props) =>
    props.$variant === "highlight" &&
    `
    background: none;
    border: none;
    padding: 5px;
    min-width: 80px;
 
  `}

  ${(props) =>
    props.$variant === "interaction" &&
    `
    border: 2px black solid;
    &:hover {
    border: 2px yellow solid;
    box-shadow: 2px 2px 2px yellow;}
    border-radius: 50%;
    padding: 10px;
    box-shadow: 2px 2px 2px black;
    background-color: ${props.color || "white"};
    transition: border 0.5s ease, box-shadow 0.5s ease;
    
  `}

  ${(props) =>
    props.$variant === "confirm" &&
    `
    border: 0px;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 4px;
    background-color: rgb(102, 187, 106);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    `}

  ${(props) =>
    props.$variant === "edit" &&
    `
    background-color: transparent;
    border: 1px solid black;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 30px;
    padding: 6px 8px;
    border-radius: 30px;
    background: rgba(104, 32, 69, 0.6);
    `}

    ${(props) =>
    props.$variant === "eliminate" &&
    `
      background-color: transparent;
      font-size: 0.875rem;
      line-height: 1.75;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      min-width: 30px;
      padding: 6px 8px;
      border-radius: 50px;
      border: 1px solid black;
      background: rgba(244, 67, 54, 0.6);
      `}
    
  

  ${(props) =>
    props.$variant === "cancel" &&
    `
    background-color: transparent;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 5px 15px;
    border-radius: 4px;
    border: 1px solid rgba(244, 67, 54, 0.5);
    color: rgb(244, 67, 54);
    `}



${(props) =>
    props.$variant === "tombstone" &&
    `
    background-color: transparent;
    padding: 2px;
    display: inline-block;
    width: auto;
    @media (max-width: 500px) {
    width: 150px;}
    height: auto;
    font-size: 1rem;
    color: black;
    
    `}
`;

const PositionedButton = styled(StyledButton)`
  position: ${(props) => props.$position || "absolute"};
  top: ${(props) => props.$top || "auto"};
  right: ${(props) => props.$right || "auto"};
  bottom: ${(props) => props.$bottom || "auto"};
  left: ${(props) => props.$left || "auto"};
`;

export default PositionedButton;
