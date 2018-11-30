

function generatorCard(name, description, image) {
    return {
        name,
        description,
        html: function() {
            return `<div class="card card-generator">
                        <div class="title">${name}</div>
                        <div class="image-container">
                            <img src="${image}" />
                        </div>
                        <div class="type">Science Generator</div>
                        <div class="description">${description}</div>
                    </div>`;
        }
    }
}

function toolCard(name, description, image) {
    return {
        name,
        description,
        html: function() {
            return `<div class="card card-tool">
                        <div class="title">${name}</div>
                        <div class="image-container">
                            <img src="${image}" />
                        </div>
                        <div class="type">Tool</div>
                        <div class="description">${description}</div>
                    </div>`;
        }
    };
}

const cards = [
    generatorCard('Space Shuttle', 'Basic ship built by USA to get to the ISS.', 'https://www.nasa.gov/sites/default/files/thumbnails/image/shuttle_launch.jpg'),
    toolCard('Electromagnetic Pulse Bomb', 'Disables the target player\'s science generation for 3 turns.', 'https://www.extremetech.com/wp-content/uploads/2013/11/emp-blast-640x353.jpg'),
];

const cardContainer = document.getElementById('cardContainer');

cards.forEach(element => {
    var elementToRender = document.createElement('div');
    elementToRender.innerHTML = element.html();
    cardContainer.appendChild(elementToRender);
});