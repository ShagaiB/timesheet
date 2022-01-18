import fire from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getDatabase, ref, onValue } from "firebase/database";


const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
class Firebase {
    constructor() {
        if (!fire.apps.length) {
            fire.initializeApp(config);

            console.log("grgerg")
        }
        this.auth = fire.auth()

    }

    async login({ email, pass }) {
        return await this.auth.signInWithEmailAndPassword(email, pass)

    }

    async logout() {
        return await this.auth.signOut()
    }

    async register({ email, password, firstname, lastname, phone, position }, departState, areaselected) {
        await this.auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return fire.firestore().collection('users').doc(email).set({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                position: position,
                department: departState,
                area: areaselected,
                id: cred.user.uid

            })
        })
        // await this.auth.currentUser.sendEmailVerification()
        return this.auth.currentUser.updateProfile({
            displayName: name,

        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
            console.log("firebase aslaa")

        })
    }

    isLoggedIN() {
        if (this.auth.currentUser) {
            return true
        } else {
            return false
        }
    }

    async deleteAccount() {
        if (this.auth.currentUser) {
            await this.auth.currentUser.delete()
            return true
        } else {
            return false
        }
    }
    getCategory() {
        const db = getDatabase();
        const starCountRef = ref(db, 'Category');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            for (let key in data) {

                console.log(key);              // Prints: 'a', 'b', 'c'
            }

            for (let key in data) {
                console.log(data[key][0]);              // Prints: 'a', 'b', 'c'
            }
        });


    }
    getUsers() {
        const dbs = fire.firestore();
        dbs.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });

    }
    getProfile() {
        if (this.auth.currentUser) {
            return {
                name: this.auth.currentUser.displayName,
                email: this.auth.currentUser.email,
                verified: this.auth.currentUser.emailVerified
            }
        } else {
            return {
                name: null,
                email: null
            }
        }
    }
    async sendVerification() {
        try {
            if (this.auth.currentUser) {
                await this.auth.currentUser.sendEmailVerification()
                return true
            } else {
                throw ''
            }
        } catch (error) {
            return false
        }
    }
}

export default new Firebase()