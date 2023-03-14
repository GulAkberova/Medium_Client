import React, { useEffect, useState } from "react";
import detail from "../blogdetailpage/blogdetail.module.css";
import blogs from "../../components/userblogs/userblogs.module.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserBlogsFilter from "../../components/userblogsFilter/UserBlogsFilter";
import { useSelector } from "react-redux";
import ProfileHome from "components/profilehome/ProfileHome";
import ProfileAbout from "components/profileabout/ProfileAbout";
import follow from '../../components/blogsWriterFollowing/writerFollowing.module.css'
import Save from '../savedpage/Save'
import { data } from "api/data";

function Profile() {
  let auth = useSelector((state) => state.authReducer);
  // console.log("isauth", auth.user.followers
  // );
  const [value, setValue] = React.useState("1");
  const [user, setUser] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const[fol,setFol]=useState([])
  useEffect(()=>{
    auth.user.following.forEach(element => {
      console.log('element',element)
      data.getAll(`/users/${element}`)
      .then(res=>{
      setFol([...[fol],res])
      })
      .catch(err=>{
        console.log(err)
      })
    
   });
  },[])
 console.log(fol)
  return (
    <>
      <section className={detail.detail_bigdiv}>
        <div className={detail.detail_blogs}>
          <div className={detail.writer_header_name}>
            <h1>
              {auth.user.firstName} {auth.user.lastName}
            </h1>
          </div>
          <Box
            sx={{ width: "100%", typography: "body1" }}
            className={blogs.blogs_header_div}
          >
            <TabContext value={value}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className={blogs.blogs_header_filter}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Home" value="1" />
                  <Tab label="About" value="2" />
                  <Tab label="Saved List" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1"><ProfileHome/></TabPanel>
              <TabPanel value="2"><ProfileAbout/></TabPanel>
              <TabPanel value="3"><Save/></TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className={detail.detail_writer}>
          <div className={detail.detail_writer_img}>
          <img src={`https://medium-test.vercel.app/assets/${ auth.user.picturePath}`}/>
          <h4> {auth.user.firstName} {auth.user.lastName}</h4>
          {auth.user.occupation}
         
          </div>
          <div className={follow.follow_bigdiv}>
        <h3>Following</h3>
        {
          fol && fol.map((i,key)=>(
            <div className={follow.follow_minidiv} key={key}>
            <div>
            <img src={`https://medium-test.vercel.app/assets/${ i.picturePath}`}/>
            <p>{i.firstName} {i.lastName}</p>
            </div>
            <p>...</p>
        </div>

          ))
        }
       
       {/* <div className={follow.follow_minidiv} >
            <div>
            <img src={`https://medium-test.vercel.app/assets/${ fol.picturePath}`}/>
            <p>{fol.firstName} {fol.lastName}</p>
            </div>
            <p>...</p>
        </div> */}
        
    </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
