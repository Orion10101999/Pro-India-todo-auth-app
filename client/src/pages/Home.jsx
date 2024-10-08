import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { logout, setUser } from "../redux/userSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import AddTodo from "../components/AddTodo"

import RegisterPage from "./RegisterPage"

const Home = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(user.name);
  
  const fetchUserDetails = async()=>{
    try {
        const URL = `/api/user-details`
        const response = await axios({
          url : URL,
          withCredentials : true
        })

        
        dispatch(setUser(response.data.data))

        if(response.data.data.logout){
            dispatch(logout())
            navigate("/email")
        }
        console.log("current user Details",response)
    } catch (error) {
        console.log("error",error)
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  })

  return (
    <div>
      {
      user ? 
        <div className="flex justify-center items-center overflow-hidden mx-5">

      <AddTodo/>
        </div>
        
      
    : <RegisterPage/>
      
      }
      </div>
  )
}

export default Home
