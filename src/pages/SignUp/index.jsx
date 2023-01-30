import React, { useState } from 'react';
import api from '../../api';
import Image1 from '../../assets/imgs/Image1.png';
import Logo from '../../assets/imgs/Logo.png';
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

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const user = {
    name,
    email,
    password,
  };

  async function handleRegister(userdata) {
    if (password !== passwordConfirm) {
      throw new Error('Verifique os dados e tente novamente');
    }

    await api.post('/api/v1/users', userdata);
    history.push('/');
  }

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
            <label>Nome</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </InputText>

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

          <InputText>
            <label>Repetir senha</label>
            <input
              type="password"
              placeholder="Ex. password: User@1234"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </InputText>
          <RegisterButton onClick={() => handleRegister(user)}>
            Criar conta
          </RegisterButton>
          <LoginButton onClick={() => history.push('/')}>Login</LoginButton>
        </Forms>
      </Login>
    </Container>
  );
};

export default SignUp;
