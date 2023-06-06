import axios from 'axios'
import { toast } from 'react-toastify';

const create = async(bookData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },}
  try{

    const response = await axios.post('/hotel-booking/booking', JSON.stringify(bookData), config )
    toast.success('Booking created!');
    return response.data
  }catch(error: any){
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during booking deletion!');
    throw new Error(message);
  }
};

const getbook = async (bookUser: any) => {

  const token = bookUser.authenticationData.token
  const bookUserId = bookUser.id

  const config = {
    headers: {
      'AuthToken': token
    },}

  try{
    console.log(bookUserId)
    const response = await axios.get('/hotel-booking/booking/application-user/' + bookUserId, config)
    return response.data
  }catch(error: any){
    const message = error.response.data.message || error.message || error.toString();
    console.log(message);
  }

}

// Delete booking by ID
const remove = async (bookingId: string) => {
  try {
    const response = await axios.delete(`/hotel-booking/booking/${bookingId}`);
    toast.success('Booking Deleted!');
    return response.data;
  } catch (error: any) {
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during booking deletion!');
    throw new Error(message);
  }
};

// Update booking by ID
const update = async (booking: any) => {
  try {
    const response = await axios.put(`/hotel-booking/booking/${booking.id}`, booking);
    toast.success('Booking Updated!');
    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || error.toString();
    toast.error('Error during booking update!');
    throw new Error(message);
  }
};

const bookingService = {
    remove,
    update,
    create,
    getbook
}

export default bookingService