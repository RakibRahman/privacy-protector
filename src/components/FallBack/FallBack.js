import React from 'react'
import './FallBack.css';
import { Center } from '@chakra-ui/react'
export const FallBack = () => {
    return (
        <Center mt={50}><div className="lds-ripple"><div></div><div></div></div></Center>
    )
}
