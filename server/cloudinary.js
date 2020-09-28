require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
	cloud_name:'deusclkek',
	api_key:'233955439592956',
	api_secret:'k3XuicYeIhH5tG0ZwNG07DJ8uEQ'
});

module.exports = { cloudinary }