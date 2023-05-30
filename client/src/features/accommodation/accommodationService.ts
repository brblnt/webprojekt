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

const getaccomm = async (authId: any) => {

  try{
    console.log(authId)
    const response = await axios.get('/hotel-booking/accommodation/' + authId + '/all')
    return response.data
  }catch(error: any){
    const message = error.response.data.message || error.message || error.toString();
    console.log(message);
  }

}


// Register user
const room = async (roomData: any, accommData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const roomCreate = await axios.post('/hotel-booking/room', JSON.stringify(roomData), config);

  if (roomCreate.data) {
    const accomm = {
      authenticationData: {
        id: accommData.authenticationData.id,
      },
      acommodationName: accommData.acommodationName,
      room: [
        {
          id: roomCreate.data.id
        }
      ]
    };

    await axios.post('/hotel-booking/accommodation/' + accommData.id, JSON.stringify(accomm), config);

    /*const updatedUser = {
      ...accomm,
      ...response.data,
    };*/

    /*localStorage.setItem('accommodation', JSON.stringify(response.data));
    console.log(updatedUser)
    return updatedUser;*/
  }
};

const accommodationService = {
    create,
    getaccomm,
    room,
}

export default accommodationService