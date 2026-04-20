import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    profilePicture: { type: String }
}, { timestamps: true });

// To return `id` instead of `_id`
facultySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;

