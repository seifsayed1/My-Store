import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    let moon = faMoon;
    if (localStorage.mood === "dark") {
        dark()
    } else {
        light()
    }
    function dark() {
        localStorage.setItem("mood", "dark")
        document.documentElement.style.setProperty('--main-color', '#F5F5EB');
        document.documentElement.style.setProperty('--hover-color', '#0F0F0F');
        moon = faMoon
    }
    function light() {
        localStorage.setItem("mood", "light");
        localStorage.setItem("mood", "light");
        document.documentElement.style.setProperty('--main-color', '#0F0F0F');
        document.documentElement.style.setProperty('--hover-color', '#F5F5EB');
        moon = faSun; 
    }
    function change() {
        let mood = localStorage.mood;
        if (mood === "dark") {
            light()
            location.reload()
        } else {
            dark()
            location.reload()
        }
    }
    return (
        <>
            <div className='nav'>
                <div className="container py-1 d-flex justify-content-around align-items-center">
                    <h2 className='fw-bold'><a className='d-inline-block fs-3 text-decoration-none' href="/">SEIF</a></h2>
                    <div className="sections">
                        <a className='text-decoration-none fs-5 ms-5' href="/">Home</a>
                        <a className='text-decoration-none fs-5 ms-5' href="/cart">Cart</a>
                        <a className='text-decoration-none fs-5 ms-5' href="/about">About_US</a>
                        <a className='text-decoration-none fs-5 ms-5' href="/contact">Contact</a>
                    </div>
                    <div className='nav_end d-flex align-items-center'>
                        <a className='text-decoration-none me-4 px-2 py-1 rounded-4' href="/login">Login</a>
                        <FontAwesomeIcon onClick={(() => change())} id='icon' className='fs-2 icon' icon={moon} />
                    </div>
                    <div className="dropdown">
                        <a className="btn " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon className='toggle fs-3' icon={faBars} />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className='text-decoration-none fs-5' href="/">Home</a></li>
                            <li><a className='text-decoration-none fs-5' href="/cart">Cart</a></li>
                            <li><a className='text-decoration-none fs-5' href="/about">About_US</a></li>
                            <li><a className='text-decoration-none fs-5' href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;