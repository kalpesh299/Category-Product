const mongoose= require('mongoose');


const categorySchema = new mongoose.Schema({
      categoryId: {
          type: String
      },
      categoryName: {
          type: String
      }
  });
  
  const CategoryModel = new mongoose.model("categorymodel", categorySchema);

  module.exports = CategoryModel;