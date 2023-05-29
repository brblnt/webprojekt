import axios from 'axios'

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
      const response = await axios.post('/user/login', null, {
        params: {
          userName: userData.userName,
          password: userData.password,
        },
      });
  
      let user = response.data;

      if(user){
        localStorage.setItem('user', JSON.stringify(user))
    }
      console.log(user)
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

//Logout user
const logout = () => {
  localStorage.removeItem('user')
}  

const authService = {
    login,
    logout,
    register
}

export default authService