import { menuPageLoader } from "./menu-page-loader";

const initialPageLoad = function () {
    const content = document.querySelector('#content')

    const main = document.createElement('div')
    const text = document.createElement('p')
    const imgDiv = document.createElement('div')
    const menuButton = document.createElement('button')

    content.innerHTML = ''

    text.classList.add('text')
    menuButton.classList.add('menu-button')
    imgDiv.classList.add('image-div')
    main.classList.add('main')

    text.textContent = `Le meilleur Restaurant du monde.`
    menuButton.textContent = 'MENU'

    content.appendChild(main)
    main.appendChild(text)
    main.appendChild(imgDiv)
    imgDiv.appendChild(menuButton)

    menuButton.addEventListener('click', () => {
        menuPageLoader()
    })
}

export { initialPageLoad }