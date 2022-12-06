import styled from 'styled-components/macro';

export const StyledTable = styled.table`
  width: 50vw;
  height: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 3rem;
  color: white;
`;

export const TableBody = styled.tbody`
  display: flex;
  margin: 10px;
  width: 100%;
  justify-content: space-evenly;
`;

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TableHead = styled.th`
  width: 20vw;
`;

export const TableData = styled.td`
  display: flex;
  width: 10vw;
  justify-content: center;
`;
