"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Userinfo from '@/app/components/Userinfo'
export default function Login() {
  return (
    <div><button onClick={() => signIn()}>Sign in</button>
    <Userinfo/>
    </div>
  )
}
