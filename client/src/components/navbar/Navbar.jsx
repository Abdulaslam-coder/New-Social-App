import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { toggle,darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>DeveGeek</span>
        </Link>
        <HomeIcon/>
       { darkMode ? <WbSunnyIcon onClick={toggle}/> : <BedtimeIcon onClick={toggle}/>}
        <GridViewIcon/>
        <div className="search">
            <SearchIcon/>
            <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon/>
        <MailOutlineIcon/>
        <NotificationsNoneIcon/>
        <div className="user">
          <img src={currentUser.profilePic} />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar