import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../feature/userSlice'
import findserviceslice from '../feature/newSlice'

export default configureStore({
    reducer:{
        user:userReducer,
        like:findserviceslice
    }
})