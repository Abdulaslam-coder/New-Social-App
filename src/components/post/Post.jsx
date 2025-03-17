import "./post.scss"
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router";
import Posts from "../posts/Posts";

import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({post}) => {
const [commentOpen,setCommentOpen] = useState(false);
  //Temporary Data
  const liked = true;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
            <div className="userInfo">
              <img src={post.profilePic} alt="" />
                <Link to={`/profile/${post.userId}`}
                 style={{textDecoration:"none", color:"inherit"}}>
                <span className="name">{post.name}</span>
                </Link>
              <span className="date">1 min ago</span>
            </div>
        </div>
        
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteIcon/>:<FavoriteBorderOutlinedIcon/>}
            12 Likes
          </div>
          <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <SmsOutlinedIcon/>
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
        
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;