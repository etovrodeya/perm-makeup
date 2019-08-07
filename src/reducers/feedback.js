import photo1 from "../media/images/photoFeedback1.png"
import photo2 from "../media/images/photoFeedback2.png"
import photo3 from "../media/images/photoFeedback3.png"

const initialState = [
    {id: 1, heading: "Очень довольна результатом!", text: "Алена, 24 года, перманентный макияж глаз", photo: photo1, alt:"Перманентный макияж Смоленк отзывы фото 1"},
    {id: 2, heading: "Мастер работает быстро и аккуратно", text: "Вероника, 22 лет, перманентный макияж губ", photo: photo3, alt:"Перманентный макияж Смоленк отзывы фото 2" },
    {id: 3, heading: "Профессиональный мастер", text: "Карина, 26 лет, перманентный макияж бровей", photo: photo2, alt:"Перманентный макияж Смоленк отзывы фото 3" },
]

export function feedbackReducer(state = initialState) {
    return state
}