import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const logInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error);
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, [])

    return {
        user,
        error,
        logInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
    }

}

export default useFirebase;