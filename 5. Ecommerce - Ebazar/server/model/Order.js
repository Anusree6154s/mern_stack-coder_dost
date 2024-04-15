const mongoose = require('mongoose')

const { Schema } = mongoose;

const orderSchema = new Schema({
    items: { type: [Schema.Types.Mixed] },
    totalPrice: { type: Number },
    totalItems: { type: Number },
    user: { type: Schema.Types.ObjectId},
    paymentMethod: { type: String },
    status: { type: String, default: 'Pending' },
    selectedAddress: { type: Schema.Types.Mixed },
    date: { type: String },
    email: { type: String }
})

const virtual = orderSchema.virtual('id')
virtual.get(function () {
    return this._id
})
orderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

exports.Order = mongoose.model('Order', orderSchema)
