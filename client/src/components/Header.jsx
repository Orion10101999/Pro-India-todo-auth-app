
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = useSelector(state => state.user)
    
    return (
        <header className="flex justify-between items-center bg-blue-600 text-white p-4">
            <div className="flex justify-center items-center space-x-4">
            <h1 className="text-xl">Pro India</h1>
            <h2><Link to={"/"}>Home</Link></h2>

            </div>
            <div className="flex space-x-4">
                {user.name ? <>
                <h2><Link to={"/logout"}><span className='hover:font-bold'>Logout</span></Link></h2>
                <h2><Link to={"/profile"}>{user.name}</Link></h2>
                
                </>:<>
                
                <h2><Link to={"/register"}>Register</Link></h2>
                <h2><Link to={"/login"}>LogIn</Link></h2>
            
                </>}
            </div>
        </header>

    );
};

export default Header;
