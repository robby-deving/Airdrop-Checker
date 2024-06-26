function getCustomErrorMessage(errorCode) {
    let customErrorMessage;
    switch (errorCode) {
        case 'auth/invalid-email':
            customErrorMessage = 'Invalid email format.';
            break;
        case 'auth/user-disabled':
            customErrorMessage = 'User account is disabled.';
            break;
        case 'auth/user-not-found':
            customErrorMessage = 'No user found with this email.';
            break;
        case 'auth/wrong-password':
            customErrorMessage = 'Incorrect password. Please try again.';
            break;
        case 'auth/email-already-in-use':
            customErrorMessage = 'Email is already in use.';
            break;
        case 'auth/weak-password':
            customErrorMessage = 'Password is too weak.';
            break;
        case 'auth/invalid-credential':
            customErrorMessage = 'Invalid credentials. Please try again.';
            break;
        default:
            customErrorMessage = 'An unknown error occurred. Please try again later.';
            break;
    }
    return customErrorMessage;
}

export { getCustomErrorMessage };
