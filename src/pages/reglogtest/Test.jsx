import { useTheme } from '@emotion/react'
import { Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Form from './Form'

function Test() {
const theme= useTheme()
const isNonMobileScreens=useMediaQuery("(min-width:1000px)")

  return (
    <>
  
 <Box className="backColor">
 <Box
    width={isNonMobileScreens ? "50%" : "93%"}
    py="4rem"
    m="0 auto"
    borderRadius="1.5rem"
    >
        <Typography fontWeight="500" variant='h5' sx={{mb:"1.5em"}}>
            Welcome to Medium
        </Typography>
        <Form/>
        

    </Box>
 </Box>
    
    
    
    </>
  )
}

export default Test