// create map

const map = L.map('mapid').setView([-27.222633, -49.6455874], 15); 

// create and add tilelayer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

// create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

// create and add marker

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove old icon

    marker && map.removeLayer(marker);

    // add new icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})

// add photo input
function addPhotoField() {
    // pegar o container de fotos
    const container = document.querySelector('#images');

    // pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo está vazio
    const input = newFieldContainer.children[0];

    if(input.value =="") {
        return;
    }

    // limpar o campo

    input.value = "";

    // adicionar o clone ao container de #images

    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "";
        return;
    }

    // deletar o campo
    span.parentNode.remove();
}

// change yes to no

function toggleSelect(event) {
    
    // retirar a classe active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    // adicionar classe active ao botão atual
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o input hidden
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;

}