import React,{ useEffect, useState } from "react";
import blogs from "./blogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Moment from 'react-moment';
import { savedAdd } from 'slice';
import detail from "../../pages/blogdetailpage/blogdetail.module.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { data } from "api/data";
function Blogs() {
  let auth = useSelector((state) => state.authReducer);
  console.log(auth.user)
  const dispatch=useDispatch()
  const [profile,setProfile]=useState([])
  const [isLoading, setIsLoading]=useState(false)

  useEffect(() => {
  
  //  const sendGetRequest = async () => {
    setIsLoading(true)

  //  try {
      //  const resp = await axios.get(`http://localhost:5000/post/`);
       data.getAll('/post/')
       .then((res)=>{
        res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProfile(res)
        setIsLoading(false)
       })
       .catch((err)=>{
        console.log(err)
       })
      


  //  } catch (err) {
  //      // Handle Error Here
  //      console.error(err);
  //  }
// };

// sendGetRequest();
 }, []);

 const handleSaved=(item)=>{
  dispatch(savedAdd(item))
 
 }
  return (
  <>
   {
    !isLoading ? profile.map((i,key)=>(
        <div className={blogs.blogs_mini_div} key={key}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
          <img src={`https://medium-test.vercel.app/assets/${i.userPicturePath}`} />

            <span>{i.firstName}</span>
          </div>
          <h2><Link to={`/login`}>{i.title}</Link></h2>
          <p>{i.description.slice(0,80)}...</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span> <Moment format="DD/MM/YYYY">{i.createdAt}</Moment></span>.

            </div>
           <Link to='/login'> <i  class= {
             "fa-regular fa-bookmark"}></i></Link>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
        <img src={`https://medium-test.vercel.app/assets/${i.picturePath}`} />

        </div>
      </div>

      )) :profile.map((i,key)=>(
        <SkeletonTheme color="#333" highlightColor="#444">
        <div className={blogs.blogs_mini_div} key={key}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
          <Skeleton circle={true} height={30} width={30} />

            <span> <Skeleton height={20} width={40} count={1} /></span>
          </div>
          <h2> <Skeleton height={25} count={1} /></h2>
          <p> <Skeleton height={25}  count={1} /></p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span> <Skeleton height={16} width={30} count={1} /></span>.

            </div>
           
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
        <Skeleton height={150} width={260} count={1} />

        </div>
      </div>
      </SkeletonTheme> ))
     }
  
  </>
  );
}

export default Blogs;
