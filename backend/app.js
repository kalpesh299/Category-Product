const express = require("express");
const mongoose = require("mongoose");
require("./connection/conn");
const ProductModel = require("./model/productModel");
const CategoryModel=require("./model/categoryModel");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.post("/addCategory", async (req, res) => {
    try {
        const categoryData = new CategoryModel({
            categoryName: req.body.categoryName
        })

        const saveData = await categoryData.save();
        res.status(200).json(saveData);
        console.log(saveData);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

app.get("/getCategory", async (req, res) => {
    try {
        const data = await CategoryModel.find();
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error)
    }
})

app.delete("/deleteCategory", async (req, res) => {

    const _id = req.body.id;
    const categoryName = req.body.categoryName;

    console.log(_id);
    console.log(categoryName);

    try{
        const deleteData = await CategoryModel.deleteOne({_id:_id});
        const deleteMany = await ProductModel.deleteMany({categoryName: categoryName});
        res.json("success");
        console.log(deleteData);
         console.log(deleteMany);
    }   
    catch(error){
        res.status(200).send(error)
    }
})

app.put("/updateCategory", async (req, res) => {
    try {
        const updateData = await CategoryModel.updateOne({ _id: req.body._id }, { categoryName: req.body.categoryName }, { returnOriginal: false });
        res.status(200).send(updateData);
        console.log(updateData);
    } catch (error) {
        res.status(200).send(error);
    }
})

app.post("/addProduct", async (req, res) => {
    try {

        const productData = new ProductModel({
            categoryId: req.body.categoryId,
            categoryName: req.body.categoryName,
            productId: req.body.productId,
            productName: req.body.productName
        })

        const saveData = await productData.save();
        res.status(200).json(saveData);
        console.log(saveData);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

app.get("/getProduct", async (req, res) => {

    // console.log(req.query.page);
    // console.log(req.query.size);

    try {

        let { page, size } = req.query;

        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 4;
        }

        const limit = parseInt(size);
        const skip = (page - 1) * size;
        // console.log(limit, skip,page,size);
         const total = await ProductModel.countDocuments({});
        //  console.log(total);
        const fetchData = await ProductModel.find({});

         const productData = await ProductModel.find().limit(limit).skip(skip);
        res.status(200).json({
             totalPage: total,
             result: productData,
             fetchData: fetchData
           
        });

    }
    catch (error) {
        console.log(error)
    }
})

app.delete("/deleteProduct", async (req, res) => {
    try {
        const deleteProduct = await ProductModel.deleteOne({ _id: req.body.id });
        res.status(200).send("success");
        console.log(deleteProduct);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.put("/updateProduct", async (req, res) => {
    try {
        const updateProduct = await ProductModel.updateOne({ _id: req.body._id }, {
            categoryName: req.body.categoryName,
            productName: req.body.productName
        }, { returnOriginal: false });

        res.status(200).json(updateProduct);
        console.log(updateProduct);
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});