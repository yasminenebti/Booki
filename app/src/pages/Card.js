import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getCard } from "../redux/cartSlice";
import Header from "./Header";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function Card() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartEmpty = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="cart-container py-8 px-16 ">
        <h2 className=" font-medium text-center">Cart</h2>
        { cartEmpty ? (
          <div className=" mt-8 py-4  text-center">
            <p className="text-secondary text-3xl tracking-wider">Your cart is empty </p>

            <Link to="/">
              <div className="text-grey tracking-wider pt-5 hover:underline">Explore books</div>
            </Link>
          </div>
        ) : (
          <>
            <div className="titles grid items-center grid-cols-3 gap-2 mt-8 mb-4 font-semibold">
              <div className="uppercase pl-2 ">Book</div>
              <div className="uppercase  justify-self-center">Quantity</div>
              <div className="uppercase pr-2 justify-self-end">Total</div>
            </div>

            <div className="cart-items ">
              {cart.books?.map((item) => (
                <div
                  className="cart-item border-t-2 border-primary grid items-center grid-cols-3 gap-2"
                  key={item.bookId}
                >
                  <div className="cart-book flex ">
                    <img
                      className="rounded-xl w-28 max-w-full mr-4 "
                      src={item.image}
                      alt=""
                    />
                    <div>
                      <div className="  md:font-semibold">
                        {item.name}
                      </div>
                      <div className="  text-green">{item.author}</div>

                      <button className="  md:outline-none md:font-semibold  md:mt-3  md:hover:text-red">
                        remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-quantity flex justify-self-center w-32 max-w-full   rounded-md border-2  border-primary">
                    <button className=" py-3 px-6">-</button>
                    <div className=" py-3">{item.quantity}</div>
                    <button
                      className=" py-3 px-6"
                      onClick={() => dispatch(addToCart(item.bookId))}
                    >
                      +
                    </button>
                  </div>
                  <div className=" justify-self-end pr-2 font-bold">
                    ${item.price}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex pt-8 justify-between items-start border-secondary border-t-2">
              <button className=" w-32 text-grey max-w-full h-10 rounded-md font-semibold hover:bg-red hover:text-white tracking-wide border-primary border-2 ">
                Clear Cart
              </button>
              <div>
                <div className="w-64 max-w-full">
                  <div className="font-semibold pb-4">Total</div>
                  <button className="w-full h-10 rounded-md bg-secondary text-white mb-6">
                    Checkout
                  </button>
                </div>
                <Link className="flex text-grey hover:underline gap-2" to="/">
                  <ArrowLeftIcon className="h-7 w-7 " />
                  <div className="text-lg">Continue Exploring books</div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
