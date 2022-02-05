
//import models
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
//Defining relationships
//Products (A) belongs to category (B)
Product.belongsTo(Category);

//Categories have many Products
Category.hasMany(Product);

//Products belongToMany Tags (through ProductTag)
Product.belongsToMany (Tag, { through : 'ProductTag'});

//Tags belongToMany Products (through ProductTag)
Tag.belongsToMany (Product, {through: ProductTag});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
