import React, {  useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import logo from "../images/shelf.png";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { booksFetch } from "../redux/bookSlice";
import Loading from "../utils/Loading";

function BookDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const handleCart = (book) => {
    dispatch(addToCart(book));
  };

  
  const notify = () => toast("item added to the cart!");

  const bookList = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(booksFetch());
  }, [dispatch]);

  return (
    <div className="mb-6">
      <Header />
      <Navbar />
      <div className="relative max-w-7xl mx-auto pt-5 ">
        {/* *********** */}
        <div>
          {bookList?.map((book) => {
            return (
              params.id === book._id && (
                <div key={book._id} className="flex  space-x-10">
                  <img className="w-1/3" src={book.image} alt="" />
                  <div className="w-1/2">
                    <h2 className=" font-bold uppercase tracking-wider text-3xl text-secondary">
                      {book.name}
                    </h2>
                    <h2 className="font-semibold -tracking-tighter text-grey ">
                      {book.author}
                    </h2>

                    <h2 className="mt-14 w-1/2">{book.description}</h2>
                  </div>
                  <div className=" space-y-12 pt-48 max-w-xl ">
                    {/*  */}

                   

                    <button
                      onClick={() => {
                        handleCart(book._id);
                        notify();
                      }}
                      className=" text-white bg-green px-5 py-2 w-full shadow-md rounded-md font-bold  hover:shadow-xl active:scale-90 transition duration-150"
                    >
                      Get Copy {`${book.price}`}
                    </button>

                    <div className="text-white">hello</div>
                    <Link to="/notfound">
                      <button className=" text-white bg-green px-5 py-2 shadow-md w-full rounded-md font-bold  hover:shadow-xl active:scale-90 transition duration-150">
                        Add to wishList
                      </button>
                    </Link>
                  </div>
                  <div className="text-white">hello</div>
                </div>
              )
            );
          })}
        </div>
        {isLoading && <Loading />}
        {error && <div>Error</div>}
        <img className="absolute -bottom-11 w-full" alt="" src={logo} />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default BookDetails;
