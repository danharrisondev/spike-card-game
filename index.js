const AllCards = [
    { type: 'generator', name: 'Space Shuttle', description: 'Basic ship built by USA to get to the ISS.', image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/shuttle_launch.jpg' },
    { type: 'generator', name: 'International Space Station', description: 'Big station in the sky. Sometimes visible from Earth.', image: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA1OS83Nzkvb3JpZ2luYWwvc3BhY2Vfc3RhdGlvbl9vdmVyX2VhcnRoLmpwZw==' },
    
    { type: 'tool', name: 'Electromagnetic Pulse Bomb', description: 'Disables the target player\'s science generation for 3 turns.', image: 'https://www.extremetech.com/wp-content/uploads/2013/11/emp-blast-640x353.jpg' },
    { type: 'tool', name: 'Solar Storm', description: 'A solar storm disables all player\'s research technologies for X turns.', image: 'https://cdn.images.express.co.uk/img/dynamic/151/590x/Solar-storm-1026400.jpg?r=1538663877518' },
    { type: 'tool', name: 'Meteor', description: 'Destroys all Earth-bound cards on the field of play.', image: 'https://thenypost.files.wordpress.com/2018/08/180806-air-force-quiet-after-asteroid-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1' },
    { type: 'tool', name: 'Probe', description: 'Explore the top 5 cards of your deck and choose 2 to draw.', image: 'http://static4.uk.businessinsider.com/image/5bf5d86fbde70f0250420b6f-480/nasa-mars-insight-robotic-probe-landing-mission-animation-lockheed-martin-00004.png' },
];

const cardContainer = document.getElementById('cardContainer');
const query = document.getElementById('query');

function render(q = '') {
    cardContainer.innerHTML = AllCards
        .filter(c => c.name.toLowerCase().includes(q.toLowerCase()))
        .map(c => Card.render(c)).join('');
}

query.addEventListener('keyup', function() {
    render(query.value);
});

render();