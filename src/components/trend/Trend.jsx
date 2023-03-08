import React, { useEffect, useState } from "react";
import trend from "./trend.module.css";
import trend1 from "../../assets/images/trend1.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Moment from "react-moment";
import { savedAdd } from "slice";
import detail from "../../pages/blogdetailpage/blogdetail.module.css";
import Skeleton from "react-loading-skeleton";
function Trend() {
  let auth = useSelector((state) => state.authReducer);
  console.log(auth.user);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(`http://localhost:5000/post/`);
        resp.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProfile(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    sendGetRequest();
  }, []);


  const handleSaved = (item) => {
    dispatch(savedAdd(item));
  };
  return (
    <section className={trend.trend_big_div}>
      <h3>Trending on Medium</h3>
      <div className={trend.trend_mini_div}>
        {profile &&
          profile.slice(0,6).map((i, key) => (
            <div className={trend.trend_div} key={key}>
              <h1>01</h1>
              <div className={trend.trend_div_text}>
                <div className={trend.trend_div_img}>
                  {" "}
                  <img
                    src={`http://localhost:5000/assets/${
                      i.userPicturePath || <Skeleton />
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
          ))}
      </div>
    </section>
  );
}

export default Trend;
