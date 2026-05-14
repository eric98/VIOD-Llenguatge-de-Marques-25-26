import { db } from './firebase.js'
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

async function readScores() {
    const snapshot = await getDocs(collection(db, "puntuacions"));

        // Recorrem els documents de la col·lecció "puntuacions"
        snapshot.forEach(doc => {

            // Dades del document (nom, puntuacio, edat, data, etc.)

            console.log(doc.id + " => " + doc.data().nom);

        });
}

async function writeScore() {
    addDoc(collection(db, "puntuacions"), {
        nom: "nou usuari",
        puntuacio: 100,
        edat: 25,
        data: new Date()
    });
}

writeScore();
readScores();

// Consultar a la base de dades de Firestore
// https://firebase.google.com/docs/firestore/query-data/queries?hl=es-419#simple_queries