import { db } from './firebase.js'
import { collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

async function readScores() {
    const snapshot = await getDocs(collection(db, "puntuacions"));

        snapshot.forEach(doc => {
        console.log(doc.data());
    });
}

readScores();