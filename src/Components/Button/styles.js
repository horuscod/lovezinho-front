import styled from "styled-components";

export const ButtonCuston = styled.div`
  color: #fff;
  font-size: 20px;
  border: 30px;
  background-color: #6a6a6a;
  border-radius: 8px;
  width: 100%;
  padding: 15px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  displat: flex;
  text-align: center;
  align-items: center;

  ${(props) =>
    props.disabled === false &&
    `
    &:hover {
      background-color: #FFF;
      color: #6a6a6a;
    }
  `}

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.7
  `}
`;
