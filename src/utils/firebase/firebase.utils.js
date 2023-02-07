import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB97JCJUXEC-WUbXJ8NxULJXKxnnt43Cpw",
    authDomain: "clothing-db-8630d.firebaseapp.com", 
    projectId: "clothing-db-8630d",
    storageBucket: "clothing-db-8630d.appspot.com",
    messagingSenderId: "599472620027",
    appId: "1:599472620027:web:3ea10279873caa10670b5e"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(); // GoogleAuthProvider is a class directly connected to google auth so we use new keyword.

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey); // db içindeki collectionlardan' istenen collectionKey'e sahip olanın ref'ini al.Users ve categories keydir.
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());//object.title.toLowerCase() bu key değeri categories altındaki, hats,jackets,mens,sneakers,womans, kısımlarını temsil ediyor. yani yukarıda collentionRef'te categoriesi aldım.Burada ise categories altındaki , elemanların referansını almış oldum.
        batch.set(docRef, object)
    });

    await batch.commit();
    console.log("done");
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
        const {title, items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    //if user data does not exist
    //create / set the document with the data from userAuth in my collection
    if (!userAuth) return; //kullanıcı alanı firestore üzerinde oluşturulmamışsa direk olarak geri dön.

    const userDocRef = doc(db, "users", userAuth.uid); // uid'yi unique id olarak kullanıyoruz.
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef) //

    console.log(userSnapshot.exists()); //firestore içinde kullanıcının var olup olmadığını true false şeklinde dönüş alırız.


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    //if user data exists
    return userDocRef;
};

//signInWithPopup ile giriş yapmak için gereken provider yani sağlayıcıdır onuda new GoogleAuthProvider ile oluşturduk ve parametre olarak geçtik.

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);



