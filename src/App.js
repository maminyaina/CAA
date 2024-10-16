// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//     const [selectedSymbols, setSelectedSymbols] = useState([]);
//     const [message, setMessage] = useState('');
//     const [voices, setVoices] = useState([]);
//     const [frenchVoice, setFrenchVoice] = useState(null);

//     // Liste de pictogrammes
//     const symbols = [
//         { id: 1, name: 'Je veux', img: '/images/je_veux.jpg' },
//         { id: 2, name: 'Triste', img: '/images/sad.jpg' },
//         { id: 3, name: 'Manger', img: '/images/food.png' },
//         { id: 4, name: 'Heureux', img: '/images/happy.jpg' },
//         // Ajoute d'autres pictogrammes ici
//     ];

//     useEffect(() => {
//         // Récupérer la liste des voix disponibles et sélectionner une voix française
//         const getVoices = () => {
//             const availableVoices = window.speechSynthesis.getVoices();
//             setVoices(availableVoices);
//             const french = availableVoices.find((voice) => voice.lang.startsWith('fr'));
//             setFrenchVoice(french || null);
//         };

//         // Vérifier si les voix sont déjà chargées ou s'abonner à l'événement si nécessaire
//         if (window.speechSynthesis.getVoices().length > 0) {
//             getVoices();
//         } else {
//             window.speechSynthesis.onvoiceschanged = getVoices;
//         }
//     }, []);

//     const handleSymbolClick = (symbol) => {
//         setSelectedSymbols([...selectedSymbols, symbol.name]);
//         setMessage((prevMessage) => prevMessage + ' ' + symbol.name);
//     };

//     const handleClear = () => {
//         setSelectedSymbols([]);
//         setMessage('');
//     };

//     // Fonction pour lire le texte avec la voix française
//     const handleSpeak = () => {
//         if ('speechSynthesis' in window && frenchVoice) {
//             const utterance = new SpeechSynthesisUtterance(message);
//             utterance.voice = frenchVoice; // Utiliser la voix française sélectionnée
//             utterance.lang = 'fr-FR';      // Définir la langue sur le français
//             window.speechSynthesis.speak(utterance);
//         } else {
//             alert('La synthèse vocale en français n\'est pas disponible.');
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Application de Communication Alternative</h1>
//             <div className="message">{message}</div>
//             <div className="symbols">
//                 {symbols.map((symbol) => (
//                     <div key={symbol.id} className="symbol" onClick={() => handleSymbolClick(symbol)}>
//                         <img src={symbol.img} alt={symbol.name} />
//                         <p>{symbol.name}</p>
//                     </div>
//                 ))}
//             </div>
//             <h2>Message Formé :</h2>
//             {/* <div className="message">{message}</div> */}
//             <div>
//                 <button onClick={handleClear}>Effacer</button>
//                 <button onClick={handleSpeak}>Lire le message</button>
//             </div>
//         </div>
//     );
// }

// export default App;


//-------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faVolumeUp, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';  // Importer les icônes


function App() {
    const [selectedSymbols, setSelectedSymbols] = useState([]);  // Stocker les pictogrammes sélectionnés
    const [message, setMessage] = useState('');
    const [voices, setVoices] = useState([]);
    const [frenchVoice, setFrenchVoice] = useState(null);

    // Liste de pictogrammes
    const [symbols, setSymbols] = useState([
        { id: 1, name: 'Je veux', img: '/images/je_veux.png' },
        { id: 2, name: 'J\'aime', img: '/images/j_aime.png' },
        { id: 3, name: 'J\'ai besoin d\'aide', img: '/images/aide.png' },
        { id: 4, name: 'J\'ai fini', img: '/images/fini.png' },
        { id: 5, name: 'J\'ai envi de dormir', img: '/images/dormir.png' },
        { id: 11, name: 'Je suis fatigué', img: '/images/fatigué.png' },
        { id: 10, name: 'Je suis heureux', img: '/images/heureux.png' },
        { id: 7, name: 'Je suis triste', img: '/images/triste.png' },
        { id: 16, name: 'jouer', img: '/images/jouer.png' },
        { id: 12, name: 'regarder', img: '/images/regarder.png' },
        { id: 8, name: 'manger', img: '/images/manger.png' },
        { id: 13, name: 'aux petits singes', img: '/images/singe.png' },
        { id: 14, name: 'mon téléphone', img: '/images/portable.png' },
        { id: 15, name: 'à la balle', img: '/images/balle.png' },
        { id: 9, name: 'faire pipi', img: '/images/pipi.png' },
        { id: 6, name: 'faire caca', img: '/images/caca.png' },
    ]);

    const [newSymbolName, setNewSymbolName] = useState('');
    const [newSymbolImage, setNewSymbolImage] = useState(null);

    // useEffect(() => {
    //     const getVoices = () => {
    //         const availableVoices = window.speechSynthesis.getVoices();
    //         setVoices(availableVoices);
    //         const french = availableVoices.find((voice) => voice.lang.startsWith('fr'));
    //         setFrenchVoice(french || null);
    //     };

    //     if (window.speechSynthesis.getVoices().length > 0) {
    //         getVoices();
    //     } else {
    //         window.speechSynthesis.onvoiceschanged = getVoices;
    //     }
    // }, []);

    // useEffect(() => {
    //     const getVoices = () => {
    //         const availableVoices = window.speechSynthesis.getVoices();
    //         setVoices(availableVoices);
    //         // Chercher une voix masculine, en français, et potentiellement enfantine
    //         const frenchChildMaleVoice = availableVoices.find((voice) => 
    //             voice.lang.startsWith('fr') && 
    //             voice.name.toLowerCase().includes('child') || voice.name.toLowerCase().includes('garçon')
    //         );
    //         setFrenchVoice(frenchChildMaleVoice || null);
    //     };
    
    //     if (window.speechSynthesis.getVoices().length > 0) {
    //         getVoices();
    //     } else {
    //         window.speechSynthesis.onvoiceschanged = getVoices;
    //     }
    // }, []);

    // useEffect(() => {
    //     const getVoices = () => {
    //         const availableVoices = window.speechSynthesis.getVoices();
    //         console.log("Voix disponibles :", availableVoices);  // Affiche toutes les voix dans la console
    //         setVoices(availableVoices);
    
    //         // Chercher une voix masculine en français
    //         const frenchChildMaleVoice = availableVoices.find((voice) =>
    //             voice.lang.startsWith('fr') && (voice.name.toLowerCase().includes('child') || voice.name.toLowerCase().includes('garçon') || voice.gender === 'male')
    //         );
            
    //         setFrenchVoice(frenchChildMaleVoice || availableVoices.find(voice => voice.lang.startsWith('fr')));  // Choisir une voix par défaut si aucune n'est trouvée
    //     };
    
    //     if (window.speechSynthesis.getVoices().length > 0) {
    //         getVoices();
    //     } else {
    //         window.speechSynthesis.onvoiceschanged = getVoices;
    //     }
    // }, []);

    useEffect(() => {
        const getVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            console.log("Voix disponibles :", availableVoices);  // Affiche toutes les voix dans la console
            setVoices(availableVoices);
    
            // Chercher une voix masculine en français
            const frenchMaleVoice = availableVoices.find((voice) =>
                voice.lang.startsWith('fr') && voice.gender === 'Microsoft Paul - French (France)'
            );
            
            setFrenchVoice(frenchMaleVoice || availableVoices.find(voice => voice.lang.startsWith('fr')));  // Choisir une voix par défaut en français si aucune voix masculine n'est trouvée
        };
    
        if (window.speechSynthesis.getVoices().length > 0) {
            getVoices();
        } else {
            window.speechSynthesis.onvoiceschanged = getVoices;
        }
    }, []);
    
    

    const handleSymbolClick = (symbol) => {
        setSelectedSymbols([...selectedSymbols, symbol]);  // Ajouter l'objet du symbole
        setMessage((prevMessage) => prevMessage + ' ' + symbol.name);
    };

    const handleClear = () => {
        setSelectedSymbols([]);  // Vider la sélection
        setMessage('');
    };

    // Fonction pour lire le texte avec la voix française
    // const handleSpeak = () => {
    //     if ('speechSynthesis' in window && frenchVoice) {
    //         const utterance = new SpeechSynthesisUtterance(message);
    //         utterance.voice = frenchVoice;
    //         utterance.lang = 'fr-FR';
    //         window.speechSynthesis.speak(utterance);
    //     } else {
    //         alert('La synthèse vocale en français n\'est pas disponible.');
    //     }
    // };
    const handleSpeak = () => {
        if ('speechSynthesis' in window && frenchVoice) {
            const utterance = new SpeechSynthesisUtterance(message);
            utterance.voice = frenchVoice;
            utterance.lang = 'fr-FR';
            window.speechSynthesis.speak(utterance);
        } else {
            alert('La synthèse vocale en français n\'est pas disponible.');
        }
    };
   
    
    

     // Fonction pour ajouter un nouveau pictogramme
     const handleAddSymbol = (e) => {
        e.preventDefault();
        if (newSymbolName && newSymbolImage) {
            const newSymbol = {
                id: symbols.length + 1,  // Attribuer un ID unique
                name: newSymbolName,
                img: URL.createObjectURL(newSymbolImage)  // Créer une URL pour l'image
            };
            setSymbols([...symbols, newSymbol]);  // Ajouter le nouveau pictogramme à la liste
            setNewSymbolName('');  // Réinitialiser le formulaire
            setNewSymbolImage(null);
        } else {
            alert('Veuillez entrer un nom et choisir une image pour le pictogramme.');
        }
    };

    // Fonction pour supprimer un pictogramme avec confirmation
    const handleDeleteSymbol = (symbolId) => {
        const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce pictogramme ?');
        if (confirmDelete) {
            const updatedSymbols = symbols.filter((symbol) => symbol.id !== symbolId);
            setSymbols(updatedSymbols);  // Mettre à jour la liste des pictogrammes
        }
    };

    return (
        <div className="App">
            <h1>Je communique</h1>
            {/* <h2>Message Formé :</h2> */}
            <div class="flex">
                <div className="message">{message}</div>
            
                <div class="boutonFlex">
                    <button onClick={handleClear} className="icon-button">
                        <FontAwesomeIcon icon={faTrash} size="2x" /> {/* Icône de corbeille */}
                    </button>
                    <button onClick={handleSpeak} className="icon-button">
                        <FontAwesomeIcon icon={faVolumeUp} size="2x" /> {/* Icône de haut-parleur */}
                    </button>
                </div>
            </div>
            <div className="symbols">
                {symbols.map((symbol) => (
                    <div  key={symbol.id} className="symbol" onClick={() => handleSymbolClick(symbol)}>
                        <img src={symbol.img} alt={symbol.name} />
                        <p>{symbol.name}</p>
                        {/* Bouton de suppression */}
                        {/* <button onClick={() => handleDeleteSymbol(symbol.id)} className="delete-button"> */}
                            {/* <FontAwesomeIcon icon={faTimes} size="1x" /> */}
                        {/* </button> */}
                    </div>
                ))}
            </div>
            {/* <h2>Ajouter un nouveau pictogramme :</h2> */}
            {/* <form onSubmit={handleAddSymbol}> */}
                {/* <input
                    type="text"
                    placeholder="Nom du pictogramme" */}
                    {/* value={newSymbolName}
                    onChange={(e) => setNewSymbolName(e.target.value)}
                    required */}
                {/* /> */}
                {/* <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewSymbolImage(e.target.files[0])}
                    required */}
                {/* /> */}
                {/* <button type="submit" className="icon-button">
                    <FontAwesomeIcon icon={faPlus} size="2x" /> Icône "+" pour ajouter */}
                {/* </button> */}
            {/* </form> */}
        </div>
    );
}

export default App;
