function Signup() {
    return (
        <div className="login">
            <div className="container d-flex align-items-center justify-content-center py-4">
                <div className="form-container p-4">
                    <p className="title text-center fs-2 fw-bold">Sign UP</p>
                    <form className="form">
                        <div className="input-group">
                            <label className="fw-bold">Username</label>
                            <input className="w-100 p-1" type="text" />
                        </div>
                        <div className="input-group">
                            <label className="fw-bold">Email</label>
                            <input className="w-100 p-1" type="email"/>
                        </div>
                        <div className="input-group">
                            <label className="fw-bold">Address</label>
                            <input className="w-100 p-1" type="text" />
                        </div>
                        <div className="input-group">
                            <label className="fw-bold" >Password</label>
                            <input className="w-100 p-1 " type="password"/>
                        </div>
                        <div className="terms d-flex align-items-center gap-2 my-2 ">
                            <input className="" type="checkbox"/>
                            <label className="fw-bold" >I agree to the <a href="/terms">Terms and Conditions</a></label>
                        </div>
                        <button className="sign w-100 py-1 fw-bold">Sign Up</button>
                    </form>
                    <div className="social-message d-flex align-items-center pt-1">
                        <div className="line"></div>
                        <p className="message pt-2 px-2">Sign Up with social accounts</p>
                        <div className="line"></div>
                    </div>
                    <div className="social-icons m-1 p-1">
                        <button aria-label="Log in with Google" className="icon px-3 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        <button aria-label="Log in with Twitter" className="icon px-3 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="100" height="100">
                            <path d="M279.14 288l14.22-92.66h-88.91V141.09c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.13 0-121.09 44.38-121.09 124.72V195.3H22.89V288h81.38v224h100.2V288z"/>
                        </svg>
                        </button>
                        <button aria-label="Log in with GitHub" className="icon px-3 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="signup text-center">You already have an account 
                        <a rel="noopener noreferrer" href="/login" className=" ms-1">Log In </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Signup;