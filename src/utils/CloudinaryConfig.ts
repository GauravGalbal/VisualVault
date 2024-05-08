// utils/cloudinaryConfig.js

import { v2 as cloudinary } from 'cloudinary';

// Set up Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
});

export default cloudinary;
