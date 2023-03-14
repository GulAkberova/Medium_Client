import React, { useEffect, useState } from "react";
import trend from "./trend.module.css";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Moment from "react-moment";
import { savedAdd } from "slice";
import detail from "../../pages/blogdetailpage/blogdetail.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { data } from "api/data";
function Trend() {
  let auth = useSelector((state) => state.authReducer);
  const [isLoading, setIsLoading]=useState(false)

  console.log(auth.user);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    // const sendGetRequest = async () => {
      setIsLoading(true)

      // try {
      //   const resp = await axios.get(`http://localhost:5000/post/`);
      //   resp.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      //   setProfile(resp.data);
      //   setIsLoading(false)
      // } catch (err) {
      //   // Handle Error Here
      //   console.error(err);
      // }
      data.getAll('/post/')
      .then((res)=>{
        res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProfile(res);
        setIsLoading(false)
      })
      .catch((err)=>{
        console.log(err)
      })
    // };

    // sendGetRequest();
  }, []);


  const handleSaved = (item) => {
    dispatch(savedAdd(item));
  };
  return (
    <section className={trend.trend_big_div}>
      <h3>Trending on Medium</h3>
      <div className={trend.trend_mini_div}>
        {  !isLoading ?
          profile.slice(0,6).map((i, key) => (
            <div className={trend.trend_div} key={key}>
              <h1>01</h1>
              <div className={trend.trend_div_text}>
                <div className={trend.trend_div_img}>
                  {" "}
                  <img
                    src={`http://localhost:5000/assets/${
                      i.userPicturePath
                    }`}
                  />
                  <span>
                
                    {i.firstName} {i.lastName}
                 
                  </span>
                </div>
                <h2>  <Link to={`/login`}>{i.title}</Link></h2>
                <div className={trend.trend_div_read}>
                  <span>
                    {" "}
                    <Moment format="DD/MM/YYYY">{i.createdAt}</Moment>
                  </span>
                  .
                </div>
              </div>
            </div>
          )) :  profile.slice(0,6).map((i, key) => (
            <SkeletonTheme color="#333" highlightColor="#444">
            <div className={trend.trend_div} key={key}>
              <h1>01</h1>
              <div className={trend.trend_div_text}>
                <div className={trend.trend_div_img}>
                <Skeleton circle={true} height={30} width={30} />
                  <span>
                
                  <Skeleton height={20} width={100} count={1} />
                 
                  </span>
                </div>
                <h2>    <Skeleton height={20} width={200} count={1} /></h2>
                <div className={trend.trend_div_read}>
                  <span>
                  <Skeleton height={20} width={100} count={1} />
                  </span>
                  .
                </div>
              </div>
            </div>
            </SkeletonTheme>
          ))
        
        
        }
      </div>
    </section>
  );
}

export default Trend;
