import React from 'react'
import '../Css/Post.css'
import Avatar from '@material-ui/core/Avatar';
function Post({username , caption , imageUrl }) {
    return (
        <div class='post'>
            <div className="post__header">

             <Avatar className='post__avatar' src="/static/images/avatar/1.jpg" alt='username' />
            <h3>{username}</h3>
            </div>

            <img className='post__image' src={imageUrl} alt="Useername" />


            <h4 className='post__text'><strong>{username}</strong>: {caption}</h4>
        </div>
    )
}

export default Post
