const contactPageLoader = function () {
    const main = document.querySelector('.main')

    const form = document.createElement('form')
    const fieldset = document.createElement('fieldset')
    const labelFirst = document.createElement('label')
    const labelSecond = document.createElement('label')
    const inputFirst = document.createElement('input')
    const inputSecond = document.createElement('input')
    const textArea = document.createElement('textArea')
    const button = document.createElement('button')

    form.classList.add('form')

    main.innerHTML = ''

    button.textContent = 'ENVOYER'
    labelFirst.textContent = 'Prénom'
    labelSecond.textContent = 'Nom'

    main.appendChild(form)
    form.appendChild(fieldset)
    form.appendChild(textArea)
    form.appendChild(button)
    fieldset.appendChild(labelFirst)
    fieldset.appendChild(inputFirst)
    fieldset.appendChild(labelSecond)
    fieldset.appendChild(inputSecond)
}

export { contactPageLoader }