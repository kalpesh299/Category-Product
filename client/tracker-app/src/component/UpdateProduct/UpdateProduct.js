import React from 'react'

const UpdateProduct = ({category, updateProduct, setUpdateProductInput, updateProductInput}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct();
        setUpdateProductInput({categoryName: "", productName: ""})
    }

    const handleChange = (e) => {
        setUpdateProductInput((oldItem) => {
            return(
                {...oldItem, [e.target.name]: e.target.value}
            )
        })
    }

    return (
        <div>
            <div className="mx-5 mt-5 w-50">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Select Category :- </label>
                        <select style={{padding: "3px 16px"}} value={updateProductInput.categoryName} name="categoryName" onChange={handleChange}>
                            {category.map((item) => {
                                return(
                                    <option id="categoryName">{item.categoryName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Product Name :-</label>
                        <input type="text" value={updateProductInput.productName} className="form-control" onChange={handleChange} name="productName" placeholder="Product name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update Product</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct
