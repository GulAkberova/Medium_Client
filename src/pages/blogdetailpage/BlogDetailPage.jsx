import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../api/data";
import BlogsDetail from "../../components/blogsDetail/BlogsDetail";
import BlogsWriter from "../../components/blogsWriter/BlogsWriter";
import detail from './blogdetail.module.css'
function BlogDetailPage() {
  const param=useParams()
  console.log(param,'param arkadas')
  const [detailPost, setDetailPost]=useState([])
  useEffect(() => {
    data.getById("post", param.id).then((res) => {
      setDetailPost(res)
    });
  }, []);
  console.log(detailPost.firstName
    )

  return <>
  <section className={detail.detail_bigdiv}>
   <div className={detail.detail_blogs}>
   <BlogsDetail detailPost={detailPost}/>

   </div>
   <div className={detail.detail_writer}>
   <BlogsWriter detailPost={detailPost}/>
   </div>
 

  </section>

  
  
  </>;
}

export default BlogDetailPage;
