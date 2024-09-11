import Axios from "axios";
import {
  ENCRIPTDECRYPT_FAIL,
  ENCRIPTDECRYPT_REQUEST,
  ENCRIPTDECRYPT_SUCCESS,
} from "../constants/EncrIptDecrypt";

const BaseUrl = import.meta.env.VITE_BASE_URL;

export const EncriptDecrypt = (Parameter, Type) => async (dispatch, getState) => {
    dispatch({ type: ENCRIPTDECRYPT_REQUEST, payload: { Parameter, Type } });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await Axios.post(
        `${BaseUrl}/User/EncriptDecrypt`,
        { Parameter, Type },
        config
      );
      dispatch({ type: ENCRIPTDECRYPT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ENCRIPTDECRYPT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
