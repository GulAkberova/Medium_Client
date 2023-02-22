import React from 'react'
import blogsFilter from './blogsfilter.module.css'
function BlogsFilter() {
  return (
    <section className={blogsFilter.blogsFilter_big_div}>
      <h3>Discover more of what matters to you</h3>
      <div className={blogsFilter.blogsFilter_mini_div}>
        <a>Programming</a>
        <a>Data Science</a>
        <a>Programming</a>
        <a>Prog</a>
        <a>Programming</a>
        <a>Prog</a>
        <a>Data Science</a>
        <a>Prog</a>

      </div>
      <div className={blogsFilter.blogsFilter_mini_div_help}>
        <a>Help</a>
        <a>Status</a>
        <a>Help</a>
        <a>Writers</a>
        <a>Status</a>
        <a>Help</a>
        <a>Writers</a>
        <a>Status</a>

        <a>Help</a>
      </div>


    </section>
  )
}

export default BlogsFilter