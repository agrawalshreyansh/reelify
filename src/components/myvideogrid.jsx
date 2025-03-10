import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const MyVideoGrid = () => {
    const username = localStorage.getItem('username')
    
    const navigate = useNavigate()
    
    useEffect(
        () => {
            if (username) {   
                navigate(`/user/${username}/videos`)
            }
        }
    ,[username,navigate])


    if (!username) {
        return (
            <>
            <div className="flex items-center justify-center h-40">
                <h1 className="text-white">Please Login First !</h1>
            </div>
            </>
        )
    }
   

    

}

export default MyVideoGrid