import './generators/schema/schemaType';

export const MONGO_URI = 'mongodb://localhost/test_db';

export default {
    users: {
        email: Email,
        password: Password,
        name: {
            required: true,
            type: Text
        }
    },
    posts: {
        author: {
            type: ObjectId,
            ref: 'users'
        },
        message: Text,
        at: Date,
        likes: Number
    }
};