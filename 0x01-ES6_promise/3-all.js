import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    // Wait for both promises to resolve
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // Log the expected output
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    // Handle errors and log "Signup system offline"
    console.log('Signup system offline');
  }
}
