import userReducer from './reducer/userReducer';
import timerReducer from './reducer/timerReducer';
import folderReduser from './reducer/folderReducer';
import tasksReducer from './reducer/tasksReducer';
import taskPageReducer from './reducer/tasksPageReducer';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer,
        page: taskPageReducer,
        folder: folderReduser,
        timer: timerReducer,
    },
});
