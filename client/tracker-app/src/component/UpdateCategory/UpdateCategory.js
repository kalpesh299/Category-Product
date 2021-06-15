import React from 'react'

const UpdateCategory = ({updateCategory, updateCategoryInput, setUpdateCategoryInput}) => {

    const handleChange = (e) => {
        setUpdateCategoryInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCategory();
        setUpdateCategoryInput("");
    }

    return (
        <div>
            <div>
                <div className="mx-5 my-5 w-80">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label>Category Name :-</label>
                            <input type="text" value={updateCategoryInput} className="form-control" name="categoryName" onChange={handleChange} placeholder="Category name"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update Category</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateCategory
