import React from "react";
import './Rating.css';
function Rating(props) {
    const { rating } = props;
    return (
        <React.Fragment>
            <div className="rating">
                <span>
                    <i className={rating >= 1 ? 'fa fa-star' :
                        rating >= 0.5 ? 'fa fa-star-half-o' :
                            'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 2 ? 'fa fa-star' :
                        rating >= 1.5 ? 'fa fa-star-half-o' :
                            'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 3 ? 'fa fa-star' :
                        rating >= 2.5 ? 'fa fa-star-half-o' :
                            'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 4 ? 'fa fa-star' :
                        rating >= 3.5 ? 'fa fa-star-half-o' :
                            'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 5 ? 'fa fa-star' :
                        rating >= 4.5 ? 'fa fa-star-half-o' :
                            'fa fa-star-o'}></i>
                </span><span>
                    <i className={rating >= 6 ? 'fa fa-star' :
                        rating >= 5.5 ? 'fa fa-star-half-o' :
                            'fa fa-star-o'}></i>
                </span>
                <span>
                    {/* {numReviews} Reviews */}
                </span>
            </div>
        </React.Fragment>
    )
};
export default Rating;