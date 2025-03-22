import { data } from "react-router";
import { makeRequest } from "../../axios";
import Post from "../post/post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
// Temporary Data 


const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'], 
    queryFn: () => makeRequest.get("/posts").then((res) => res.data),
  });

  console.log(data);
    return (
    <div className="posts">
      {
        error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map(post => (
          <Post post={post} key={post.id} />
        ))
      }
      
    </div>
  );
};
export default Posts;
