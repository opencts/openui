import './generators/schema/schemaType';

export const MONGO_URI = 'mongodb://localhost/test_db';

export default {
    users: {
        name: {
            required: true,
            type: Text,
            minLength: 4
        },
        email: Email,
        password: Password
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