import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle, faMicrosoft, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthProvider, FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, OAuthProvider } from 'firebase/auth';
import { signInWithProvider } from '@/lib/firebase/authentication';
import { useRouter } from 'next/router';
import { homepageRoute } from '../lib/routes';
import { toast } from 'react-hot-toast';
import { useAuthState } from '../lib/firebase/authentication';

type Props = {}

type LoginButton = {
  icon: IconDefinition
  authProvider: AuthProvider
}

const loginPossibilities : LoginButton[] = [
  {
    icon: faFacebook,
    authProvider: new FacebookAuthProvider()
  },
  {
    icon: faTwitter,
    authProvider: new TwitterAuthProvider()
  },
  {
    icon: faGoogle,
    authProvider: new GoogleAuthProvider()
  },
];

function Login({}: Props) {
  const router = useRouter();
  const user = useAuthState();

  if(user !== null ) router.push(homepageRoute());
  
  function openProviderPopup(button: LoginButton) {
    signInWithProvider(button.authProvider).then((user)=>{
      toast.success("Welcome "+user.displayName+"!");
    }).catch(error => {
      if(error.code === 'auth/account-exists-with-different-credential') toast.error("It seems you have previously logged in using a different provider. Try another provider.")
      else toast.error(error.message);
    });
  }

  return (
    <main className="h-full w-screen flex justify-center flex-col items-center gap-4">
        <p className="text-2xl text-gray-700">Log in with</p>
        <div className="flex gap-6">
          {loginPossibilities.map((button, index) => {
            return <button key={index} onClick={()=>{openProviderPopup(button)}}>
              <FontAwesomeIcon icon={button.icon} className="text-4xl text-gray-700"></FontAwesomeIcon>
            </button>
          })}
        </div>
        <p className="text-sm text-gray-400">Create and sign documents today!</p>
      </main>
  )
}

export default Login