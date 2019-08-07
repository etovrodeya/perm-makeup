import photo1 from "../media/images/thumb_upWhite.svg"
import photo2 from "../media/images/instagram-seeklogo.com.svg"
import photo3 from "../media/images/clockWhite.svg"

const initialState = [
    {id: 1, text: "Записаться ко мне просто, достаточно написать в Direct @anastasia_alexeeva_permanent или позвонить по телефону", photo: photo2, alt: "Иконка 2" },
    {id: 2, text: "Процедура занимает немного времени, а результат будет вас радовать до двух лет", photo: photo3, alt: "Иконка 3" },
    {id: 3, text: "Наличие медицинского образования, квалификации специалиста по перманентному макияжу и качественных материалов делает процедуру безопасной", photo: photo1, alt: "Иконка 4" },
]

export function certificatesReducer(state = initialState) {
    return state
}