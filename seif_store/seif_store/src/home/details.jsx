import {useEffect, useState } from "react";

function Details(eleId) {
    eleId = JSON.parse(localStorage.details)
    const [Product, setProduct] = useState([])
    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${eleId}`)
    .then((res) => res.json())
    .then((data) => setProduct(data)); 
    },[eleId]);
    let cart = JSON.parse(localStorage.cart);
    let items = JSON.parse(localStorage.items)
    function add(ele) {
        items.push(ele);
        localStorage.items = JSON.stringify(items);
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
        localStorage.cart = JSON.stringify(cart)
    }
    return (
        <div className="details">
            <div className="container">
                <div className="details_head text-center pb-3">
                    <img className="mt-5" src={Product.image} alt="" />
                    <h3 className="fw-bold pt-3">{Product.title}</h3>
                </div>
                <div className="details_body fw-bold">
                    <p className="text-center fs-5">{Product.description}</p>
                    <p className="mb-1 fs-5">Category: <a href="/category" onClick={() => {
                        localStorage.setItem("category", Product.category)
                    }} >{Product.category}</a></p>
                    <p className="mt-1 mb-1 fs-5">Price: <span>{Product.price} $</span></p>
                </div>
                <div className="details_foot d-flex justify-content-between text-align-center">
                    <div>
                        <p className="mb-1 mt-1 fs-5 fw-bold">count: <span> 135 Piece</span></p>
                        <p className="mb-1 mt-1 fs-5 fw-bold">Rate: <span> 3.2 / 5</span></p>
                    </div>
                    <button onClick={() => add(Product)} className="btn">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Details;