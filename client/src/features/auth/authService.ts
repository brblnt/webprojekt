import axios from 'axios'

// Register user
const register = async (userData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post('/user/register', JSON.stringify(userData), config);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
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
      console.log(user)
      return user;
    } catch (error) {
      // Handle error
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