import React from 'react'
import {Login, SignUp, RestorePassword } from '../screens'
export default function AuthStack(Stack) {
    return (
        <>
          <Stack.Screen  name="Login" component={Login}/>
          <Stack.Screen  name="SignUp" component={SignUp}/>
          <Stack.Screen  name="RestorePassword" component={RestorePassword}/>
        </>
    )
}