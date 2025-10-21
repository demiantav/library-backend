import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
  },
  born: Number,
});

const Author = mongoose.model('Author', authorSchema);

export default Author;
