import logoWhite from '../media/images/logoWhite.svg'
import logoBlack from '../media/images/logoBlack.svg'

export const initialState = {
    name: 'ANASTASIA ALEXEEVA',
    logoWhite: logoWhite,
    logoBlack: logoBlack,
    linkMap: "https://yandex.ru/maps/-/CGubbM4K",
    linkDirect: "https://www.instagram.com/anastasia_alexeeva_permanent",
    linkPhone:"tel:89109999999",
    linkAuthor:"https://vk.com/id67368841",
    alt:"Иконка звонка",
    alt2:"Иконка директа",
}

export function titleReducer(state = initialState) {
    return state
}