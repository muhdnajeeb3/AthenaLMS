import { ENCRIPTDECRYPT_FAIL, ENCRIPTDECRYPT_REQUEST, ENCRIPTDECRYPT_SUCCESS } from "../constants/EncrIptDecrypt";

  
  export const encrIptDecryptReducer = (state = {}, action) => {
    switch (action.type) {
      case ENCRIPTDECRYPT_REQUEST:
        return { loading: true };
      case ENCRIPTDECRYPT_SUCCESS:
        return { loading: false, encrIptDecrypt: action.payload };
      case ENCRIPTDECRYPT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  