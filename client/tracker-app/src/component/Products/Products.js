import React from 'react'

const Products = ({ category, addProduct, setProduct, setProductInput, productInput}) => {

    const handleChange = (e) => {
        setProductInput((oldValue) => {
            return(
                {...oldValue, [e.target.name] : e.target.value}
            )
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct();
        setProductInput({categoryId: "", categoryName: "", productId: "", productName: ""})
    }

    return (
        <div>
            <div className="mx-5 mt-5 w-50" style={{color: "white"}}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Category ID :-</label>
                        <input type="text" value={productInput.categoryId}  className="form-control" onChange={handleChange} name="categoryId"  placeholder="Enter category id"/>
                    </div>
                    <div>
                        <label>Select Category :- </label>
                        <select style={{padding: "3px 16px"}} value={productInput.categoryName} name="categoryName" onChange={handleChange}>
                            <option>Choose One</option>
                            {category.map((item) => {
                                return(
                                    <option id="categoryName">{item.categoryName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Product ID :-</label>
                        <input type="text" value={productInput.productId} className="form-control" onChange={handleChange} name="productId"  placeholder="Enter product id"/>
                    </div>
                    <div class="form-group">
                        <label>Product Name :-</label>
                        <input type="text" value={productInput.productName} className="form-control" onChange={handleChange} name="productName" placeholder="Product name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>  
        </div>
    )
}

export default Products;