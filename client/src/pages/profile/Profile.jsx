import "./profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Post from "../../components/post/post";



const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/4448847/pexels-photo-4448847.jpeg" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
          <div className="uInfo">
            <div className="left">
              <a href="http://facebook.com">
               <FacebookIcon font-size="large"/>
              </a>
              <a href="http://facebook.com">
               <LinkedInIcon font-size="large"/>
              </a>
              <a href="http://facebook.com">
               <PinterestIcon font-size="large"/>
              </a>
              <a href="http://facebook.com">
               <TwitterIcon font-size="large"/>
              </a>
              <a href="http://facebook.com">
               <FacebookIcon font-size="large"/>
              </a>
            </div>
            <div className="center">
              <span>Devegeek</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon/>
                  <span>USA</span>
                </div>
                <div className="item">
                  <LanguageIcon/>
                  <span>Devegeek</span>
                </div>
              </div>
              <button>Follow</button>
            </div>
            <div className="right">
              <EmailIcon/>
              <MoreVertIcon/>
            </div>
          </div>
     
      </div>
           {/* <Post/> */}
    </div>
  );
};

export default Profile