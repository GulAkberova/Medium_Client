import React from 'react'
import blogs from "../userblogs/userblogs.module.css";
import blogs1 from "../../assets/images/blogs1.png";
import trend1 from "../../assets/images/trend1.jpeg";
function UserBlogsForYou() {
  return (
    <>
      <div className={blogs.blogs_mini_div}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
            <img src={trend1} />
            <span>Praveen Seshadri</span>
          </div>
          <h2>The maze is in the mouse</h2>
          <p>What ails Google. And how it can turn things around.</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span>15 Feb</span>.&nbsp; <span>4min read</span>
            <button>Google</button>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
          <img src={blogs1} />
        </div>
      </div>
      <div className={blogs.blogs_mini_div}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
            <img src={trend1} />
            <span>Praveen Seshadri</span>
          </div>
          <h2>The maze is in the mouse</h2>
          <p>What ails Google. And how it can turn things around.</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span>15 Feb</span>.&nbsp; <span>4min read</span>
            <button>Google</button>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
          <img src={blogs1} />
        </div>
      </div>
      <div className={blogs.blogs_mini_div}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
            <img src={trend1} />
            <span>Praveen Seshadri</span>
          </div>
          <h2>The maze is in the mouse</h2>
          <p>What ails Google. And how it can turn things around.</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span>15 Feb</span>.&nbsp; <span>4min read</span>
            <button>Google</button>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
          <img src={blogs1} />
        </div>
      </div>
      <div className={blogs.blogs_mini_div}>
        <div className={blogs.blogs_mini_text}>
          <div className={blogs.blogs_mini_text_img}>
            <img src={trend1} />
            <span>Praveen Seshadri</span>
          </div>
          <h2>The maze is in the mouse</h2>
          <p>What ails Google. And how it can turn things around.</p>
          <div className={blogs.blogs_mini_text_read}>
            <div>
            <span>15 Feb</span>.&nbsp; <span>4min read</span>
            <button>Google</button>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className={blogs.blogs_mini_img}>
          <img src={blogs1} />
        </div>
      </div>
      </>
  )
}

export default UserBlogsForYou