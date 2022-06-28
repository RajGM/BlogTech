import {auth, googleAuthProvider} from '../lib/firebase';

import { userContext } from '../lib/context';
import { useContext, useState } from 'react';

export default function EnterPage({props}){
    const {user, username} = useContext(userContext);


    return (<main>
        
        {user ?
        !username ? <UsernameForm/> : <SignOutButton/>
        :
        <SignInButton/>
        }

    </main>)
}

function SignInButton(){
    const signInWithGoogle = async () =>{
        await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'}/> Sign in With Google
        </button>
    )
}

function SignOutButton(){
    return <button onClick={()=> auth.signOut()}>Sign Out</button>
}

function UsernameForm(){
    const [formValue,setFormValue] = useState('');
    const [isValid,setIsValid] = useState(false);
    const [loading,setLoading] = useState(false);



    return null;
}
