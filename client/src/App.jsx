import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <>
    <Toaster/>
    <Header/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}