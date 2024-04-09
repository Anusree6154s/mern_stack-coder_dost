const mongoose = require('mongoose')

const { Schema } = mongoose;

const wishListSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', },
    user: { type: Schema.Types.ObjectId },
})

const virtual = wishListSchema.virtual('id')
virtual.get(function () {
    return this._id
})
wishListSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

exports.WishList = mongoose.model('WishList', wishListSchema, 'wishList')