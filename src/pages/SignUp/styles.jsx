import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Aside = styled.aside`
  width: 100%;
  height: 100vh;
  background-color: #0485ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
  background-color: transparent;
`;

export const Info = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  align-items: center;
  background: #00cc99;
  position: relative;
  bottom: 0;

  h1 {
    width: 416px;
    font-style: normal;
    font-weight: 800;
    font-size: 35px;
    line-height: 35px;
    text-align: center;
    color: #ffffff;
    margin-top: 21px;
  }

  p {
    width: 400px;
    height: 65px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

export const Login = styled.aside`
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, #ececec 0%, #ffffff 14.58%);
`;

export const Forms = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CompanyLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 306px;
  height: 107px;
  background-color: transparent;
  margin-bottom: 35px;
`;

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
    height: 60px;
    border: 2px solid #0385fd;
    border-radius: 5px;
    font-size: 25px;
    padding-left: 1em;
  }
`;

export const LoginButton = styled.button`
  width: 401px;
  height: 60px;
  background: #00cc99;
  border-radius: 5px;
  text-transform: capitalize;
  border: none;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.2px;
  color: #fff;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
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
  cursor: pointer;
`;
