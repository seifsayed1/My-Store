import shopImage from '../assets/shop.jpg';

function Welcome() {
    return (
        <div className="welcome text-center">
            <div className="container-xl d-flex justify-content-around align-items-center" style={{backgroundImage:`url(${shopImage})`}}>
                <div className="mt-5 text z-1 ">
                    <h2>Welcome To <span className='fw-bold'>SEIF</span> Store</h2>
                    <p className='fw-bold'>You will find everything you need here,<br/>get your own style.</p>
                </div>
            </div>
        </div>
    )
}
export default Welcome;