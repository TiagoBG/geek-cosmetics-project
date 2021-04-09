const {Router} = require('express');
const router = Router();

const {
    products,
} = require('./controller');

router.get('/products',products);

module.exports = router;