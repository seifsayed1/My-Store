import about from "../src/assets/about.png"
import who from "../src/assets/who.png"

function About() {
    return (
        <div className="about">
            <div className="about_us px-5 d-flex justify-content-between ">
                <div className="text m-auto">
                    <h1 className="fw-bold text-center pb-3">About Us</h1>
                    <p className="fs-4 ">Welcome to <span className="fw-bold fs-3">SEIF</span> store! We are dedicated to providing you with a unique shopping experience by offering a diverse range of high-quality products that meet your every need.</p>
                </div>
                <img className="w-100" src={about} alt="" />
            </div>
            <div className="who px-5 d-flex justify-content-between align-items-center gap-5 py-4">
                <img src={who} alt="" />
                <div className="text m-auto">
                    <h1 className="fw-bold text-center pb-3">Who We Are</h1>
                    <p className="fs-4"><span className="fw-bold fs-3">SEIF</span> store is your one-stop shop for the latest electronics, trendy fashion, and elegant jewelry. We were founded with a vision to become the go-to destination for customers seeking quality and value in one place.</p>
                </div>
            </div>
            <div className="choose py-4 px-5">
                <div className="text">
                    <h1 className="fw-bold text-center pt-2 pb-3">Why Choose Us ?</h1>
                    <ul className=" fs-5 pt-2">
                        <li><span>Wide Selection</span> : We offer an extensive range of electronics, clothing, and jewelry to suit every style and need.</li>
                        <li><span>Guaranteed Quality</span> : Every product we sell is carefully selected to meet the highest quality standards.</li>
                        <li><span>Competitive Prices</span> : Get the best value for your money with our affordable pricing.</li>
                        <li><span>Easy Shopping Experience</span> : Enjoy a user-friendly platform with secure payment options and fast delivery.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default About;