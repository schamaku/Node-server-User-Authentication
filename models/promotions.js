
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
	image: {
        type: String,
		required: true
    },	
	label: {
        type: String,
        defaul:''
    },
	price: {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
  },
},{
    timestamps: true
});


var Promotions = mongoose.model('Promotion', promoSchema);

// make this available to our Node applications
module.exports = Promotions;