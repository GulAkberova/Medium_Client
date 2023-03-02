import React from 'react'
import detail from '../../pages/blogdetailpage/blogdetail.module.css'
import trend1 from '../../assets/images/trend1.jpeg'
import blogs1 from '../../assets/images/blogs1.png'
import { useParams } from 'react-router-dom';
function BlogsDetail({detailPost}) {
  // console.log(detailPost)

  return (
    <>


    <div className={detail.blog_writer_header}>
       <div className={detail.blog_writer_header_img}>
       <img src={trend1}/>
      
      <div>
        <h3>{detailPost.firstName} {detailPost.lastName}</h3>
        <p>Mat 25, 2022 . <span>5 min read</span></p>
      </div>
       </div>
      
      <div className={detail.blog_writer_header_icon}>
     <ul>
      <li>
      <i class="fa-solid fa-link"></i>

      </li>
      <li>
      <i class="fa-solid fa-link"></i>

      </li>
      <li>
      <i class="fa-solid fa-link"></i>

      </li>
      <li>
      <i class="fa-solid fa-link"></i>

      </li>
     </ul>
      </div>


    </div>
    <div className={detail.blog_detail_header}>
      <h1>{detailPost.description}</h1>
      <p>We all learn from mistakes, and this rule applies to web designers as well. In this article, we will tell you what mistakes many of them make when creating user interface design.</p>
      <p>Each of us has experience using web applications and visiting websites in open areas, under direct sunlight. And everything would be fine if the contrast of the font with the background allowed us to recognize words and numbers. However, most webmasters forget about these nuances for some reason. As a result, mobile users are forced to cover the screen with their hands or go into the shadows to somehow cope with the situation. Think twice before choosing a solid background for a gray font.</p>
      <h3>#2 — Filling the whole screen</h3>
      <p>Sometimes little doesn’t mean bad. When some web pages end up with a minimal amount of content, it’s not always wrong — the main thing is to distribute it evenly. Conversely, some webmasters are wary of free space and try to clutter it up by choosing larger fonts and stretching banners and images. It often turns out to be ridiculous. Don’t be like these webmasters, leave some space if there is not much content.</p>
      <div className={detail.blog_detail_header_img}>
      <img src={blogs1}/>
      </div>
      <h3>#2 — Filling the whole screen</h3>
      <p>Sometimes little doesn’t mean bad. When some web pages end up with a minimal amount of content, it’s not always wrong — the main thing is to distribute it evenly. Conversely, some webmasters are wary of free space and try to clutter it up by choosing larger fonts and stretching banners and images. It often turns out to be ridiculous. Don’t be like these webmasters, leave some space if there is not much content.</p>
    </div>
    <div className={detail.follow_div}>
      <ul>
        <li><i class="fa-solid fa-hand"></i> 17</li>
        <li>|</li>
        <li><i class="fa-regular fa-comment"></i></li>
        <li>|</li>
        <li>...</li>
      </ul>

</div>
    
    </>
  )
}

export default BlogsDetail