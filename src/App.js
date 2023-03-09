import { useEffect } from "react";
import { db } from "./fierbase/config";
import { useDispatch } from "react-redux"
import { HomePage } from "./page/homePage";
import { useAuth } from './store/hooks/auth';
import { LoginPage } from "./page/loginPage";
import { RegisterPage } from "./page/registerPage";
import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from "./page/profilePage";
import { AddFolder } from "./page/addFolderPage";
import { AddTasks } from "./page/addTaskPage";
import { TaskPage } from "./page/taskPage";
import { CalendarPage } from "./page/calendarPage";
import { AllTaskPage } from "./page/allTaskPage";
import { setUser } from "./store/reducer/userReducer";
import { CategoryPage } from "./page/categoryPage";
import { setFolder } from "./store/reducer/folderReducer";
import { setTasks } from "./store/reducer/tasksReducer";
import { setTasksPage } from "./store/reducer/tasksPageReducer";
import { onSnapshot, query, collection, where } from "firebase/firestore";
function App() {
  const { email } = useAuth();
  const dispatch = useDispatch()
  const taskRef = collection(db, "tasks");
  const folderRef = collection(db, "folder");
  useEffect(() => {
    const user = () => {
      dispatch(setUser({
        email: JSON.parse(localStorage.getItem('email')),
        username: JSON.parse(localStorage.getItem('username')),
      }))
    }
    return () => user();
  }, [email])
  useEffect(() => {
    const q = query(folderRef, where("userId", "==", email))
    const dataFolder = onSnapshot(q, (querySnapshot) => {
      let folderArr = [];
      querySnapshot.forEach((doc) => {
        folderArr.push({ ...doc.data(), id: doc.id })
      });
      dispatch(setFolder(folderArr))
    });
    return () => dataFolder();
  }, [email]);

  useEffect(() => {
    const qs = query(taskRef, where("userId", "==", email))
    const dataTasks = onSnapshot(qs, (querySnapshot) => {
      let taskArr = [];
      querySnapshot.forEach((doc) => {
        taskArr.push({ ...doc.data(), id: doc.id })
      });
      dispatch(setTasks(taskArr))
    });
    return () => dataTasks();
  }, [email]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="posts/:lists" element={<TaskPage />} />
        <Route path="/alltasks" element={<AllTaskPage />} />
        <Route path="/addfolder" element={<AddFolder />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/addtasks" element={<AddTasks />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </>
  );
}

export default App;
