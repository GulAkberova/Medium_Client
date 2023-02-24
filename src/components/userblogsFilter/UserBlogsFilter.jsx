import React from 'react'
import blogs from "../userblogs/userblogs.module.css";
import trend1 from "../../assets/images/trend1.jpeg";


function UserBlogsFilter() {
  return (
    <>
     <section className={blogs.blogsFilter_big_div}>
      <div className={blogs.blogsFilter_info_divs}>
        <h3>War in Ukraine: One Year Later</h3>
        <div className={blogs.blogsFilter_info_div}>
          <div className={blogs.blogsFilter_info_div_img}>
            <img src={trend1}/>
            <p>Anton Protsiuk</p>
          </div>
          <h4>Living in Kyiv amidst power blackouts–a few observations</h4>
        </div>
        <div className={blogs.blogsFilter_info_div}>
          <div className={blogs.blogsFilter_info_div_img}>
            <img src={trend1}/>
            <p>Anton Protsiuk</p>
          </div>
          <h4>Living in Kyiv amidst power blackouts–a few observations</h4>
        </div>
        <div className={blogs.blogsFilter_info_div}>
          <div className={blogs.blogsFilter_info_div_img}>
            <img src={trend1}/>
            <p>Anton Protsiuk</p>
          </div>
          <h4>Living in Kyiv amidst power blackouts–a few observations</h4>
        </div>
        <span>See the full list</span>
      </div>
     <div className={blogs.blogsFilter_recommend_div}>
     <h3>Recommended topics</h3>
      <div className={blogs.blogsFilter_mini_div}>
        <a>Programming</a>
        <a>Data Science</a>
        <a>Programming</a>
        <a>Prog</a>
        <a>Programming</a>
        <a>Prog</a>
        <a>Data Science</a>
        <a>Prog</a>

      </div>
     </div>

     <div className={blogs.blogsFilter_info_divs}>
      <h3>Who to follow</h3>
      <div className={blogs.blogsFilter_info_div}>
      <div className={blogs.blogsFilter_info_div_img}>
      <img src={trend1}/>
        <h5>Alexandra Samuel
</h5>
      </div>
      <div className={blogs.blogsFilter_info_div_follow}>
        <p>i’m a freelance writer and editor. you can also read me....</p>
        <button>Follow</button>
      </div>

      </div>
      <div className={blogs.blogsFilter_info_div}>
      <div className={blogs.blogsFilter_info_div_img}>
      <img src={trend1}/>
        <h5>Alexandra Samuel
</h5>
      </div>
      <div className={blogs.blogsFilter_info_div_follow}>
        <p>i’m a freelance writer and editor. you can also read me....</p>
        <button>Follow</button>
      </div>

      </div>
      <div className={blogs.blogsFilter_info_div}>
      <div className={blogs.blogsFilter_info_div_img}>
      <img src={trend1}/>
        <h5>Alexandra Samuel
</h5>
      </div>
      <div className={blogs.blogsFilter_info_div_follow}>
        <p>i’m a freelance writer and editor. you can also read me....</p>
        <button>Follow</button>
      </div>

      </div>
      

     </div>
     


    </section>
    </>
  )
}

export default UserBlogsFilter