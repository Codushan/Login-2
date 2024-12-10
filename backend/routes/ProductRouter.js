const ensureAuthenticated = require('../middlewares/Auth');
const routers = require('express').Router();

routers.get('/', ensureAuthenticated, (req, res) => {
    console.log('Products route accessed');
    console.log('  ----logged in user details----', req.user);    
    try {
        res.status(200).json([
            {
                name: "Mobile",
                price: 10000
            },
            {
                name: "Computer",
                price: 50000
            }
        ]);
    } catch (error) {
        console.error('Error in products route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = routers;