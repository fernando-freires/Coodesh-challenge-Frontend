import styled from 'styled-components';

export const InputText = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #373737;
    text-align: left;
    margin-bottom: 3px;
  }

  input {
    box-sizing: border-box;
    width: 400px;
    height: 45px;
    border: 2px solid #0385fd;
    border-radius: 5px;
    font-size: 25px;
    padding-left: 1em;
  }
`;
