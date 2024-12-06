import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons"
import empty_cart from "../src/assets/empty_cart.png"

function Cart() {
    if (JSON.parse(localStorage.cart).length === 0) {
        return (
            <div className="empty_cart text-center">
                <div className="container">
                    <img src={empty_cart} alt="" />
                    <h3 className="fw-bold fs-1 mb-4">Your Cart Is Empty</h3>
                    <a href="/"><button className="shop_btn px-5 py-1 overflow-hidden fw-bold position-relative"> Shop now</button></a>
                </div>
            </div>
        )
    } else {
        let cart = JSON.parse(localStorage.cart)  
        let cart_count = JSON.parse(localStorage.cart_count)  
        let items = JSON.parse(localStorage.items)

        let total = cart.map((ele) => {
            return (ele.price)*(ele.number)
        }).reduce((acc, curr) => {
            return parseFloat((acc + curr).toFixed(1))
        })
        function remove(index, eleId) {
            items = items.filter((ele) => {
                return ele.id != eleId
            })
            localStorage.items = JSON.stringify(items)
            cart.splice(index, 1);
            localStorage.cart = JSON.stringify(cart); 
            cart_count = items.length
            localStorage.cart_count = JSON.stringify(cart_count); 
            location.reload();
        }
        function increase(ele) {
            ++ele.number;
            ++cart_count;
            localStorage.cart = JSON.stringify(cart); 
            localStorage.cart_count = JSON.stringify(cart_count); 
            location.reload()
        }
        function decrease(ele) {
            if (ele.number == 1) {
                remove(cart.indexOf(ele));
                location.reload();
            } else {
                --ele.number;
                --cart_count;
                localStorage.cart = JSON.stringify(cart); 
                localStorage.cart_count = JSON.stringify(cart_count); 
                location.reload()
            }
        }
        function deleteAll() {
            items.splice(0, items.length)
            localStorage.items = JSON.stringify(items)
            cart.splice(0, cart.length)
            localStorage.cart = JSON.stringify(cart)
            cart_count = 0;
            localStorage.cart_count = JSON.stringify(cart_count)
            location.reload() 
        }
        return(
            <div className="cart py-4">
                <div className="container">
                <button type="button" className="btn delete_all fw-bold mb-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Delete All
                </button>
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content floating_area">
                        <div className="modal-header ">
                            <h1 className=" waring fw-bold modal-title fs-3" id="exampleModalLabel">Waring</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body waring_text fw-bold fs-5">
                            Are you sure you want to delete the cart ? 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary cancel_btn" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={()=>deleteAll()} type="button" className="btn delete_all">Delete All</button>
                        </div>
                    </div>
                </div>
                </div>
                    <table className="m-auto w-100">
                        <thead className="fw-bold">
                            <tr>
                                <td className="p-2 text-center fw-bold fs-5">Product</td>
                                <td className="p-2 text-center fw-bold fs-5">Title</td>
                                <td className="p-2 text-center fw-bold fs-5">Count</td>
                                <td className="p-2 text-center fw-bold fs-5">Price</td>
                                <td className="p-2 text-center fw-bold fs-5">Total</td>
                                <td className="p-2 text-center fw-bold fs-5"></td>
                                <td className="p-2 text-center fw-bold fs-5"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((ele) => {
                                    return (
                                        <tr key={ele.id}>
                                            <td className="p-2 text-center"><img src={ele.image} alt="" /></td>
                                            <td className="p-2 text-center">{ele.title}</td>
                                            <td className="p-2 text-center">{ele.number}</td>
                                            <td className="p-2 text-center">{ele.price} $</td>
                                            <td className="p-2 text-center">{parseFloat(((ele.price)*(ele.number)).toFixed(1))} $</td>
                                            <td className="p-2 text-center"> 
                                                <FontAwesomeIcon onClick={() => decrease(ele)} className="btns p-1 mx-1 rounded-circle " icon={faMinus} />  
                                                <FontAwesomeIcon onClick={() => increase(ele)} className="btns add p-1 mx-1 rounded-circle" icon={faPlus} />
                                            </td>   
                                            <td className="p-2 text-center"><button onClick={() => remove(cart.indexOf(ele), ele.id) } className="delete p-1">Delete</button></td>
                                        </tr>
                                        )
                                    })}
                        </tbody>
                        <tfoot> 
                                <tr>
                                    <td colSpan={6} className="total p-2 text-center fw-bold fs-5">Total: <span>{total}</span> $</td>
                                </tr>
                            </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
export default Cart;