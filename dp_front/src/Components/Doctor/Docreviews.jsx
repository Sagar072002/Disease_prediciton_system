import React, { useState, useEffect, useContext } from "react";
import img from "../../assets/man.jpg";
import { Link } from "react-router-dom";
import doctorService from '../../services/doc_service';
import { SiteContext } from '../../context/siteContext';
import { format } from 'date-fns'; // Make sure to install date-fns

const Docreviews = () => {
    const { uid } = useContext(SiteContext);
    const [activeMenu, setActiveMenu] = useState("Reviews");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [reviewList, setReviewList] = useState([]);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    useEffect(() => {
        doctorService.get(uid).then((res) => {
            console.log("Res : ", res.data.reviews);
            setReviewList(res.data.reviews);
        }).catch((err) => {
            console.log("Error: ", err);
        });
    }, [uid]);

    useEffect(() => {
        const filtered = reviewList.filter(
            (review) =>
                review.user.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredReviews(filtered);
    }, [searchQuery, reviewList]);

    // if (!reviewList.length) return <div>Loading...</div>;

    return (
        <div className="admin admindct">
            <div className="sidebar">
            <h2 className="dashboardtext">Doctor </h2>
        <h2 className="dashboardtext2"> Dashboard</h2>
                <div className="image">
                    <img src={img} alt="" />
                    <p>Sagar Negi</p>
                </div>
                
                <div className="det">
                    <Link to="/doctor"> <p className={activeMenu === "Appointments" ? "active" : ""} onClick={() => handleMenuClick("Appointments")}>Appointments</p> </Link>
                    <Link to="/doctorreviews"> <p className={activeMenu === "Reviews" ? "active" : ""} onClick={() => handleMenuClick("Reviews")}>Reviews</p> </Link>
                    <Link to="/docprofile"> <p className={activeMenu === "Edit Profile" ? "active" : ""} onClick={() => handleMenuClick("Edit Profile")}>Edit Profile</p> </Link>
                </div>
            </div>
            <div className="rightside revsec">
                <div className="review-section">
                    <h1>User Reviews</h1>
                    <div className="inner-review">
                        {filteredReviews.map((review) => (
                            <div className="review" key={review._id}>
                                <div className="top-section">
                                    <img src={img} alt="" />
                                    <div className="detail">
                                        <h2>{review.user.username}</h2>
                                        {/* Add position and company if available in your data */}
                                    </div>
                                </div>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={i < review.rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                                        ></i>
                                    ))}
                                </div>
                                <p>{review.reviewText}</p>
                                <p className="date-time">{format(new Date(review.createdAt), 'PPPpp')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docreviews;
