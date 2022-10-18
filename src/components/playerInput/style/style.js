import styled from 'styled-components/macro';

export const GameInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const PlayerForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin: 0 30px 0 30px;
`;

export const LabelPlayer = styled.label`
  font-size: 2.5rem;
  color: white;
  font-family: fantasy;
`;

export const InputPlayer = styled.input`
  font-size: 2rem;
  border-radius: 10px;
  margin: 15px;
  width: 20vw;
  padding: 5px 5px 5px 15px;
`;
