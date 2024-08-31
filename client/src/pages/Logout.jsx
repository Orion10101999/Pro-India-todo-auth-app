import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../redux/userSlice"
import axios from "axios"
import { useEffect } from "react"

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const UserLogout = async()=>{
        try {
            const URL = `/api/logout`
            const response = await axios({
              url : URL,
              withCredentials : true
            })

            
                dispatch(logout())
                navigate("/email")
            
            console.log("current user Details",response)
        } catch (error) {
            console.log("error",error)
        }
      }
    
      useEffect(()=>{
        UserLogout()
      })
    
  return (
    <div></div>
  )
}

export default Logout