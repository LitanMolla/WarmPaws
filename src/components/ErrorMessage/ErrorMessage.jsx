import toast from 'react-hot-toast';

const ErrorMessage = (error) => {
    if (error.code === 'auth/invalid-credential') {
        toast.error('Invalid credential');
    } else if (error.code === 'auth/user-not-found') {
        toast.error('No user found with this email');
    } else if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password');
    } else if (error.code === 'auth/email-already-in-use') {
        toast.error('This email is already registered');
    } else if (error.code === 'auth/weak-password') {
        toast.error('Password should be at least 6 characters');
    } else if (error.code === 'auth/invalid-email') {
        toast.error('Please enter a valid email address');
    } else if (error.code === 'auth/missing-password') {
        toast.error('Please enter your password');
    } else if (error.code === 'auth/too-many-requests') {
        toast.error('Too many attempts! Try again later');
    } else if (error.code === 'auth/network-request-failed') {
        toast.error('Network error! Please check your connection');
    } else if (error.code === 'auth/popup-closed-by-user') {
        toast.error('Popup closed before completing the sign-in');
    } else if (error.code === 'auth/operation-not-allowed') {
        toast.error('This sign-in method is not enabled');
    } else {
        toast.error('Something went wrong! Please try again');
    }
}
export default ErrorMessage;