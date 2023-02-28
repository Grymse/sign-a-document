import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

type Props = {
  reactive?: boolean
}

function Logo({reactive}: Props) {
  
  return (
    <div className={`${reactive && 'hover:bg-gray-700 rounded-md p-1'}`}>
      <Link href='/'>
        <Image src="/img/navbar-logo.svg" alt="Image of Sign-me logo" width={128} height={64}></Image>
      </Link>
    </div>
  )
}

export default Logo