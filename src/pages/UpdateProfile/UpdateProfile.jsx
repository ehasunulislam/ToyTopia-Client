import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateProfileFunction } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();

    updateProfileFunction(name, photo)
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/auth/myProfile");
      })
      .catch((err) => {
        toast.error("Failed to update: " + err.message);
      });
  };

  return (
    <div className="my-6 flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <form onSubmit={handleUpdate}>
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            defaultValue={user?.displayName || ""}
            placeholder="Enter name"
            required
          />

          {/* Photo URL */}
          <label className="label mt-3">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            defaultValue={user?.photoURL || ""}
            placeholder="Enter photo URL"
            required
          />

          {/* Email (read-only) */}
          <label className="label mt-3">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full bg-gray-100 cursor-not-allowed"
            defaultValue={user?.email || ""}
            readOnly
          />

          <button className="btn btn-primary w-full mt-4">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
