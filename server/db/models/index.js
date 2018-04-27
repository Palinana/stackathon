const User = require('./user')
const Category = require('./category')
const Brand = require('./brand');
const Place = require('./place');
const Closet = require('./closet');
const Link = require('./link');

// Category.belongsToMany(Brand, {through: 'BrandCategory'});
// Brand.belongsToMany(Category, {through: 'BrandCategory'});
Brand.belongsTo(Link);
Place.belongsTo(Brand);
Brand.hasMany(Place);
Closet.belongsTo(Brand);
Closet.belongsTo(Category);
Closet.belongsTo(User)
User.hasMany(Closet)



module.exports = {
  User,
  Category,
  Brand,
  Place,
  Link,
  Closet
}
