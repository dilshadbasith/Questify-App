import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './css/SidebarOptions.css'

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className="sidebarOption">
        <AddIcon />
        <p className="text">Create Space</p>
        </div>
        <div className='sidebarOption'>
        <img
          src="https://www.shutterstock.com/shutterstock/photos/1110756569/display_1500/stock-vector-history-subject-concept-lettering-card-vector-illustration-1110756569.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.business-management-degree.net/wp-content/uploads/2019/04/shutterstock_531316576-300x218.jpg"
          alt=""
        />

        <p>Business</p>
      </div>
     

      <div className="sidebarOption">
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/12/21/female-cook-topic-image-1-vector-32131221.jpg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/music-subjects-illustration-design-vector-isolated-white-background-music-subjects-122851087.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/62/29/set-of-icons-on-a-science-theme-vector-19386229.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://2.bp.blogspot.com/-6t5udaBV9Qs/VmcJdvbrfwI/AAAAAAAABS4/VRNg-5dVX2E/s1600/5heuCFh.png"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.shutterstock.com/image-vector/movie-cinema-items-collection-set-260nw-2141533089.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      


      
    
    </div>
  )
}

export default SidebarOptions