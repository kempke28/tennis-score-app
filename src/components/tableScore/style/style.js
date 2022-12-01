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

// export const StyledTableScore = styled.div`
//   display: grid;
//   grid-template-columns: 30% 1fr 1fr 1fr 1fr 1fr;
//   grid-template-rows: 1fr 1fr;
//   gap: 10px 10px;
//   grid-template-areas:
//     'team1 team1set1 team1set2 team1set3 team1set4 team1set5'
//     'team2 team2set1 team2set2 team2set3 team2set4 team2set5';
//   align-content: center;
//   align-items: center;
//   background-color: pink;
//   width: 90vw;
//   padding: 15px;
// `;
//
// export const Team1Area = styled.div`
//   justify-self: stretch;
//   grid-area: team1;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team2Area = styled.div`
//   justify-self: stretch;
//   grid-area: team2;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team2Set1Area = styled.div`
//   justify-self: stretch;
//   grid-area: team2set1;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team1Set2Area = styled.div`
//   justify-self: stretch;
//   grid-area: team1set2;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team1Set3Area = styled.div`
//   justify-self: stretch;
//   grid-area: team1set3;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team2Set2Area = styled.div`
//   justify-self: stretch;
//   grid-area: team2set2;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team2Set3Area = styled.div`
//   justify-self: stretch;
//   grid-area: team2set3;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team1Set1Area = styled.div`
//   justify-self: stretch;
//   grid-area: team1set1;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team1Set4Area = styled.div`
//   justify-self: stretch;
//   grid-area: team1set4;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team1Set5Area = styled.div`
//   justify-self: stretch;
//   grid-area: team1set5;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team2Set4Area = styled.div`
//   justify-self: stretch;
//   grid-area: team2set4;
//   height: 90%;
//   background-color: blue;
// `;
//
// export const Team2Set5Area = styled.div`
//   justify-self: stretch;
//   grid-area: team2set5;
//   height: 90%;
//   background-color: blue;
// `;
