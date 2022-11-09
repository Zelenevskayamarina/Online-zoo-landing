const range = () => {

    const usersList = [{
            id: 1,
            imageUser: 'images/dist/testimonials/user1.png',
            name: 'Michael John',
            location: 'Local Austria • Today',
            infoText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
        },
        {
            id: 2,
            imageUser: 'images/dist/testimonials/user2.png',
            name: 'Oskar Samborsky',
            location: 'Local Austria • Today',
            infoText: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
        },
        {
            id: 3,
            imageUser: 'images/dist/testimonials/user3.png',
            name: 'Fredericka Michelin',
            location: 'Local Austria • Today',
            infoText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to',
        },
        {
            id: 4,
            imageUser: 'images/dist/testimonials/user4.png',
            name: 'Mila Riksha',
            location: 'Local Austria • Today',
            infoText: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf',
        },
        {
            id: 5,
            imageUser: 'images/dist/testimonials/user1.png',
            name: 'Tomas John',
            location: 'Local Austria • Today',
            infoText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
        },
        {
            id: 6,
            imageUser: 'images/dist/testimonials/user2.png',
            name: 'Rena Hinsar',
            location: 'Local Austria • Today',
            infoText: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
        },
        {
            id: 7,
            imageUser: 'images/dist/testimonials/user1.png',
            name: 'Nika Braun',
            location: 'Local Austria • Today',
            infoText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to',
        },
        {
            id: 8,
            imageUser: 'images/dist/testimonials/user1.png',
            name: 'Barbara Tohin',
            location: 'Local Austria • Today',
            infoText: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf',
        },
        {
            id: 9,
            imageUser: 'images/dist/testimonials/user1.png',
            name: 'Andrea Nisal',
            location: 'Local Austria • Today',
            infoText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
        },
        {
            id: 10,
            imageUser: 'images/dist/testimonials/user2.png',
            name: 'Peter Loten',
            location: 'Local Austria • Today',
            infoText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
        },
        {
            id: 11,
            imageUser: 'images/dist/testimonials/user2.png',
            name: 'Lola Adams',
            location: 'Local Austria • Today',
            infoText: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
        },
    ]

    const usersContainer = document.querySelector('.testimonials__row');

    const shuffleItemsUser = (list) => {
        let usersListShuffle = list.sort(() => Math.random() - 0.5);
        return usersListShuffle;
    }

    let usersListShuffle = shuffleItemsUser(usersList)

    const getRandomItemsUser = (listShuffle) => {
        let numberItemsUser = listShuffle.length;
        let randomItemNumberUser = Math.floor(Math.random() * numberItemsUser);
        return listShuffle[randomItemNumberUser];
    }

    let randomItemUser = getRandomItemsUser(usersListShuffle)

    function renderUsersContainer(listShuffle) {
        usersContainer.textContent = '';
        for (let i = 0; i < listShuffle.length; i++) {
            usersContainer.appendChild(createUserItem(listShuffle[i]));
            // console.log(listShuffle[i])
        }
        let itemDeleted = listShuffle.shift();
        listShuffle.push(itemDeleted);
        // console.log(listShuffle);

        return listShuffle
    }

    function createUserItem(randomItem) {
        const item = document.createElement('div');
        item.classList.add('testimonials__item');
        item.setAttribute('id', randomItem.id);

        const user = document.createElement('div');
        user.classList.add('testimonials__user');

        const picImg = document.createElement('img');
        picImg.classList.add('testimonials__user-pic');
        picImg.src = randomItem.imageUser;
        picImg.alt = `${randomItem.name}`;

        const userInfoFirst = document.createElement('div');
        userInfoFirst.classList.add('testimonials__user-info');

        const userInfoName = document.createElement('p');
        userInfoName.classList.add('testimonials__user-info-name');
        userInfoName.textContent = `${randomItem.name}`;

        const userInfoLocation = document.createElement('p');
        userInfoLocation.classList.add('testimonials__user-info-location');
        userInfoLocation.textContent = `${randomItem.location}`;

        userInfoFirst.appendChild(userInfoName);
        userInfoFirst.appendChild(userInfoLocation);

        user.appendChild(picImg);
        user.appendChild(userInfoFirst);

        const userInfoSecond = document.createElement('div');
        userInfoSecond.classList.add('testimonials__user-info');

        const userInfoText = document.createElement('p');
        userInfoText.classList.add('testimonials__info-text');
        userInfoText.classList.add('pop-up__info-text');
        userInfoText.textContent = `${randomItem.infoText}`;

        userInfoSecond.appendChild(userInfoText);

        item.appendChild(user);
        item.appendChild(userInfoSecond);

        return item;
    }
    renderUsersContainer(usersListShuffle)

    const inputRange = document.querySelector('.testimonials__box-input');

    let sum = 0;

    const cards = document.querySelectorAll('.testimonials__item');

    const widthCard = parseInt(window.getComputedStyle(cards[0]).maxWidth);
    const fullLengthCard = widthCard * cards.length + (33 * cards.length);
    usersContainer.style.width = `${fullLengthCard-1}px`;

    function rangeValue(usersListShuffle) {
        let newValue = inputRange.value;
        sum = usersListShuffle * newValue;
        usersContainer.style.left = '-' + sum + 'px';
    }

    
    if (window.innerWidth > 1540) {
        inputRange.addEventListener("input", () => {
            rangeValue(297);
        });        
    } else if (window.innerWidth <= 1540 && window.innerWidth > 1186) {
        inputRange.addEventListener("input", () => {
            rangeValue(322);
        });
    }
    else if (window.innerWidth <= 1186 && window.innerWidth > 1001) {
        inputRange.addEventListener("input", () => {
            rangeValue(322);
        });
    } else if (window.innerWidth <= 1001 && window.innerWidth > 969) {
        inputRange.addEventListener("input", () => {
            rangeValue(322);
        });
    } else if (window.innerWidth <= 969) {
        usersContainer.style.maxWidth = `900px`;
        usersContainer.style.width = `100%`;
    }

    window.addEventListener(`resize`, () => {
        if (window.innerWidth > 1540) {
            inputRange.addEventListener("input", () => {
                rangeValue(297);
            });
        } else if (window.innerWidth <= 1540 && window.innerWidth > 1186) {
            inputRange.addEventListener("input", () => {
                rangeValue(322);
            });
        } else if (window.innerWidth <= 1186 && window.innerWidth > 1001) {
            inputRange.addEventListener("input", () => {
                rangeValue(322);
            });
        } else if (window.innerWidth <= 1001 && window.innerWidth > 969) {
            inputRange.addEventListener("input", () => {
                rangeValue(322);
            });
        } else if (window.innerWidth <= 969) {
            usersContainer.style.maxWidth = `900px`;
            usersContainer.style.width = `100%`;
        }
    });

    


    const popUpOverlay = document.querySelector('.pop-up__overlay');
    const popUp = document.getElementById('myPopUp');
    const popUpCloseIcon = document.querySelector('.pop-up__close');
    let popUpItem = document.querySelector('.pop-up__item');

    function togglePopUp() {
        if (popUp.style.display === 'block') {
            popUp.style.display = 'none';
        } else {
            popUp.style.display = 'block';
        }
    }

    cards.forEach(item => {
        item.addEventListener('click', () => {
            togglePopUp();
            popUpItem.innerHTML = item.innerHTML;
            console.log(popUpItem)
        });
    });

    popUpOverlay.addEventListener('click', () => {
        popUp.style.display = 'none';
    });
    popUpCloseIcon.addEventListener('click', () => {
        popUp.style.display = 'none';
    });

   }


// document.addEventListener("DOMContentLoaded", () => {
//     range();
// });