import styled from 'styled-components';

const StyledInstallButton = styled.button`
  display: ${(props) => (props.showButton ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  right: 20px;
`;