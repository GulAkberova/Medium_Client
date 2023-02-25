import React from 'react'
import detail from '../blogdetailpage/blogdetail.module.css'
import blogs from '../../components/userblogs/userblogs.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserBlogsFilter from '../../components/userblogsFilter/UserBlogsFilter';
function Save() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <section className={detail.detail_bigdiv}>
   <div className={detail.detail_blogs}>
    <div className={detail.writer_header_name}>
        <h1>Reetesh Badlani</h1>
    </div>
    <Box sx={{ width: '100%', typography: 'body1' }} className={blogs.blogs_header_div}>
        
        <TabContext value={value}>
      
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={blogs.blogs_header_filter}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
          
  
              <Tab label="Your List" value="1" />
              <Tab label="Saved List" value="2" />
              <Tab label="Highlights" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
  
   
   </div>
   <div className={detail.detail_writer}>
   <UserBlogsFilter/>
 
   </div>
 

  </section>
    </>
  )
}

export default Save