import { useContext } from "react";
import "./comment.scss"
import { AuthContext } from "../context/authContext";
const Comments = () => {
    const {currentUser} = useContext(AuthContext)
    //Temporary Data 
    const comments = [
        {
            id: 1, 
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg",
            desc: "Hello my name is Abdul Salam Saddiqui, This is the testing description.",
           // img: "https://images.pexels.com/photos/31124099/pexels-photo-31124099/free-photo-of-bustling-city-street-with-historic-architecture.jpeg",
        },
        {
            id: 2, 
            name: "Jane Doe",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg",
            desc: "Hello my name is Abdul Salam Saddiqui, This is the testing description.",
           // img:"https://images.pexels.com/photos/947384/pexels-photo-947384.jpeg"
        },
    ];

    return (
        
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment" />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    );
}

export default Comments;
