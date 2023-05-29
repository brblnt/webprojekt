import axios from 'axios'
import { toast } from 'react-toastify';

// Register user
const create = async (accommodationData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try{
    console.log(accommodationData)
    const response = await axios.post('/hotel-booking/accommodation', JSON.stringify(accommodationData), config);
    toast.success('Accommodation Created!')
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
  
    return response.data;
  }catch(error: any){
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during accommodation creation!');
    throw new Error(message);
  }

};

const accommodationService = {
    create
}

export default accommodationService