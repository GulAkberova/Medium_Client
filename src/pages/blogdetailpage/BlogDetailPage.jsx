import React from "react";
import BlogsDetail from "../../components/blogsDetail/BlogsDetail";
import BlogsWriter from "../../components/blogsWriter/BlogsWriter";
import detail from './blogdetail.module.css'
function BlogDetailPage() {
  return <>
  <section className={detail.detail_bigdiv}>
   <div className={detail.detail_blogs}>
   <BlogsDetail/>
   
   </div>
   <div className={detail.detail_writer}>
   <BlogsWriter/>
   </div>
 

  </section>

  
  
  </>;
}

export default BlogDetailPage;
