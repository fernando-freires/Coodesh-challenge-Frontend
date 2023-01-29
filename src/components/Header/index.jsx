import React, { useContext, useState } from 'react';
import UserImage from '../../assets/imgs/UserImage.png';
import Vector from '../../assets/imgs/Vector.png';
import { Context } from '../../context/AuthContext';
import { Header, Logo, User } from './styles';

const HeaderComponent = (props) => {
  const { userName } = useContext(Context);
  const [page, setPage] = useState(props.pageName);

  return (
    <>
      <Header>
        <Logo>
          <img src={Vector} alt="" />
          <h1>{page}</h1>
        </Logo>
        <User>
          <img src={UserImage} alt="" />
          <select>
            <option value="">{userName}</option>
          </select>
        </User>
      </Header>
    </>
  );
};

export default HeaderComponent;
