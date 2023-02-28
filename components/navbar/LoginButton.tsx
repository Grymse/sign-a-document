import React from 'react'
import Button from '../Button'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';
import { loginRoute } from '@/lib/routes';
import UserInfoWrapper from './UserInfoWrapper';

type Props = {}

function LoginButton({}: Props) {
  const router = useRouter();

  function login() {
    router.push(loginRoute());
  }
  
  const loginButton = {
    onClick: login,
    inverted: true,
    icon: faUser
  }
  

  return <UserInfoWrapper onClick={loginButton.onClick} text="Login">
    <Button {...loginButton}></Button>
  </UserInfoWrapper>
}

export default LoginButton;

