import React from 'react';

const Category = ({ setInputList, addCategories, inputList}) => {

    const handleChange = (e) => {
        setInputList((oldValue) => {
            return(
                {...oldValue, [e.target.name] : e.target.value}
            )
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategories();
        setInputList({categoryName: ""});
    };


    return (
        <div>
            <div className="mx-5 mt-5 w-50" style={{color: "white"}}>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label>Category Name :-</label>
                        <input type="text" value={inputList.categoryName} className="form-control" name="categoryName" onChange={handleChange} placeholder="Category name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Category</button>
                </form>
            </div>
        </div>
    )
}

export default Category
