import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import profile from "./profileabout.module.css";
function ProfileAbout() {
  let auth = useSelector((state) => state.authReducer);
  console.log(auth.user, "user");

  return (
    <>
      <h4>
        {" "}
        <i class="fa-solid fa-user"></i> &nbsp;{auth.user.firstName}{" "}
        {auth.user.lastName}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-pen"></i> &nbsp;{auth.user.occupation}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-location-dot"></i> &nbsp;{auth.user.location}{" "}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-user-group"></i> &nbsp;Following:&nbsp;{" "}
        {auth.user.friends.length}{" "}
      </h4>
      <h4>
        {" "}
        <i class="fa-solid fa-calendar-days"></i> &nbsp;Created:&nbsp;{" "}
        <Moment format="DD/MM/YYYY">{auth.user.createdAt}</Moment>{" "}
      </h4>
    </>
  );
}

export default ProfileAbout;
