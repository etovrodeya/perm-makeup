import { combineReducers } from 'redux'
import { titleReducer } from './title'
import { leadFrameReducer } from './leadFrame'
import { aboutProccesReducer } from './aboutProcces'
import { aboutMeReducer } from './aboutMe'
import { carouselReducer } from './carousel'
import { certificatesReducer } from './certificates'
import { priceReducer } from './price'
import { feedbackReducer } from './feedback'


export const rootReducer = combineReducers ({
    title: titleReducer,
    leadFrame: leadFrameReducer,
    aboutProcces: aboutProccesReducer,
    aboutMe: aboutMeReducer,
    carousel: carouselReducer,
    certificates: certificatesReducer,
    price: priceReducer,
    feedback: feedbackReducer,
})