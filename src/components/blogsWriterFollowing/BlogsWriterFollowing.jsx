import React from 'react'
import follow from './writerFollowing.module.css'
import trend1 from '../../assets/images/trend1.jpeg'
function BlogsWriterFollowing() {
  return (
    <>
    <div className={follow.follow_bigdiv}>
        <h3>Following</h3>
        <div className={follow.follow_minidiv}>
            <div>
            <img src={trend1}/>
            <p>Prajeesh P</p>
            </div>
            <p>...</p>
        </div>
        <div className={follow.follow_minidiv}>
            <div>
            <img src={trend1}/>
            <p>Prajeesh P</p>
            </div>
            <p>...</p>
        </div>
        <div className={follow.follow_minidiv}>
            <div>
            <img src={trend1}/>
            <p>Prajeesh P</p>
            </div>
            <p>...</p>
        </div>
    </div>
    </>
  )
}

export default BlogsWriterFollowing