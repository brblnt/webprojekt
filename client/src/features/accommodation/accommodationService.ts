import axios from 'axios'
import { toast } from 'react-toastify';


const create = async (accommodationData: any,) => {

  const token = accommodationData.authenticationData.token

  const config = {
    headers: {
      'AuthToken': token, 
      'Content-Type': 'application/json',
    },
  };
  try{
    console.log(accommodationData)
    const response = await axios.post('/hotel-booking/accommodation', JSON.stringify(accommodationData), config);
    toast.success('Accommodation Created!')
    return response.data;
  }catch(error: any){
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during accommodation creation!');
    throw new Error(message);
  }
};

const getaccomm = async (userData: any) => {

  const token = userData.authenticationData.token;

  const authId = userData.authenticationData.id

  const config = {
    headers: {
      'AuthToken': token
    },
  };

  try{
    console.log(userData)
    const response = await axios.get('/hotel-booking/accommodation/' + authId + '/all', config)
    return response.data
  }catch(error: any){
    const message = error.response.data.message || error.message || error.toString();
    console.log(message);
  }

}

const room = async (roomData: any, accommData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try{
    const roomCreate = await axios.post('/hotel-booking/room', JSON.stringify(roomData), config);

  const accommodationId = accommData.accommodation.id
  console.log(accommodationId)

  console.log(roomCreate.data)

  if (roomCreate.data) {

    const previousRooms = accommData.accommodation.rooms.map((room: any) => ({ id: room.id }));
    const newRoom = { id: roomCreate.data.id };

    const accomm = {
      authenticationData: {
        id: accommData.accommodation.authenticationData.id,
      },
      acommodationName: accommData.accommodation.acommodationName,
      rooms: [...previousRooms, newRoom],
    };
    console.log(accomm)
    const response = await axios.put(`/hotel-booking/accommodation/${accommodationId}`, JSON.stringify(accomm), config);
    console.log(response.data)
    toast.success('Room created successfully!');
    return response.data;
  }
  }catch(error: any){
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during room creation!');
    throw new Error(message);
  }

};

// Delete accommodation by ID
const remove = async (accommodation: any) => {

  const accommodationId = accommodation.id
  const token = accommodation.authenticationData.token

  const config = {
    headers: {
      'AuthToken': token,
    },
  }; 

  try {
    const response = await axios.delete(`/hotel-booking/accommodation/${accommodationId}`, config);
    toast.success('Accommodation Deleted! Please refresh the page!');
    return response.data;
  } catch (error: any) {
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during accommodation deletion!');
    throw new Error(message);
  }
};

// Update accommodation by ID
const update = async (accommodation: any) => {

  const token = accommodation.authenticationData.token

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'AuthToken': token,
    },
  };

  try {
    const response = await axios.put(`/hotel-booking/accommodation/${accommodation.id}`, accommodation, config);
    toast.success('Accommodation Updated!');
    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || error.toString();
    toast.error('Error during accommodation update!');
    throw new Error(message);
  }
};

const accommodationService = {
    create,
    getaccomm,
    room,
    remove,
    update
}

export default accommodationService