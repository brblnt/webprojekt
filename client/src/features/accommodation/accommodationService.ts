import axios from 'axios'
import { toast } from 'react-toastify';
// Register user
const create = async (accommodationData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  console.log(accommodationData)
  const response = await axios.post('/hotel-booking/accommodation', JSON.stringify(accommodationData), config);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  toast.success("Accommodation Created")
  return response.data;
};

const accommodationService = {
    create
}

export default accommodationService