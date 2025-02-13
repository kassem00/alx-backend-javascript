import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    // Run both functions in parallel for better performance
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
