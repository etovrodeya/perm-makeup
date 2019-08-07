import photo1 from "../media/images/photoCert1.jpg"
import photo2 from "../media/images/photoCert2.jpg"
import photo3 from "../media/images/photoCert3.jpg"

const initialState = [
    {id: 1, photo: photo1, alt:"Сертификат соответствия материалов" },
    {id: 2, photo: photo2, alt:"Вебинар по пременентному макияжу. Техника Air Shadow" },
    {id: 3, photo: photo3, alt:"Сертификат квалификации" },
]

export function carouselReducer(state = initialState) {
    return state
}