import React from 'react'
import BlogsWriter from '../../components/blogsWriter/BlogsWriter'
import BlogsWriterFollowing from '../../components/blogsWriterFollowing/BlogsWriterFollowing'
import detail from '../blogdetailpage/blogdetail.module.css'
import blogs from '../../components/userblogs/userblogs.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
function Writer() {
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
          
  
              <Tab label="Home" value="1" />
              <Tab label="List" value="2" />
              <Tab label="About" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
  
   
   </div>
   <div className={detail.detail_writer}>
   <BlogsWriter/>
   <BlogsWriterFollowing/>
   </div>
 

  </section>

     </>
  )
}

export default Writer