import { signOut } from '@/lib/firebase/authentication'
import { auth } from '@/lib/firebase/firebase'
import React from 'react'

type Props = {}

function index({}: Props) {

  return <>
    <div>index</div>
    <button onClick={signOut}>logout</button>
  </>
}

export default index