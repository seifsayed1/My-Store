import { useContext } from "react";
import { ProductsContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

function Products() {
    const value = useContext(ProductsContext) ;
    let items = [];
    let cart;
    if (localStorage.cart !=null) {
        items = JSON.parse(localStorage.items);
        cart = JSON.parse(localStorage.cart);
    } else {
        cart = [];
    }
    function add(ele) {
        items.push(ele)
        let idCount = items.reduce((acc, obj) => {
            acc[obj.id] = (acc[obj.id] || 0) + 1;
            return acc;
        }, {});
        cart = items.filter((obj, index, old) => 
            old.findIndex(ele => ele.id === obj.id) === index
        ).map(obj => ({
            ...obj,
            number: idCount[obj.id]
        }));
        localStorage.setItem("items", JSON.stringify(items))
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    function scroll_top () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    window.onscroll = function() {
        let button = document.getElementById('scrollToTop');
        if (window.scrollY > 0) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };
    return (
        <div className="products py-3">
            <div className="cart_icon z-1">
                <a className="ms-3 d-flex align-items-center text-decoration-none" href="/cart"> <FontAwesomeIcon id="cart_icon" className="cart fs-2" icon={faCartShopping}/></a>
            </div>
            <div className="container-xl">
                <div className="categories">
                    <div className="dropdown">
                        <a className="drop_category dropdown-toggle py-1 px-1 fw-bold"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="category" onClick={()=> {
                                localStorage.setItem("category","men's%20clothing")
                            }} className="dropdown-item">Men_Clothes</a></li>
                            <li><a href="category" onClick={()=> {
                                localStorage.setItem("category","women's%20clothing")
                            }} className="dropdown-item">Women_Clothes</a></li>
                            <li><a href="category" onClick={()=> {
                                localStorage.setItem("category","jewelery")
                            }} className="dropdown-item">Jewelry</a></li>
                            <li><a href="category" onClick={()=> {
                                localStorage.setItem("category","electronics")  
                            }} className="dropdown-item">Electronics</a></li>
                        </ul>
                    </div>
                </div>
                <div className="items mt-4">
                    <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 row-cols-md-2 ">
                        {value.map((ele) => {
                            return (
                                <div key={ele.id} className="col">
                                    <div className="card m-1">
                                        <img src={ele.image} className="card-img-top mt-2 m-auto " alt={ele.title}/>
                                        <div className="card-body">
                                            <div className="title">
                                                <h5 className="card-title fw-bold">{ele.title}</h5>
                                            </div>
                                            <p className="card-text fw-bold fs-5"><span>Rate:</span> {ele.rating.rate} / 5</p>
                                            <p className="card-text fw-bold fs-5"><span>Price:</span> {ele.price} $</p>
                                            <div className="card_btns d-flex align-items-center justify-content-between">
                                                <a onClick={() => {
                                                    localStorage.setItem("details", JSON.stringify(ele.id))                                                    
                                                }} href="details" className="btn">Details</a>
                                                <button onClick={() => add(ele)} className="cartBtn py-1 px-2 d-flex align-items-center justify-content-between gap-2 ">
                                                <svg className="cart" fill="#F1C40F" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="100%" height="100%" fill="black" />
                                                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                                                </svg>
                                                        ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div onClick={scroll_top} id="scrollToTop" className="scroll">
                <FontAwesomeIcon className="arrow py-1 px-2 rounded-circle fs-4 z-1 " icon={faArrowUpLong} />   
            </div>
        </div>
    )
}
export default Products;