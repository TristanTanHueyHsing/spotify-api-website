import React from 'react'
import Auth from './Auth'

export default function Dashboard({code}) {
    const accessToken = Auth(code)
  return <div>{code}</div>  
}
