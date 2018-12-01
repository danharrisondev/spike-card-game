((module) => {
    
    module.render = function(props) {
        const friendlyTypeNames = {
            'generator': 'Science Generator',
            'tool': 'Tool',
        };

        return `<div class="card card-${props.type}">
                    <div class="title">${props.name}</div>
                    <div class="image" style="background-image:url('${props.image}')"></div>
                    <div class="type">${friendlyTypeNames[props.type]}</div>
                    <div class="description">${props.description}</div>
                </div>`;
    };

})(window.Card = window.Card || {});