import React from 'react'
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import AllProducts from '../AllProducts/AllProducts';

const LandingPage = ({pagination, pages, pageNumber, product, category, deleteCategory, deleteProduct, switchUpdateCategory, productDisplay, newData, switchUpdateProduct }) => {

    // console.log(newData);

    return (
        <div className="mainContainer bg-dark">
            <div style={{textAlign: "right"}} className=" p-2 bd-highlight">
                <button className="btn btn-primary mx-3 px-3 rounded-pill" onClick={() => pagination("prev")}>Prev</button>
                <button className="btn btn-primary px-3 rounded-pill" onClick={() => pagination("next")}>Next</button>
                <h5 className="mr-4 mt-3 page">Page:- {pageNumber}</h5>
            </div>
            <div className="row">
                <div className="col-4 mt-5">
                    <h3 className="header">Categories</h3>
                    <div className="listContainer" >
                        {category.map((item, index) => {
                            return(
                                <ul key={index}>
                                    <li onClick={() => {productDisplay(item)}}><span style={{width: "180px" ,color:"white"}}>{item.categoryName}</span><NavLink to="/updateCategory"><i onClick={() => {switchUpdateCategory(item)}} class="fa fa-pencil-alt pencil" ></i></NavLink><i onClick={() => {deleteCategory(item)}} className="fa fa-times"></i></li>
                                </ul>
                            )
                        })}
                    </div>
                </div>

                <div className="col-8 cardData">
                    <AllProducts product={product} newData={newData} switchUpdateProduct={switchUpdateProduct} deleteProduct={deleteProduct}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
