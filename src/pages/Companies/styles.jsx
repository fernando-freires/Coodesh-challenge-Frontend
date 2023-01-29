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
  background-color: #fff;
  justify-content: space-between;

  h1 {
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
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin-left: 5px;
`;

export const User = styled.div`
  width: 30%;
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

export const NoCompanies = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ececec;

  gap: 1em;

  .createButton {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Table = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  gap: 3em;
`;

export const RegisterCompany = styled.button`
  width: 401px;
  height: 60px;
  background: #0385fd;
  border-radius: 5px;
  text-transform: capitalize;
  border: none;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.2px;
  color: #fff;
  margin-bottom: 0.5em;
`;
