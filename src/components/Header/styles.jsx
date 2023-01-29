import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ececec;
  padding: 0;
  margin: 0;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  justify-content: flex-start;

  h1 {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0.5em;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 20px;
    text-align: center;
    color: #000000;
  }
`;

export const Logo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  margin-left: 2em;
`;

export const User = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    position: absolute;
    margin-right: 10em;
    width: 60px;
    border: 2px solid #0385fd;
    border-radius: 100%;
  }

  select {
    height: 80px;
    width: 250px;
    background: #eaeaea;
    padding-left: 4em;
    font-size: 25px;
    font-weight: 800;
  }
`;
