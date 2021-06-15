import React from 'react';
import {NavLink} from "react-router-dom"
import "./AllProducts.css";

const AllProducts = ({ product, deleteProduct, newData, switchUpdateProduct }) => {

    let data = "";

    if(newData.length !== 0){
        data = newData;
    }
    else{
        data = product;
    }

    // const datas = newData.length ? (
        const datas = data.length !== 0 ? (
            data.map((item, index) => {
                return (
                     <div key={index} className=" bg-secondary card"  style={{ width: "18rem", marginTop: "80px" }}>
                         <div className="card-body ">
                             <div className="px-5">
                                 <p className="card-title"><span style={{ fontWeight: "bold",color:"black" }}>Category ID:- </span>{item.categoryId}</p>
                                 <p className="card-title"><span style={{ fontWeight: "bold" ,color:"black"}}>Category Name:- </span>{item.categoryName}</p>
                                 <p className="card-title"><span style={{ fontWeight: "bold",color:"black" }}>Product ID:- </span>{item.productId}</p>
                                 <p className="card-title"><span style={{ fontWeight: "bold",color:"black" }}>Product Name:- </span>{item.productName}</p>
                             </div>
                             <div style={{display:"flex", justifyContent: "space-evenly", marginTop: "10px"}}>
                                 <button onClick={() => {deleteProduct(item) }} className="btn btn-danger">Delete</button>
                                 <NavLink to="/updateProduct"><button onClick={() => {switchUpdateProduct(item)}} className="btn btn-primary">Update</button></NavLink>
                             </div>
                         </div>
                     </div>
                    
                )
        })
    ) : (
        <p className=" d-flex align-items-center no-item ">No Product present of this Category</p>
    )

    return(
        <>
            <div className="product" style={{marginTop: "20px", display:"flex", flexDirection: "column"}}>
                <h2 style={{  textDecoration: "underline"}} className="d-flex align-items-center ml-5">Products</h2>
                <div className="style">
                    {datas}
                </div>
            </div>
        </>
    )
}

export default AllProducts
