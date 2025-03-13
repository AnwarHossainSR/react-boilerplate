// src/hooks/useAuth.js
import { useDispatch, useSelector } from "react-redux";
import { login, logout, register, reset } from "../features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const loginUser = async (userData) => {
    await dispatch(login(userData));
  };

  const registerUser = async (userData) => {
    await dispatch(register(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  const resetAuthState = () => {
    dispatch(reset());
  };

  return {
    user,
    isLoading,
    isSuccess,
    isError,
    message,
    loginUser,
    registerUser,
    logoutUser,
    resetAuthState,
  };
};

export default useAuth;
