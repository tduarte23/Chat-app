import React from 'react'
import * as C from './styles'
import { auth,provider } from '../../services/firebase'

export default function Login() {

    const handleSignIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

  return (
    <C.Container>
        <C.buttom onClick={handleSignIn}> Login com o Google </C.buttom>
    </C.Container>
  )
}
