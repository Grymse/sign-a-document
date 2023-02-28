import React, { useContext } from 'react'
import Button from '../Button'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { UserContext } from '@/lib/context/contexts';
import { createNewDocument } from '@/lib/documents';
import { toast } from 'react-hot-toast';

type Props = {}

function CreateDocumentButton({}: Props) {
  const [isLoading, setLoading] = useState(false);
  const user = useContext(UserContext);

  const createNewDocumentButton = {
    text: 'new',
    onClick: onButtonClick,
    icon: faSquarePlus,
    isLoading: isLoading
  }

  function onButtonClick() {
    if(user === null){
      // TODO: redirect to home page
      /* return; */
    }

    setLoading(true);
      createNewDocument(user).then(()=>{

    }).catch(toast.error);


    setLoading(false);
    

    // Prøv at oprette dokument
    /* setLoading(false); */
  }

  return (
    <Button {...createNewDocumentButton}></Button>
    )
  
}

export default CreateDocumentButton