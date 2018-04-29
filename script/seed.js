/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Category, Place, Brand, Link, Closet} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const categories = await Promise.all([
    Category.create({name: 'Tops'}),
    Category.create({name: 'Jeans'}),
    Category.create({name: 'Pants'}),
    Category.create({name: 'Underwear'}),
    Category.create({name: 'Footwear'}),
    Category.create({name: 'Hats'}),
    Category.create({name: 'Belts'}),
    Category.create({name: 'Swimwear'}),
  ])

  const brands = await Promise.all([
    Brand.create({name: 'Zara', link: 'https://www.zara.com/us/'}),
    Brand.create({name: 'Mango', link: 'https://shop.mango.com/us'}),
    Brand.create({name: 'Topshop', link: 'http://us.topshop.com/'}),
    Brand.create({name: 'GAP', link: 'https://www.gap.com'}),
    Brand.create({name: "Levi's", link: 'https://www.levi.com/US/en_US/'}),
    Brand.create({name: 'Victoria Secret', link: 'https://www.victoriassecret.com'}),
  ])

  const places = await Promise.all([
    Place.create({latitude: '40.7225111', longitude: '-73.99957689999997'}),//zara
    Place.create({latitude: '40.7540008', longitude: '-73.98125820000001'}),//zara
    Place.create({latitude: '40.7241534', longitude: '-73.9982225'}),//mango
    Place.create({latitude: '40.7497152', longitude: '-73.98692599999998'}),//levis
    Place.create({latitude: '40.7651088', longitude: '-73.98148779999997'}),//victoria
    
  ])

  // const links = await Promise.all([
  //   Link.create({link: 'https://www.zara.com/us/'}),
  //   Link.create({link: 'https://shop.mango.com/us'}),
  //   Link.create({link: 'http://us.topshop.com/'}),
  //   Link.create({link: 'https://www.gap.com'}),
  //   Link.create({link: 'https://www.levi.com/US/en_US/'}),
  //   Link.create({link: 'https://www.victoriassecret.com'})
  // ])

  // const addLinksToBrands = await Promise.all([
  //   Brand.findById(1).then(brand => brand.setLink(1)),
  //   Brand.findById(2).then(brand => brand.setLink(2)),
  //   Brand.findById(3).then(brand => brand.setLink(3)),
  //   Brand.findById(4).then(brand => brand.setLink(4)),
  //   Brand.findById(5).then(brand => brand.setLink(5)),
  //   Brand.findById(6).then(brand => brand.setLink(6)),
  // ])

  const addsToBrands = await Promise.all([
    Brand.findById(1).then(brand => brand.setPlaces([1, 2])),
    Brand.findById(2).then(brand => brand.setPlaces(3)),
    Brand.findById(5).then(brand => brand.setPlaces(4)),
    Brand.findById(6).then(brand => brand.setPlaces(5)),
  ])

  // const addDefaultCloset= await Promise.all([
  //   Closet.findById(1).then(closet => closet.setBrand(1)),
  //   Closet.findById(1).then(closet => closet.setCategory(1)),
  //   Closet.findById(1).then(closet => closet.setUser(1)),
  //   Closet.findById(1).then(closet => closet.setSize(36)),
  //   Closet.findById(1).then(closet => closet.setModel('classic'))
  // ])
  // const addDefaultCloset= await Promise.all([
  //   Closet.findById(1).then(closet => closet.setLocation([1, 2]))
  // ])




  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${brands.length} brands`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded ${links.length} links`)
  console.log(`seeded ${places.length} locations`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
