import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

type Props = {}

function Notifications({}: Props) {
  
  const notificationButton = {
    onClick: console.log,
    icon: faBell
  }
  
  return <Button {...notificationButton} inverted/>
}

export default Notifications