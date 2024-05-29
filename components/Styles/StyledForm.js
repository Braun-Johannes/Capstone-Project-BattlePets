import styled from "styled-components";

const StyledForm = styled.form`
  ${(props) =>
    props.$variant === "select" &&
    `  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: black solid 2px;
  border-radius: 5px;
  height: 33vh;
  margin: 14px;
  padding: 10px;
  margin-top: 30px;`}
`;

export default StyledForm;
