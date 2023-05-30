import axios from 'axios'
import { toast } from 'react-toastify';

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
    update
}

export default bookingService