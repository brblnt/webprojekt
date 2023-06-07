import axios from "axios";
import { toast } from "react-toastify";

// Register user
const register = async (userData: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const registering = await axios.post(
      "/user/register",
      JSON.stringify(userData),
      config
    );

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

      console.log(registering.data);
      console.log(registering.data.token);

      const token = registering.data.token;

      const authToken = {
        headers: {
          AuthToken: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "/hotel-booking/application-user",
        JSON.stringify(user),
        authToken
      );

      const updatedUser = {
        ...user,
        ...response.data,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      console.log(updatedUser);
      return updatedUser;
    }
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || error.toString();
    toast.error("Wrong credentials!");
    throw new Error(message);
  }
};

//Login user
const login = async (userData: any) => {
  try {
    const logging = await axios.post("/user/login", null, {
      params: {
        userName: userData.userName,
        password: userData.password,
      },
    });

    if (logging.data) {
      const token = logging.data.token;

      const config = {
        headers: {
          AuthToken: token,
        },
      };

      const logId = logging.data.id;
      const response = await axios.get(
        `/hotel-booking/application-user/${logId}/all`,
        config
      );

      if (response.data) {
        let user = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        return user;
      }
    }
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || error.toString();
    toast.error("Wrong credentials!");
    throw new Error(message);
  }
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

// Update authData by ID
const update = async (auth: any) => {
  const token = auth.token;

  const config = {
    headers: {
      AuthToken: token,
    },
  };

  try {
    const response = await axios.put(
      `/hotel-booking/authentication/${auth.id}`,
      auth,
      config
    );
    toast.success(
      "User Updated! Please log in again with your new credentials!"
    );
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || error.toString();
    toast.error("Error during user update!");
    throw new Error(message);
  }
};

const remove = async (authId: string) => {
  try {
    const response = await axios.delete(
      `/hotel-booking/authentication/${authId}`
    );
    toast.success("Authentication Deleted!");
    return response.data;
  } catch (error: any) {
    const message =
      error.response.data.message || error.message || error.toString();
    toast.error("Error during authentication deletion!");
    throw new Error(message);
  }
};

const uploadFile = async (file: FormData) => {
  try {
    const response = await axios.post(`/hotel-booking/images/upload`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
        "AuthToken": file.get('token')?.toString(),
      },
    });
    toast.success("File Uploaded");
    return response.data;
  } catch (error: any) {
    const message =
      error.response.data.message || error.message || error.toString();
    toast.error("Error during file upload!");
    throw new Error(message);
  }
};

const authService = {
  login,
  logout,
  register,
  update,
  remove,
  uploadFile,
};

export default authService;
