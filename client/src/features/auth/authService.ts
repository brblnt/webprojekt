import axios from 'axios'
import { toast } from 'react-toastify';

// Register user
const register = async (userData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const registering = await axios.post('/user/register', JSON.stringify(userData), config);

  if (registering.data) {
    const user = {
      authenticationData: {
        id: registering.data.id,
      },
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
    };

    const response = await axios.post('/hotel-booking/application-user', JSON.stringify(user), config);

    const updatedUser = {
      ...user,
      ...response.data,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    console.log(updatedUser)
    return updatedUser;
  }
};



//Login user
const login = async (userData: any) => {
    try {
      const logging = await axios.post('/user/login', null, {
        params: {
          userName: userData.userName,
          password: userData.password,
        },
      });

      if(logging.data) {
        const logId = logging.data.id;
        const response = await axios.get(`/hotel-booking/application-user/${logId}/all`);

        if(response.data){
          let user = response.data;
          localStorage.setItem('user', JSON.stringify(user))
          console.log(user)
          return user;
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

//Logout user
const logout = () => {
  localStorage.removeItem('user')
} 

// Update authData by ID
const update = async (auth: any) => {
  try {
    const response = await axios.put(`/hotel-booking/authentication/${auth.id}`, auth);
    toast.success('User Updated!');
    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || error.toString();
    toast.error('Error during user update!');
    throw new Error(message);
  }
};

const remove = async (authId: string) => {
  try {
    const response = await axios.delete(`/hotel-booking/authentication/${authId}`);
    toast.success('Authentication Deleted!');
    return response.data;
  } catch (error: any) {
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during authentication deletion!');
    throw new Error(message);
  }
};

const uploadFile = async (file: FormData) => {
  try {
    const response = await axios.post(`/hotel-booking/images/upload`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    toast.success('File Uploaded');
    return response.data;
  } catch (error: any) {
    const message = error.response.data.message || error.message || error.toString();
    toast.error('Error during file upload!');
    throw new Error(message);
  }
}

const authService = {
    login,
    logout,
    register,
    update,
    remove,
    uploadFile
}

export default authService