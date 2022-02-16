import { createContext, useEffect, useReducer } from 'react';

import Amplify, { Auth } from 'aws-amplify';
import { amplifyConfig } from '../awsconfig'

// Auth class api docs
// https://aws-amplifyx.github.io/amplify-js/api/classes/authclass.html

// Amplify library config, see config.js
Amplify.configure(amplifyConfig)

//  Auth state management
const initialState = {
  isAuthenticated: false,
  isInitializing: false, 
  user: null
};



// setup login, signup, and logout
//  setup verify code and resend code
//  setup password reset and recovery

// context object for useAuth hook
export const AuthContext = createContext({

})


export const AuthProvider = (props) => {
  const { children } = props;
  

}

