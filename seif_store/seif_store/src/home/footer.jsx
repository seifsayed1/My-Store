import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"

function Footer() {
    return (
        <>
            <div className="footer text-center p-3 ">
                <div className="container">
                    <h2 className="fw-bold mb-3 ">SEIF store</h2>
                    <p className="mb-4 fw-bold" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit corrupti quaerat quae aspernatur rerum cumque perspiciatis maxime mollitia culpa aliquam saepe corporis inventore, deserunt voluptatum eaque et est aliquid id.</p>
                    <div className="social mb-4">
                        <a className="facebook mx-4" href="https://www.facebook.com/seif.sayed.98478" target="_blank"> <FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="linkedin mx-4" href="https://www.linkedin.com/in/seif-el-sayed-a8452a31a/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} />  </a>
                        <a className="github mx-4" href="https://github.com/seifsayed1" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <div className="phone fw-bold"><FontAwesomeIcon className="mx-2" icon={faPhone} />  01123445678</div>
                </div>
            </div>
            <div className="end_footer py-2 fw-bold text-center">
                <div> Made By <a className="d-inline-block fw-bold fs-5 text-decoration-none" href="https://www.linkedin.com/in/seif-el-sayed-a8452a31a/" target="_blank">SEIF</a></div>
            </div>
        </>
    )
}
export default Footer;