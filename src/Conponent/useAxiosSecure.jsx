import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthData } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthData);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptors", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOutUser().then(() => {
            navigate("/login");
          });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
