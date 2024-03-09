import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import logo from '../assets/logo.png'


//this should be changed for applying the tailwind css
const Container = styled(AppBar)`
  position: static
`

function Header() {
  return (
    <>
        <Container>
            <Toolbar className='bg-black text-2xl font-bold'>
                <img src= {logo} alt="logo" className='w-10' />
                &nbsp; Online HTML Executer
            </Toolbar>
        </Container>
    </>
  )
}

export default Header
