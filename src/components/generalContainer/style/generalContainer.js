import styled from 'styled-components/macro';

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => height};
  width: 80vw;
  justify-content: space-evenly;
`;
