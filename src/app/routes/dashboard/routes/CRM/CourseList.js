import React from 'react';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';
import IntlMessages from 'util/IntlMessages';

const CourseList = ({product}) => {
  const {thumb, name, price, mrp, offer, variant, rating,description} = product;
  return (
    <div className="card product-item-vertical hoverable animation flipInX">
      <div className="row d-flex align-items-sm-center">
        {/* <div className="col-xl-3 col-lg-4 col-md-3 col-12">
          <div className="card-header border-0 p-0">
            <div className="card-image">
              <div className="grid-thumb-equal">
                <span className="grid-thumb-cover jr-link">
                  <img className="img-fluid" src={thumb} alt="..."/>
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="col-xl-6 col-lg-5 col-md-6 col-12">
          <div className="card-body">
            <div className="product-details">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="card-title fw-regular">{name}</h3>
                </div>
                <div className="col-md-6">
                  <Button variant="contained" className="text-white bg-indigo btn-block">Add To Application</Button>
                </div>
              </div>
              {/* <h3 className="card-title fw-regular">{name}
                <Button variant="contained" className="text-white bg-indigo">Add To Application</Button>
              </h3> */}
              
              {/* <div className="d-flex "> */}
                {/* <h3 className="card-title">{price} </h3>
                <h5 className="text-muted px-2">
                  <del>{mrp}</del>
                </h5>
                <h5 className="text-success">{offer} off</h5> */}
                <div className="row">
                <div className="col-md-6">
                  <h3 className="card-title fw-regular">{name}</h3>
                </div>
                <div className="col-md-6">
                  <Button variant="contained" className="text-white bg-indigo btn-block">Add To Saved Institutions</Button>
                </div>
              {/* </div> */}
              </div>

              {/* <div className="d-flex flex-row " style={{height: 25}}>
                <StarRatingComponent
                  name=""
                  value={rating}
                  starCount={5}
                  editing={false}/>
                <p className="ml-2">{rating}</p>
              </div> */}
              <p>
              <Button variant="contained" className="text-white bg-indigo">Course Detail</Button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="row card-footer border-0 text-center bg-white">
            <div className="cart-btn col-md-6">
              <Button variant="contained" className="text-white btn-block bg-indigo">Ask a question</Button>
            </div>
            <div className="cart-btn mb-2 col-md-6">
            <Button  variant="contained" className="text-white btn-block bg-indigo">Add To Saved Courses</Button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
};

export default CourseList;

