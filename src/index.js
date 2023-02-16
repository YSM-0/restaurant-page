import { initialPageLoad } from "./initial-page-load";
import { contactPageLoader } from "./contact-page-loader";

const home = document.querySelector('.logo')
const contact = document.querySelector('.contact')

initialPageLoad()

home.addEventListener('click', () => {
    initialPageLoad()
})

contact.addEventListener('click', () => {
    contactPageLoader()
})