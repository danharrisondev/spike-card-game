function card(type, name, description, image) {
    const friendlyTypeNames = {
        'generator': 'Science Generator',
        'tool': 'Tool'
    };
    
    return {
        type,
        name,
        description,
        html: function() {
            return `<div class="card card-${type}">
                        <div class="title">${name}</div>
                        <div class="image-container">
                            <img src="${image}" />
                        </div>
                        <div class="type">${friendlyTypeNames[type]}</div>
                        <div class="description">${description}</div>
                    </div>`;
        }
    }
}

function generator(name, description, image) {
    return card('generator', name, description, image);
}

function tool(name, description, image) {
    return card('tool', name, description, image);
}

const cards = [
    generator('Space Shuttle', 'Basic ship built by USA to get to the ISS.', 'https://www.nasa.gov/sites/default/files/thumbnails/image/shuttle_launch.jpg'),
    tool('Electromagnetic Pulse Bomb', 'Disables the target player\'s science generation for 3 turns.', 'https://www.extremetech.com/wp-content/uploads/2013/11/emp-blast-640x353.jpg'),
];

const cardContainer = document.getElementById('cardContainer');

cards.forEach(element => {
    var elementToRender = document.createElement('div');
    elementToRender.innerHTML = element.html();
    cardContainer.appendChild(elementToRender);
});