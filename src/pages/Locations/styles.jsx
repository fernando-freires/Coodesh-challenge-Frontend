import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background-color: #ececec;

  .head {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2em;

    p {
      display: flex;
      gap: 1em;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #4d4d4d;
    }
  }
`;

export const NoLocations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
  gap: 3em;
`;
