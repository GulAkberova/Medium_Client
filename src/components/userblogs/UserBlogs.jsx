import React, { useState } from 'react'
import blogs from "./userblogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserBlogsForYou from '../userblogsForyou/UserBlogsForYou';
import UserBlogsFollow from '../userblogsFollow/UserBlogsFollow';
function UserBlogs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className={blogs.blogs_big_div}>
        <Box sx={{ width: '100%', typography: 'body1' }} className={blogs.blogs_header_div}>
        
      <TabContext value={value}>
    
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={blogs.blogs_header_filter}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
        
             <Box className={blogs.blogs_header_plus}><i class="fa-solid fa-plus"></i></Box>

            <Tab label="For you" value="1" />
            <Tab label="Following" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><UserBlogsForYou/></TabPanel>
        <TabPanel value="2"><UserBlogsFollow/></TabPanel>
      </TabContext>
    </Box>
    
    </section>
    
    </>
  )
}

export default UserBlogs