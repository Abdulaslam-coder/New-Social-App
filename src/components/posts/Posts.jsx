import Post from "../post/post";
import "./posts.scss";
// Temporary Data 
const posts = [
  {
    id: 1, 
    name: "Jane Doe",
    userId: 1,
    profilePic: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg",
    desc: "Hello my name is Abdul Salam Saddiqui, This is the testing description.",
    img: "https://images.pexels.com/photos/31124099/pexels-photo-31124099/free-photo-of-bustling-city-street-with-historic-architecture.jpeg",
  },
  {
  id: 2, 
  name: "Jane Doe",
  userId: 2,
  profilePic: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg",
  desc: "Hello my name is Abdul Salam Saddiqui, This is the testing description.",
  img:"https://images.pexels.com/photos/947384/pexels-photo-947384.jpeg"
},
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
