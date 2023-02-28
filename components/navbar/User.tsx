import React, { useContext } from 'react'
import Button from '../Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useAuthState } from '@/lib/firebase/authentication';
import { UserContext } from '@/lib/context/contexts';
import { userRoute } from '@/lib/routes';
import Image from 'next/image';
import UserInfoWrapper from './UserInfoWrapper';

type Props = {}

function User({}: Props) {
  const router = useRouter();
  const user = useContext(UserContext);
  
  function goToProfile() {
    router.push(userRoute(user?.uid));
  }

  return <UserInfoWrapper text={user?.displayName} onClick={goToProfile} >
    <Image src={user?.photoURL as string} alt={`Profile picture of ${user?.displayName}`} width={48} height={48} />
  </UserInfoWrapper>
}

export default User