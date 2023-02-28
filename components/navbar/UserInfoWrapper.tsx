import React from 'react'

type Props = {
  children: React.ReactNode;
  text?: string | undefined | null;
  onClick: () => void;
}

function UserInfoWrapper({children, text = undefined, onClick}: Props) {
  return <div className='flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-700 rounded-full group' onClick={onClick}>
  <div className='overflow-hidden rounded-full group-hover:opacity-80'>
    {children}
  </div>
  {text && <p className='text-gray-50 group-hover:text-gray-200 text-sm font-semibold select-none'>{text}</p>}
</div>
}

export default UserInfoWrapper