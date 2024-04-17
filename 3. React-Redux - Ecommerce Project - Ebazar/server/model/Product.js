const mongoose = require('mongoose')

const { Schema } = mongoose;

const productSchema = new Schema({
    // id: { type: Number },
    title: { type: String },
    description: { type: String },
    price: { type: Number, min: 0 },
    discountPercentage: { type: Number, min: 0, max: 100 },
    rating: { type: Number, min: 0, max: 5 },
    stock: { type: Number, min: 0 },
    brand: { type: String },
    category: { type: String },
    thumbnail: { type: String },
    images: { type: [String] },
    highlights: { type: [String] },
    deleted: { type: Boolean },
})

const virtual = productSchema.virtual('id')
virtual.get(function () {
    return this._id
})
productSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

exports.Product = mongoose.model('Product', productSchema)
