import React, { useEffect, useState } from 'react'
import BlogsWriter from '../../components/blogsWriter/BlogsWriter'
import BlogsWriterFollowing from '../../components/blogsWriterFollowing/BlogsWriterFollowing'
import detail from '../blogdetailpage/blogdetail.module.css'
import blogs from '../../components/userblogs/userblogs.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useParams } from 'react-router-dom'
import { data } from '../../api/data'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setPosts, setUserPosts } from '../../slice'
import WriterBlogsForYou from '../../components/userblogsForyou/WriterBlogsForYou'
import follow from '../../components/blogsWriterFollowing/writerFollowing.module.css'
import Moment from 'react-moment'
import WriteProfile from 'components/writeprofile/WriteProfile'
function Writer() {
  const param=useParams()
  const dispatch= useDispatch()
  const[user,setUser]=useState([])

  
  useEffect(() => {
   
    const sendGetRequest = async () => {
    try {
        const resp = await axios.get(`http://localhost:5000/post/${param.id}/post`);
        console.log(resp.data);
       dispatch(setUserPosts({userposts: resp.data}))

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();
  }, []);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // ----------------------------------------------------------
    const [detailPost, setDetailPost]=useState([])
  
    useEffect(() => {
      data.getById("users", param.id).then((res) => {
        setDetailPost(res)
      });
    }, []);
    console.log('yoxlaaaaaaaaaaa',detailPost)

  return (
    <>
       <section className={detail.detail_bigdiv}>
   <div className={detail.detail_blogs}>
    <div className={detail.writer_header_name}>
        <h1>{detailPost.firstName} {detailPost.lastName}</h1>
    </div>
    <Box sx={{ width: '100%', typography: 'body1' }} className={blogs.blogs_header_div}>
        
        <TabContext value={value}>
      
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={blogs.blogs_header_filter}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
          
  
              <Tab label="Home" value="1" />
              <Tab label="About" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"><WriterBlogsForYou/></TabPanel>
          <TabPanel value="2">


          <h4>
        {" "}
        <i class="fa-solid fa-user"></i> &nbsp;{detailPost.firstName}{" "}
        {detailPost.lastName}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-pen"></i> &nbsp;{detailPost.occupation}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-location-dot"></i> &nbsp;{detailPost.location}{" "}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-user-group"></i> &nbsp;Following:&nbsp;{" "}
        {/* {detailPost.friends.length()}{" "} */}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-calendar-days"></i> &nbsp;Created:&nbsp;{" "}
        <Moment format="DD/MM/YYYY">{detailPost.createdAt}</Moment>{" "}
      </h4>
          </TabPanel>
        </TabContext>
      </Box>
  
   
   </div>
   {/* <div className={detail.detail_writer}>
          <div className={detail.detail_writer_img}>
          <img src={`http://localhost:5000/assets/${detailPost.picturePath}`}/>
          <h4> {detailPost.firstName} {detailPost.lastName}</h4>
         
          </div>
          <div className={follow.follow_bigdiv}>
        <h3>Following</h3>
        {
          detailPost.friends && detailPost.friends.map((i,key)=>(
            <div className={follow.follow_minidiv} key={key}>
            <div>
            <img src={`http://localhost:5000/assets/${ i.picturePath}`}/>
            <p>{i.firstName} {i.lastName}</p>
            </div>
            <p>...</p>
        </div>

          ))
        }
       
      
    </div>
   </div> */}
   <WriteProfile detailPost={detailPost}/>
 

  </section>

     </>
  )
}

export default Writer