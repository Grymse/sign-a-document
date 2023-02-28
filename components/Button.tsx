import React, { useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faSpinner } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text?: string;
  icon?: IconDefinition;
  success?: boolean;
  failure?: boolean;
  inverted?: boolean;
  isLoading?: boolean;
  onClick: ()=>void;
}

function Button({text, icon, success, failure, inverted, onClick, isLoading = false} : Props) {

  return (
    <button onClick={onClick}
      className={`flex flex-row px-3 gap-2 py-3 rounded-full duration-200 items-center ${success ? 'bg-lime-500 hover:bg-lime-600' : failure ? 'bg-red-400 hover:bg-red-500' : inverted ? 'bg-gray-50 hover:bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'}`}>
      <div className='w-6 h-6'>
        {icon && !isLoading && <FontAwesomeIcon icon={icon} size="xl" className={`${inverted ? 'text-gray-800' : 'text-gray-50'}`} />}
        {isLoading && <FontAwesomeIcon icon={faSpinner} size="xl" className={`${inverted ? 'text-gray-800' : 'text-gray-50'} animate-spin duration-500`} />}
      </div>
      {text && <p className={`text-sm font-semibold ${inverted ? 'text-gray-800' : 'text-gray-50'}`}>{text}</p>}
    </button>
  )
}

export default Button