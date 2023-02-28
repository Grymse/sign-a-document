import React, { useContext } from 'react'
import Logo from './Logo'
import Button from '../Button'
import { createNewDocument } from '@/lib/documents'
import Notifications from './Notifications'
import User from './User'
import { UserContext } from '@/lib/context/contexts'
import CreateDocumentButton from './CreateDocumentButton';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import LoginButton from './LoginButton'

type Props = {}

function Navbar({}: Props) {
  const user = useContext(UserContext);

  return (
    <div className="w-full h-16 min-h-16 max-h-16 items-center px-6 bg-gray-800 justify-between flex flex-row">
      <Logo reactive />
      <div className='flex flex-row items-center gap-4'>
        <CreateDocumentButton />
        {user !== null && <><Notifications /> <User /></>}
        {user === null &&  <LoginButton />}
      </div>
    </div>
  )
}

export default Navbar