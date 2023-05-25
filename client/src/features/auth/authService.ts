import axios from 'axios'

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
    logout
}

export default authService