import React, { useContext } from 'react'
import Editor from './Editor'
import { Box } from '@mui/material'
import { DataContext } from '../context/DataProvider'


function Code() {
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext)
  return (
    <Box className = 'flex bg-black'>
        <Editor heading = "HTML" logo= "/" color="red" value={html} onChange={setHtml} language = "xml"/>
        <Editor heading = "CSS" logo= "*" color="cyan" value={css} onChange={setCss} language = "css"/>
        <Editor heading = "Javascript" logo= "{}"color="yellow" value={js} onChange={setJs} language = "javascript"/>
    </Box>
  )
}

export default Code
