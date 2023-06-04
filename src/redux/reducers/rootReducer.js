import { combineReducers } from 'redux';
import ToDoListReducer from './ToDoListReducer'
import BaiTapReducer from './BaiTapReducer';
import FakeBookReducer from './FakeBookReducer';
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer';
import BaiTapCuoiKhoaReducer from './BaiTapCuoiKhoaReducer';
export const rootReducer = combineReducers({
    ToDoListReducer,
    BaiTapReducer,
    FakeBookReducer,
    BaiTapGameBauCuaReducer,
    BaiTapCuoiKhoaReducer
})