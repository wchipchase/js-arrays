


const dinosaurs = [
    {
        dinoType: 't-rex',
    },
    {
        dinoType: 'brontasaurus',
    },
    {
        dinoType: 'velociraptor',
    }
];

// loop over dinosaurs
//build up a dom string
// print the domstring to the dom

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++) {
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;

    }
    printToDom('dino-barn', domString);
    
};

const initializer = () => {
    buildDinosaurs();
};

// const printToDom = (divId, textToPrint) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += textToPrint;
// }

initializer();

