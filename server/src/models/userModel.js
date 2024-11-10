import { Schema, model } from 'mongoose';
import { generate } from 'rand-token';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  apiToken: {
    type: String,
    unique: true
  },

  // Add a reference to the shoppingCart model
  // (one user can have exactly one shopping cart, and one shopping cart is owned by exactly one user)
  shoppingCart: {
      type: Schema.Types.ObjectId, 
      ref: 'ShoppingCart'
    }
});

UserSchema.pre('save', function(next) {
  if (this.isNew) {
      this.apiToken = generate(16); // Generate a 16-character token
  }
  next();
});

export default model('User', UserSchema);
