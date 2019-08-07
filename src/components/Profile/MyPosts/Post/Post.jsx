import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" />
      {props.message}
          <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;