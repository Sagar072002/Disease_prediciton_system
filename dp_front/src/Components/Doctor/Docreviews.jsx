import React, { useState, useEffect, useContext } from "react";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import doctorService from '../../services/doc_service';
import { SiteContext } from '../../context/siteContext';

const Docreviews = () => {

    const { uid } = useContext(SiteContext);
    const [activeMenu, setActiveMenu] = useState("Reviews");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [reviewList, setReviewList] = useState([]);
  
    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
    };
  
    useEffect(()=>{
      doctorService.get(uid).then((res)=>{
        console.log("Res : ",res.data.reviews)
        setReviewList(res.data.reviews)
      }).catch((err)=>{
        console.log("Error: ", err)
      })
  
    },[uid])
  
    useEffect(() => {
      // Filter users based on search query
      const filtered = reviewList.filter(
        (review) =>
          review.user.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, [searchQuery, reviewList]);
  
  
    if (!reviewList.length) return <div>Loading...</div>;
  
  return (
    <div className="admin admindct">
    <div className="sidebar">
      {/* <div className='logo'>
        <img src={img1} alt="" />
        <p>DISPRED</p>
      </div> */}
      <div className="image">
        <img src={img} alt="" />
        <p>Sagar Negi</p>
      </div>
      <div className="det">
       <Link to="/doctor"> <p className={activeMenu === "Appointments" ? "active" : ""} onClick={() => handleMenuClick("Appointments")}>Appointments</p> </Link>
       <Link to="/doctorreviews"> <p className={activeMenu === "Reviews" ? "active" : ""} onClick={() => handleMenuClick("Reviews")}>Reviews</p> </Link>
       <Link to="/docprofile"> <p className={activeMenu === "Edit Profile" ? "active" : ""} onClick={() => handleMenuClick("Edit Profile")}>Edit Profile</p> </Link>
        {/* <button>Logout</button> */}
      </div>
    </div>
    <div className="rightside">
    <div className="review-section">
        <h1>Customer Review</h1>
        <p className="text">Read what our customers have to say about us</p>
        <div className="inner-review">
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
        </div>

        <div className="inner-review">
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
        </div>
      </div>
      </div>
  </div>
  )
}

export default Docreviews