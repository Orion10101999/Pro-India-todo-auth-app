import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoClose } from 'react-icons/io5';
import uploadFile from '../helpers/uploadFile';
import toast from 'react-hot-toast';

const Profile = () => {
  const [data, setData] = useState({
    name: '',
    profile_pic: '',
  });
  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch the user details to populate the form initially
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('/api/user-details');
      const { name, profile_pic } = response.data.data;
      setData({ name, profile_pic });
      setUploadPhoto({ name: profile_pic }); // Initialize with current profile pic if available
    } catch (error) {
      console.error('Failed to fetch user details:', error);
      setError('Failed to fetch user details.');
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadResponse = await uploadFile(file);
      setUploadPhoto(file);
      setData((prev) => ({
        ...prev,
        profile_pic: uploadResponse?.url,
      }));
    }
  };

  const handleClearUploadPhoto = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setUploadPhoto(null);
    setData((prev) => ({
      ...prev,
      profile_pic: '',
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/update-user', data);
      setMessage(response.data.message);
      setError('');
      toast.success(response.data.message);
    } catch (error) {
      console.error('Failed to update profile:', error);
      setError('Failed to update profile.');
      setMessage('');
      toast.error(error?.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="mt-5 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="grid gap-4 mt-5" onSubmit={handleUpdate}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="bg-slate-100 px-2 py-1 focus:outline-primary"
            value={data.name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="profile_pic">
            Photo:
            <div
              className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer"
            >
              <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1">
                {uploadPhoto?.name ? uploadPhoto?.name : "Upload profile photo"}
              </p>
              {uploadPhoto?.name && (
                <button className="text-lg ml-2 hover:text-red-600" onClick={handleClearUploadPhoto}>
                  <IoClose />
                </button>
              )}
            </div>
          </label>
          <input
            type="file"
            id="profile_pic"
            name="profile_pic"
            className="bg-slate-100 px-2 py-1 focus:outline-primary hidden"
            onChange={handleUploadPhoto}
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-lg py-1 px-4 rounded hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-relaxed"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
