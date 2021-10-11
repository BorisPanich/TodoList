import {store} from '../app/store'
import {FieldErrorType} from '../api/types'
import {rootReducer} from '../app/reducers'


// redux common types
export type RootReducerType = typeof rootReducer
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
export type ThunkError = { rejectValue: { errors: Array<string>, fieldsErrors?: Array<FieldErrorType> } }
