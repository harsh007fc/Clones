import React from 'react'
import '../Css/Post.css'
import Avatar from '@material-ui/core/Avatar';
function Post() {
    return (
        <div class='post'>
            <div className="post__header">

             <Avatar className='post__avatar' src="/static/images/avatar/1.jpg" alt='username' />
            <h3>Username</h3>
            </div>

            <img className='post__image' src="https://mumbaimirror.indiatimes.com/photo/76922257.cms" alt="Useername" />


            <h4 className='post__text'><strong>Username</strong>:Caption</h4>
        </div>
    )
}

export default Post
