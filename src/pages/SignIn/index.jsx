import React, { useContext, useState } from 'react';
import Image1 from '../../assets/imgs/Image1.png';
import Logo from '../../assets/imgs/Logo.png';
import { Context } from '../../context/AuthContext';
import history from '../../history';
import {
  Aside,
  CompanyLogo,
  Container,
  Forms,
  Image,
  Info,
  InputText,
  Login,
  LoginButton,
  RegisterButton,
} from './styles';

const SignIn = () => {
  const { handleLogin } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const access = {
    email,
    password,
  };

  return (
    <Container>
      <Aside>
        <Image src={Image1} />
        <Info>
          <h1>Junte-se a vários clientes satisfeitos.</h1>
          <p>
            Cliente HubLocal ganha mais relevância, autoridade e <br></br>
            visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja
            uma delas!
          </p>
        </Info>
      </Aside>

      <Login>
        <Forms>
          <CompanyLogo src={Logo} />
          <InputText>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </InputText>
          <InputText>
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputText>
          <LoginButton onClick={() => handleLogin(access)}>Login</LoginButton>
          <RegisterButton onClick={() => history.push('/sign-up')}>
            Criar conta
          </RegisterButton>
        </Forms>
      </Login>
    </Container>
  );
};

export default SignIn;
