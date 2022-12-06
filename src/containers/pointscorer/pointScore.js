import React from 'react';
import { Button } from '../../components';
import './style.css';

// export default function PointScorerContainer({ children }) {
//   return (
//     //import data from firebase..
//     <div className="scoringContainer">
//       <Button.ScoringButton>15</Button.ScoringButton>
//       <h2 className="VS">VS</h2>
//       <Button.ScoringButton>30</Button.ScoringButton>
//     </div>
//   );
// }

export default function PointScorerContainer() {
  // const [score, setScore] = useState("0");
  //
  //
  // const addPoint = () => {
  //
  // }

  return (
    //import data from firebase..
    <div className="scoringContainer">
      <Button.ScoringButton>1</Button.ScoringButton>
      <h2 className="VS">VS</h2>
      <Button.ScoringButton>2</Button.ScoringButton>
    </div>
  );
}
