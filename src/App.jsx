import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import Signup from "./page/Auth/Signup";
import LoginPage from "./page/Auth/LoginPage";
import AddArticles from "./page/AddArticles";
import SingleArticle from "./page/SingleArticle";
import Articles from "./page/Articles";
import Contact from "./page/Contact";
import About from "./page/About";
import Homepage from "./page/Homepage";
import Homelayout from "./layout/Homelayout";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./slices/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebase.config";



const auth = getAuth(app);

export default function App() {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.userState);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Auth state changed");
      dispatch(login({ user }));
    } else {
      dispatch(logout());
    }
  });

  console.log(user)

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="articles" element={<Articles />} />
          <Route path="article/:id" element={<SingleArticle />} />
          <Route
            path="add-article"
            element={status ? <AddArticles /> : <Navigate to={"/login"} />}
          />
        </Route>
        <Route
          path="/login"
          element={status ? <Navigate to={"/"} /> : <LoginPage />}
        />

        <Route
          path="/signup"
          element={status ? <Navigate to={"/"} /> : <Signup/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}