import "./rightbar.scss"

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/* 1st */}
        <div className="item">
          <span>Suggested for you</span>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <span>Abdul Salam</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <span>Abdul Salam</span>
            </div>
            <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
            </div>
          </div>
        </div>
      {/* second */}
      <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <p>
                <span>Ali</span> Change their cover photo

              </p>
              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <p>
                <span>Ali</span> Change their cover photo

              </p>
              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <p>
                <span>Ali</span> Change their cover photo

              </p>
              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <p>
                <span>Ali</span> change their cover photo
              </p>
              
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* third */}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <div className="online"/>
              <span>Abdul Salam</span>
          </div>
         
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <div className="online"/>
              <span>Ali</span>
          </div>
         
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <div className="online"/>
              <span>Hamza</span>
          </div>
         
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <div className="online"/>
              <span>Aslam</span>
          </div>
         
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="" alt="" />
              <div className="online"/>
              <span>Akram</span>
          </div>
         
          </div>
      </div>
    </div>
    </div>
  )
}

export default Rightbar