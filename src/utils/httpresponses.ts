export const status = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  CONFLICT: 409,
  UNPROCESSABLE_REQUEST: 422,
  UNAUTHORIZED: 401,
  MULTI_STATUS: 207
}

export const message = {

  SERVER_ERROR: 'Server Error. Something went wrong on our system.We are looking into it.Sorry for the incovienience.',
  USER_NOT_FOUND: 'User not found !',
  USER_ALREADY_EXISTS_SIGNUP: 'User already exists.Please login',
  USER_NOT_FOUND_LOGIN: 'User not found !.Please signup firt.',
  UNAUTHORISED: 'Unauthorised !',
  LOGIN_REQUIRED: 'Please login to continue',
  SIGNUP_SUCCESSFUL: 'Signup successfull.Please login',
  SIGNUP_ALREADY_COMPLETED: 'Signup already completed! If You think this is an error.Please contact support!',
  INCORRECT_CREDENTIALS: 'Invalid Email or Password!',
  LOGGED_OUT: 'Logout successful !',
  PASSWORD_RESET_MAIL_SENT: 'A Mail with instructions to reset your password has been sent !',
  PASSWORD_RESET_COMPLETE: 'Password for your account was successful !',
  EMAIL_ALREADY_INUSE: 'Email is already in use!',
  EMAIL_ALREADY_VERIFIED: 'Email is already verified! Please login'

}