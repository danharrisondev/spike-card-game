const cards = [
    { type: 'generator', name: 'Space Shuttle', description: 'Basic ship built by USA to get to the ISS.', image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/shuttle_launch.jpg' },
    { type: 'tool', name: 'Electromagnetic Pulse Bomb', description: 'Disables the target player\'s science generation for 3 turns.', image: 'https://www.extremetech.com/wp-content/uploads/2013/11/emp-blast-640x353.jpg' },
];

const cardContainer = document.getElementById('cardContainer');

cardContainer.innerHTML = cards.map(card => Card.render(card)).join('');