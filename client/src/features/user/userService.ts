import axios from 'axios'
import { toast } from 'react-toastify';

// Delete user by ID
const remove = async (userId: string) => {
  try {
    const response = await axios.delete(`/hotel-booking/application-user/${userId}`);
    toast.success('User Deleted!');
    return response.data;
  } catch (error: any) {
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during user deletion!');
    throw new Error(message);
  }
};

// Update user by ID
const update = async (user: any) => {
  try {
    const response = await axios.put(`/hotel-booking/application-user/${user.id}`, user);
    toast.success('User Updated!');
    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || error.toString();
    toast.error('Error during user update!');
    throw new Error(message);
  }
};

const userService = {
    remove,
    update
}

export default userService