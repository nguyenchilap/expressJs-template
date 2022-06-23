import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Template = new Schema({
    attribute1: String,
    attribute2: Number,
    attribute3: {type: Boolean, default: false},
}, {
    timestamps: true,
    id: true
});

//plugin
Template.plugin(paginate);


export default mongoose.model('Template', Template, 'templates');