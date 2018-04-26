const User = require('./user')
const Category = require('./category')
const Brand = require('./brand');
const Location = require('./location');
const Closet = require('./closet');
const Link = require('./link');

Category.belongsToMany(Brand, {through: 'BrandCategory'});
Brand.belongsToMany(Category, {through: 'BrandCategory'});
Link.belongsTo(Brand);
Brand.hasMany(Location);
Brand.belongsTo(Closet);
Category.belongsTo(Closet);
User.belongsTo(Closet);
User.hasMany(Closet)



module.exports = {
  User,
  Category,
  Brand,
  Location,
  Link,
  Closet
}
