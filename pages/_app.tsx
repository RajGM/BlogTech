import '../styles/globals.css'

import Navbar from '../components/NavBar';
import { Toaster } from 'react-hot-toast';

import {userContext} from '../lib/context';

import {useEffect , useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { firestore } from '../lib/firebase';

import { useUserData } from '../lib/hooks';


function MyApp({ Component, pageProps }) {

  const userData = useUserData();



  return (
  <userContext.Provider value={userData} >
  <Navbar/>
  <Component {...pageProps} />
  <Toaster/>
  </userContext.Provider>
  )
}

export default MyApp
