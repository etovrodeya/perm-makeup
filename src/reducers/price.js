const initialState = [
    {id: 1, heading: "ПЕРМАНЕНТНЫЙ МАКИЯЖ ГЛАЗ", text: "МЕЖРЕСНИЧКА С РАСТУШЁВКОЙ", price: "2000P"},
    {id: 2, heading: "ПЕРМАНЕНТНЫЙ МАКИЯЖ БРОВЕЙ", text: "ПУДРОВОЕ НАПЫЛЕНИЕ", price: "3000P"},
    {id: 3, heading: "ПЕРМАНЕНТНЫЙ МАКИЯЖ ГУБ", text: "АКВАРЕЛЬНАЯ ТЕХНИКА КОНТУРНАЯ С РАСТУШЁВКОЙ", price: "3000P"},
    {id: 4, heading: "АРХИТЕКТУРА БРОВЕЙ", text: "МОДЕЛИРОВАНИЕ, КОРРЕКЦИЯ ПИНЦЕТ/НИТЬ, ОКРАШИВАНИЕ", price: "500Р"},
    {id: 5, heading: "УКЛАДКА БРОВЕЙ", text: "ДОЛГОВРЕМЕННАЯ", price: "500P"},
    {id: 6, heading: "УКЛАДКА БРОВЕЙ", text: "ВКЛЮЧАЯ КОРРЕКЦИЮ И ОКРАШИВАНИЕ", price: "900P"},
]

export function priceReducer(state = initialState) {
    return state
}