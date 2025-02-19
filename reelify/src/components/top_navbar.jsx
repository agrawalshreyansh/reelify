import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate()

  const loginStatus = () => {
      navigate('/login')
  }

  const goHome = () => {
    navigate('/')
  }



  return (
    <div className="flex items-center justify-center h-[8vh]">
      <div>
        <img src="../assets/menu.png" className="h-5 w-6 ml-8"/>
      </div>
      <div className="flex mr-auto items-center justify-center cursor-pointer" onClick={() => goHome()}>
        <img src="../assets/logo.png" alt="Logo" className="h-10 w-11 ml-4" />
        <p className="text-primary text-2xl">Reelify</p>
      </div>
      <div>
        <input 
            placeholder="Search" 
            type="text" 
            className="text-primary border-2 border-secondary h-10 w-[36vw] rounded-3xl p-3 focus:outline-none" />
      </div>
      <div className="flex ml-auto items-center justify-center">
            <button className="text-secondary border-highlight mr-5 cursor-pointer flex items-center" onClick={() => loginStatus()}>
                <span className="mr-2 text-xl text-primary">Sign in</span>
                <img className="h-8 w-8 mr-8" src="../assets/user.png"/>
            </button>
      </div>
    </div>
  );
}

export default Navbar;
