import styled from "styled-components";

export const BoxInput = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: sticky;
`;

export const InputCuston = styled.input`
  color: #FFF;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid ${(props) => (props.valid ? "#ff9292" : "#6a6a6a")};
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 16px 20px;
  box-sizing: border-box;
  width: 100%;
  z-index: 0;
  ::placeholder {
    color: ${props => props.valid ? "#fff" : "#ff9292"};
    font-size: 12px;
    opacity: 0.7;
  }
`;

export const MensageValid = styled.div`
  position: absolute;
  color: #ff9292;
  top: -20px;
  left: 5px;
  z-index: 10;
`;
