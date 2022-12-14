import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  width: 230px;
  height: 80px;
  border-radius: 20px;
  font-size: 23px;
  background-color: red;
  border: none;
  opacity: 99%;
  cursor: pointer;
`;

export const SettingsButton = styled(StyledButton)`
  margin: 40px 40px 40px 40px;
`;
