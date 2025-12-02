import React from "react";
import { useForm } from "react-hook-form";
import "./SellProduct.css";
import useAuthInfo from "../../Hooks/useAuthInfo";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-toastify";

const SellProductFrom = () => {
  const { user } = useAuthInfo();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  console.log(errors);
  const axiosPost = useAxios();

  /* handle form submit */
  const onSubmit = async (data) => {
    try {
      console.log("after upload", data);

      /* image bb host functionality start */
      const toyImg = data.pictureURL[0];
      const fromData = new FormData();
      fromData.append("image", toyImg);

      const imageBB_Host_Link = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_imageBB_host
      }`;

      const imageRes = await axios.post(imageBB_Host_Link, fromData);
      const imageURL = imageRes.data.data.url;
      /* image bb host functionality end */

      /* create a object data for backend */
      const finalProductData = {
        sellerName: data.sellerName,
        sellerEmail: user?.email,
        toyName: data.toyName,
        price: data.price,
        rating: data.rating,
        subCategory: data.subCategory,
        availableQuantity: data.availableQuantity,
        description: data.description,
        pictureURL: imageURL
      };

      // const backendRes = await axios.post("/toys-upload", finalProductData);
      axiosPost.post("/toys-upload", finalProductData)
      .then(res => {
        console.log("from submitted", res.data)
        toast.success("From submitted successfully");
        reset();
      }) 
      .catch(err => {
        console.log(err.message);        
      })
    } 
    catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="card bg-base-100  shrink-0 shadow-2xl w-[650px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card-body">
        <fieldset className="fieldset space-y-2">
          {/* seller info */}
          <section className="flex gap-5">
            {/* name */}
            <div className="flex flex-col w-full">
              <label className="label">Seller name</label>
              <input
                type="text"
                className="input"
                placeholder="seller name"
                defaultValue={user?.displayName}
                {...register("sellerName", { required: true })}
              />
            </div>
            {/* email */}
            <div className="flex flex-col w-full">
              <label className="label">Seller email</label>
              <input
                type="email"
                className="input"
                placeholder="seller email"
                defaultValue={user?.email}
                {...register("sellerEmail", { required: true })}
                disabled
              />
            </div>
          </section>

          {/* product info */}
          <section className="flex gap-5">
            {/* photo */}
            <div className="flex flex-col w-full">
              <label className="block mb-1 font-medium text-gray-700">
                give your tos picture
              </label>
              <input
                type="file"
                className="file-input w-full"
                placeholder="Your Photo"
                {...register("pictureURL", { required: true })}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="label">Toy name</label>
              <input
                type="text"
                className="input"
                placeholder="toy's name"
                {...register("toyName", { required: true })}
              />
            </div>
          </section>

          {/* price & rating */}
          <section className="flex gap-5">
            {/* price */}
            <div className="flex flex-col w-full">
              <label className="label">Price</label>
              <input
                type="text"
                className="input text-[0.8rem]"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>

            {/* rating */}
            <div className="flex flex-col w-full">
              <label className="label">Rating</label>
              <input
                type="text"
                className="input text-[0.8rem]"
                placeholder="Rating"
                {...register("rating", { required: true })}
              />
            </div>

            {/* sub category */}
            <div className="flex flex-col w-full">
              <label className="label">Sub Category</label>
              <input
                type="text"
                className="input text-[0.8rem]"
                placeholder="Sub Category"
                {...register("subCategory", { required: true })}
              />
            </div>

            {/* availableQuantity */}
            <div className="flex flex-col w-full">
              <label className="label">Available of product</label>
              <input
                type="text"
                className="input text-[0.8rem]"
                placeholder="Available Quantity"
                {...register("availableQuantity", { required: true })}
              />
            </div>
          </section>

          {/* description */}
          <section className="flex flex-col">
            {" "}
            <label className="label">Description</label>{" "}
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered w-full min-h-[120px] resize-none p-3 rounded-md border-gray-300 outline-0"
              {...register("description", { required: true })}
            ></textarea>{" "}
          </section>
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </div>
    </form>
  );
};

export default SellProductFrom;
