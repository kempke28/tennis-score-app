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
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const ScoringButton = styled(StyledButton)``;
