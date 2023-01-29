import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get(
            "http://localhost:7000/api/user/authcheck",
            {
              headers: {
                access_token: localStorage.getItem("token"),
              },
            }
          );

          if (res.data.user) setIsLogged(true);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };

      getUser();
    }
  }, [token]);

  const addWishList = async (book) => {
    if (!isLogged) return alert("Please login to continue");
    const check = wishList.every((item) => {
      return item._id !== book._id;
    });
    if (check) {
      setWishList([...wishList, { ...book, quantity: 1 }]);
    } else {
      alert("This book is already added to your wishlist");
    }
  };

  return {
    isLogged: [isLogged, setIsLogged],
    wishList: [wishList, setWishList],
    addWishList: addWishList,
  };
}

export default UserAPI;
