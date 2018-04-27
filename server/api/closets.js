const router = require('express').Router()
const {Closet, Brand, Place, Category, User, Link } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    // req.user ?
      Closet.findAll({
        include: [{
         all: true
        }]
      })
       .then(closets => res.send(closets))
        .catch(next)
    //   : res.send("Unauthorized. You do not have access.");
  });


  //get a user's closet
router.get('/:userId', (req, res, next) => {
    Closet.findOne({
      where: {
        userId: req.params.userId
      }, include: [{all: true}]
    })
    .then(res => {
        console.log("Getting order", res.data)
        return res.data
      })
    .then(closet => {
  
      res.send(closet);
      })
    .catch(next);
  });

  router.get('/user/:userId', (req, res, next) => {
    Cart.findOne({
      where: {
        userId: req.params.userId,
        status: 'pending'
      }
    })
    .then(cart => {
      return cart.getOrders({include: [{model: Trip}]});
    })
    .then(orders => {
      const send = orders.map(order => {
          return {
            subTotal: order.subTotal,
            quantity: order.quantity,
            id: order.id,
            unitPrice: order.unitPrice,
            tripId: order.tripId,
            cartId: order.cartId,
            trip: order.trip.name
          }
        });
      res.send(send);
      })
    .catch(next);
  });

  //post a new item to a user's closet
router.post('/', (req, res, next) => {
    Closet.create(req.body)
    .then(closet => res.json(closet))
    .catch(next)
   
});

router.put("/:closetId", (req,res,next) => {
    Closet.update(req.body, 
        {where: {id: req.params.closetId},
         returning: true})
    .then(closet => {
            res.status(201).json(closet[1][0]);
    })
    .catch(next)
})

router.delete('/:closetId', (req, res, next) => {
    Closet.destroy({
        where: {
            id: req.params.closetId
        }
    })
    .then(() => {
        res.sendStatus(204);
    })
    .catch(next);
})

