import { initFirebase } from '../../lib/firebase/initFirebase'
import { useCallback, useEffect, useState } from 'react'

import "firebase/auth";
// import { setUserCookie } from '@/lib/firebase/userCookies'
// import { mapUserData } from '@/lib/firebase/mapUserData'
import fire from 'firebase/compat/app'
// initialize firebase

const auth = fire.auth();

const FirebaseAuth = async ({ email, pass }) => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    
    return (
        await auth.signInWithEmailAndPassword(email, pass)
        
       
    )
}

export default FirebaseAuth