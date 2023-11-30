import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Outlet></Outlet>
    </div>
  )
}
