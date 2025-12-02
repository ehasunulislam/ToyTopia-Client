import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import useAxios from "../Hooks/useAxios";
import Loading from "../Loading/Loading";
import useAuthInfo from "../Hooks/useAuthInfo";
import { IoStar } from "react-icons/io5";
import { assets } from "../../assets/assets";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const SellTable = () => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const { user } = useAuthInfo();

  useEffect(() => {
    axios
      .get(`/toys-by-email?email=${user?.email}`)
      .then((res) => {
        setShowData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axios, user]);

  if (loading) {
    return <Loading></Loading>;
  }

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/toys/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // Remove from UI
              setShowData(showData.filter((item) => item._id !== id));

              Swal.fire({
                title: "Deleted!",
                text: "Your toy has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  // when not have any data
  if (showData.length === 0) {
    return (
      <div className="text-center py-12 text-xl text-gray-500 font-semibold">
        You have nothing to sell
        <div className="w-40 mx-auto">
          <Lottie animationData={assets.sad} loop={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>CreatedAt</th>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {showData.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.pictureURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.toyName}</td>
                <td>{item.price} $</td>
                <th className="flex gap-2 items-center justify-center">
                  <IoStar className="text-yellow-400" /> {item.rating}
                </th>
                <th>{item.createdAt}</th>
                <th className="flex gap-3">
                  <button
                    className="btn btn-sm text-red-500"
                    onClick={() => handleDelete(item._id)}
                  >
                    <BsFillTrash3Fill />
                  </button>
                  <button className="btn btn-sm text-green-500">
                    <AiFillEdit />
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SellTable;
