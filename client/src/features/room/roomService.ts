import axios from 'axios'
import { toast } from 'react-toastify';

// Delete room by ID
const remove = async (roomId: string, accommodation: any) => {

  const token = accommodation.authenticationData.token

  const config = {
    headers: {
      'AuthToken': token,
    },
  }; 

  try {
    const response = await axios.delete(`/hotel-booking/room/${roomId}`, config);
    toast.success('Room Deleted!');
    return response.data;
  } catch (error: any) {
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during room deletion!');
    throw new Error(message);
  }
};


// Update room by ID
const update = async (room: any, accommodation: any) => {

  const token = accommodation.authenticationData.token

  console.log(room)

  const config = {
    headers: {
      'AuthToken': token,
      'Content-Type': 'application/json',
    },
  }; 

  try {
    const response = await axios.put(`/hotel-booking/room/${room.id}`, room, config);
    toast.success('Room Updated!');
    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || error.toString();
    toast.error('Error during room update!');
    throw new Error(message);
  }
};

const roomService = {
    remove,
    update
}

export default roomService