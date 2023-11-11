;
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { usersMock } from "/@/usersMock";
import { setAuth, setUserInfo } from "/@/store/reducers/accountInfoReducer";
import { useForm } from "react-hook-form";

type useAuthFormType = {
  email: string;
  password: string;
}
const useAuth = () => {
  const { register, handleSubmit } = useForm<useAuthFormType>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: useAuthFormType) => {
    const checkedUser = usersMock.filter(
      (item) => item.email === data.email && item.password === data.password
    );
    if (checkedUser[0]) {
      dispatch(setAuth("auth"));
      dispatch(setUserInfo(checkedUser[0]));
      localStorage.setItem("@token", checkedUser[0].token);
      navigate("/");
    }
  };
  return {register, handleSubmit, onSubmit}
};

export { useAuth };
