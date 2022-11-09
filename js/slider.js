const petsList = [{
        id: 1,
        imagePet: 'images/dist/pets/pets-giant-pandas.jpg',
        name: 'giant Pandas',
        location: 'Native to Southwest China',
        imageFood: 'images/dist/pets/banana-bamboo-icon.svg',
    },
    {
        id: 2,
        imagePet: 'images/dist/pets/pets-eagles.jpg',
        name: 'Eagles',
        location: 'Native to South America',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 3,
        imagePet: 'images/dist/pets/pets-gorillas.jpg',
        name: 'Gorillas',
        location: 'Native to Congo',
        imageFood: 'images/dist/pets/banana-bamboo-icon.svg',
    },
    {
        id: 4,
        imagePet: 'images/dist/pets/pets-two-toed-sloth.jpg',
        name: 'Two-toed Sloth',
        location: 'Mesoamerica, South America',
        imageFood: 'images/dist/pets/banana-bamboo-icon.svg',
    },
    {
        id: 5,
        imagePet: 'images/dist/pets/pets-cheetahs.jpg',
        name: 'cheetahs',
        location: 'Native to Africa',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 6,
        imagePet: 'images/dist/pets/pets-penguins.jpg',
        name: 'Penguins',
        location: 'Native to Antarctica',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 7,
        imagePet: 'images/dist/pets/pets-alligators.jpg',
        name: 'Alligators',
        location: 'Native to Southeastern U. S.',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 8,
        imagePet: 'images/dist/pets/pets-bear.webp',
        name: 'Bear',
        location: 'Native to Central Europe',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 9,
        imagePet: 'images/dist/pets/pets-leon.webp',
        name: 'Leon',
        location: 'Native to Africa',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 10,
        imagePet: 'images/dist/pets/pets-elephant.webp',
        name: 'Elephant',
        location: 'Native to South America',
        imageFood: 'images/dist/pets/banana-bamboo-icon.svg',
    },
    {
        id: 11,
        imagePet: 'images/dist/pets/pets-wolf.webp',
        name: 'Wolf',
        location: 'Native to Central Europe',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 12,
        imagePet: 'images/dist/pets/pets-fox.webp',
        name: 'Fox',
        location: 'Native to Central Europe',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 13,
        imagePet: 'images/dist/pets/pets-deer.webp',
        name: 'Deer',
        location: 'Native to Southeastern U. S.',
        imageFood: 'images/dist/pets/banana-bamboo-icon.svg',
    },
    {
        id: 14,
        imagePet: 'images/dist/pets/pets-rhinoceros.webp',
        name: 'Rhinoceros',
        location: 'Native to Africa',
        imageFood: 'images/dist/pets/banana-bamboo-icon.svg',
    },
    {
        id: 15,
        imagePet: 'images/dist/pets/pets-tiger.webp',
        name: 'Tiger',
        location: 'Native to South Asia',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
    {
        id: 16,
        imagePet: 'images/dist/pets/pets-lynx.webp',
        name: 'Lynx',
        location: 'Native to North America',
        imageFood: 'images/dist/pets/meet-fish-icon.svg',
    },
]

// const petsContainer = document.querySelector('.pets__slider');
const petsContainer = document.querySelector('.pets__row');
const slideNext = document.querySelector('.pets__slider-btn_next');
const slidePrev = document.querySelector('.pets__slider-btn_prev');

const shuffleItems = (list) => {
    let petsListShuffle = list.sort(() => Math.random() - 0.5);
    return petsListShuffle;
}

let petsListShuffle = shuffleItems(petsList)
// console.log(petsListShuffle);
// console.log(...petsListShuffle);


const getRandomItems = (listShuffle) => {
    let numberItems = listShuffle.length;
    let randomItemNumber = Math.floor(Math.random() * numberItems);
    return listShuffle[randomItemNumber];
}

let randomItem = getRandomItems(petsListShuffle)
// console.log('randomItem');
// console.log(randomItem.imagePet);

function renderPetsContainer(listShuffle) {
    petsContainer.textContent = '';
    for (let i = 0; i < listShuffle.length; i++) {
        petsContainer.appendChild(createPetItem(listShuffle[i]));
        // console.log(listShuffle[i])
    }
    let itemDeleted = listShuffle.shift();
    listShuffle.push(itemDeleted);
    // console.log(listShuffle);

    return listShuffle.sort(() => Math.random() - 0.5);
}

function renderPrevPetsContainer(listShuffle) {
    petsContainer.textContent = '';
    for (let i = 0; i < listShuffle.length; i++) {
        petsContainer.appendChild(createPetItem(listShuffle[i]));
        // console.log(listShuffle[i])
    }
    let itemDeleted = listShuffle.pop();
    listShuffle.unshift(itemDeleted);
    // console.log(listShuffle);
}

function createPetItem(randomItem) {
    const item = document.createElement('div');
    item.classList.add('pets__item');
    item.setAttribute('id', randomItem.id);

    const pic = document.createElement('div');
    pic.classList.add('pets__pic');
    const picImg = document.createElement('img');
    picImg.classList.add('pets__pic-img');
    picImg.src = randomItem.imagePet;
    picImg.alt = `${randomItem.name}`;
    pic.appendChild(picImg);

    const desc = document.createElement('div');
    desc.classList.add('pets__desc');

    const infoFirst = document.createElement('div');
    infoFirst.classList.add('pets__info');
    const title = document.createElement('p');
    title.classList.add('pets__info-title');
    title.textContent = `${randomItem.name}`;
    const text = document.createElement('p');
    text.classList.add('pets__info-text');
    text.textContent = `${randomItem.location}`;
    infoFirst.appendChild(title);
    infoFirst.appendChild(text);

    const infoSecond = document.createElement('div');
    infoSecond.classList.add('pets__info');
    const icon = document.createElement('img');
    icon.classList.add('pets__info-icon');
    icon.src = randomItem.imageFood;
    icon.alt = `food`;
    infoSecond.appendChild(icon);

    desc.appendChild(infoFirst);
    desc.appendChild(infoSecond);

    item.appendChild(pic);
    item.appendChild(desc);

    return item;
}

document.addEventListener("DOMContentLoaded", () => {
    renderPetsContainer(petsListShuffle);
});


function getSlideNext() {
    for (let i = 0; i < petsListShuffle.length; i += 3) {
        renderPetsContainer(petsListShuffle);
    }
}

function getSlidePrev() {
    for (let i = petsListShuffle.length - 1; i >= 0; i -= 3) {
        renderPrevPetsContainer(petsListShuffle);
    }
}


slidePrev.addEventListener('click', () => {
    getSlidePrev()
    slidePrev.disabled = true;
    setTimeout(function () {
        slidePrev.disabled = false;
    }, 2000);

});

slideNext.addEventListener('click', () => {
    getSlideNext()
    slideNext.disabled = true;
    setTimeout(function () {
        slideNext.disabled = false;
    }, 2000);
    
});




