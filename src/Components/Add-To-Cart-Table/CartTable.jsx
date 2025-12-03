import React, { useEffect, useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import useAxios from "../Hooks/useAxios";
import useAuthInfo from "../Hooks/useAuthInfo";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CartTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const { user } = useAuthInfo();

  useEffect(() => {
    axios.get(`/add-to-cart/${user.email}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [axios, user]);

  // handle delete
  const handleDelete = (productId) => {
    if (!user?.email) return;

    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/add-to-cart/${user.email}/${productId}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Item removed from your cart.",
              icon: "success",
            });
            
            setData((prev) =>
              prev.filter((item) => item.productId !== productId)
            );
          })
          .catch((err) => {
            console.log(err.message);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the item.",
              icon: "error",
            });
          });
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Toy name</th>
            <th>my email</th>
            <th>Product Id</th>
            <th>Price</th>
            <th>Pay</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.pictureURL} alt={item.toyName} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.toyName}</td>
                <td>{item.userEmail}</td>
                <td>{item.productId}</td>
                <td>{item.price}$</td>
                <td>
                  <Link to={`/dashboard/payment/${item._id}`} className="btn btn-sm bg-green-400">Pay</Link>
                </td>
                <td>
                  <button
                    className="btn btn-sm bg-red-500"
                    onClick={() => handleDelete(item.productId)}
                  >
                    <BsTrash3Fill />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
