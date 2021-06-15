import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import axios from "axios";

import LandingPage from "../LandingPage/LandingPage";
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Category from '../Category/Category';
import UpdateCategory from '../UpdateCategory/UpdateCategory';
import UpdateProduct from "../UpdateProduct/UpdateProduct";

const Home = () => {

    const [itemData, setItemData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [updateCategoryInput, setUpdateCategoryInput] = useState();
    const [updateProductInput, setUpdateProductInput] = useState({
        categoryName: "",
        productName: ""
    });
    const [category, setCategory] = useState([]);
    const [inputList, setInputList] = useState({
        categoryName: ""
    });
    const size = 4;
    const [total, setTotal] = useState();
    const [product, setProduct] = useState([]);
    const [productInput, setProductInput] = useState({
        categoryId: "",
        categoryName: "",
        productId: "",
        productName: ""
    });

    useEffect(() => {
        getProduct();
        getCategory();
    }, []);

    useEffect(() => {
        getProduct();
    }, [pageNumber]);

    useEffect(() => {
        let temp = [];
        category.map((item) => {
            temp.push(item.categoryName);
        })
        setItemData(temp);
    }, [category])


    //Adding Category
    const addCategories = () => {
        if (itemData.includes(inputList.categoryName)) {
            alert("Category Name already present")
        }
        else if(inputList.categoryName === ""){
            alert("Category Name is required")
        }
        else {
            const Categories = {
                categoryName: inputList.categoryName
            }
            axios.post("/addCategory", Categories)
        }
        getCategory();
    }

    //Getting Category
    const getCategory = async () => {
        const data = await axios.get("/getCategory");
        setCategory(data.data);
    }

    //Adding Product
    const addProduct = () => {

        if(productInput.categoryName === ""){
            alert("All fields are required");
        }
        else{
            const products = {
                categoryId: productInput.categoryId,
                categoryName: productInput.categoryName,
                productId: productInput.productId,
                productName: productInput.productName
            }
    
            axios.post("/addProduct", products);
        }
        getProduct();
    }

    //Getting Product

    const [fetchingData, setFetchingData] = useState([]);

    const getProduct = async () => {
         const productData = await axios.get(`/getProduct?page=${pageNumber}&size=${size}`);
        // const productData= await axios.get("/getProduct")
        setProduct(productData.data.result);
        console.log(productData.data.result,"kkkkkkkkk")
        setTotal(productData.data.totalPage);
        setFetchingData(productData.data.fetchData);
    }


    //Delete Category
    const deleteCategory = (item) => {
        const data = {
            id: item._id,
            categoryName: item.categoryName
        }
        axios.delete("/deleteCategory", { data });

        getCategory();
        getProduct();
    }

    //Delete Product
    const deleteProduct = (item) => {
        const data = {
            id: item._id
        }
        axios.delete("/deleteProduct", { data })

        getProduct();
    }

    //Update Category
    const [categoryName, setCategoryName] = useState([]);
    const switchUpdateCategory = (item) => {
        setCategoryName(item);
    }

    const updateCategory = () => {

        if (itemData.includes(updateCategoryInput)) {
            alert("Category Name already present")
        }
        else {
            const upCategory = {
                _id: categoryName._id,
                categoryName: updateCategoryInput
            }

        axios.put("/updateCategory", upCategory);
        }

        getCategory();
    }

    //Pagination
    const pagination = (type) => {

        if(type === "prev"){
            if(pageNumber === 1){
                setPageNumber(1)
            }
            else{
                setPageNumber(pageNumber-1);
            }
        }
        else if(type === "next"){
            if (Math.ceil(total / size) === pageNumber) {
                setPageNumber(pageNumber)
            }
            else{
                setPageNumber(pageNumber+1);
            }
        }
    }

    //Update product
    const [productName, setProductName] = useState([]);
    const switchUpdateProduct  = (item) => {
        setProductName(item);
        console.log(item);
    }

    const updateProduct = () => {
        const upProduct = {
            _id: productName._id,
            categoryName: updateProductInput.categoryName,
            productName: updateProductInput.productName 
        }

        axios.put("/updateProduct", upProduct);

        getProduct();
    }

    //Product Display according to category
    const [newData, setNewData] = useState([]);

    const productDisplay = (item) => {        
        let categoryItem = item.categoryName;
        console.log(categoryItem);

        let tempProductDisplay = fetchingData.filter((values) => {
            if(values.categoryName === categoryItem){
                return values;
            }
            else{
                return "";
            }
        })
        setNewData(tempProductDisplay);
    }

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <LandingPage pageNumber={pageNumber} pagination={pagination} newData={newData} productDisplay={productDisplay} switchUpdateProduct={switchUpdateProduct} switchUpdateCategory={switchUpdateCategory} getProduct={getProduct} deleteProduct={deleteProduct} deleteCategory={deleteCategory} product={product} category={category} />
                </Route>
                <Route exact path="/category">
                    <Category inputList={inputList} addCategories={addCategories} category={category} setCategory={setCategory} setInputList={setInputList} inputList={inputList} />
                </Route>
                <Route path="/product">
                    <Products addProduct={addProduct} setProduct={setProduct} setProductInput={setProductInput} productInput={productInput} category={category} />
                </Route>
                <Route path="/updateCategory">
                    <UpdateCategory setUpdateCategoryInput={setUpdateCategoryInput} updateCategoryInput={updateCategoryInput} updateCategory={updateCategory}/>
                </Route>
                <Route path="/updateProduct">
                    <UpdateProduct category={category} updateProduct={updateProduct} updateProductInput={updateProductInput} setUpdateProductInput={setUpdateProductInput}/>
                </Route>
            </Switch>
        </Router>
    )
};

export default Home;