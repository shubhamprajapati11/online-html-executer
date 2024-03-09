import { Box } from '@mui/material'
import React, { useState } from 'react'
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import { Controlled as ControlledEditor} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'

function Editor({heading, logo, color, value, onChange, language}) {
  
  const[open, setOpen] = useState(true)

  const handleChange = (editor, data, value) =>{
    onChange(value);
  }
  
  
  return (
    <Box className='flex-grow basis-0 flex flex-col pl-0.5 pr-0.5 pb-1' style = {open ? null: {flexGrow: 0}}>
        <Box className="flex bg-slate-800 text-white justify-between font-semibold">
            <Box className = "bg-slate-950 text-white flex p-2 pl-3">
                <Box component="span" className= 'h-7 w-4 flex place-content-center text-black rounded-sm mr-2 pb-1'style={{backgroundColor: color}}>
                  {logo}
                </Box>
                {heading}
            </Box>
            <CloseFullscreenRoundedIcon 
            className='text-sm self-center mr-2' 
            onClick={()=>{
              setOpen(prevState => !prevState)
            }}/>
        </Box>
        <ControlledEditor 
        className='controlled-editor'
        value = {value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material'

        }}/>
    </Box>
  )
}

export default Editor
