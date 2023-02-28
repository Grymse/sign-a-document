import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar/Navbar';
import { useAuthState } from '../lib/firebase/authentication';
import { UserContext } from '../lib/context/contexts';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  const user = useAuthState();
  
  return <>
    <UserContext.Provider value={user}>
      <Toaster />
      <div className="h-screen w-screen flex flex-col">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </UserContext.Provider>
  </>


}
