import { useContext } from "react"
import "./stories.scss"
import { AuthContext } from "../context/authContext"

const Stories = () => {
    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id:1,
            name:"John Doe",
            img:"https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/"
        },
        {
            id:2,
            name:"John Doe",
            img:"https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/"
        },
        {
            id:3,
            name:"John Doe",
            img:"https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/"
        },
        {
            id:4,
            name:"John Ali",
            img:"https://www.photos.com/photo/selective-focus-photo-of-woman-1542085/"
        }
    ]

  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
    {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img}/>
            <span>{story.name}</span>
        </div>
    ))}
</div>
  )
}

export default Stories