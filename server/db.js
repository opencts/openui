import './generators/schema/schemaType';

export const MONGO_URI = 'mongodb://localhost/test_db';

export default {
    users: {
        name: Text,
        email: Email,
        password: Password,
        avatar: File,
        createdAt: {
            type: Number,
            default: Date.now()
        },
        lastUpdatedAt: {
            type: Number,
            default: Date.now()
        },
        enabled: {
            type: Boolean,
            default: true
        }
    },
    posts: {
        author: {
            type: ObjectId,
            ref: 'users'
        },
        message: Text,
        at: Date,
        likes: Number,
        createdAt: {
            type: Number,
            default: Date.now()
        },
        lastUpdatedAt: {
            type: Number,
            default: Date.now()
        },
        enabled: {
            type: Boolean,
            default: true
        }
    }
};