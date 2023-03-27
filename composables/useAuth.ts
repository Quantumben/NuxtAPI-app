import axios from "axios";
export const useAuth = () => {

    //login
    interface LoginPayload{
        email: string;
        password: string;
      }

    async function login(payload: LoginPayload){
        await axios.post("api/login", payload);
       useRouter().push("/me");
     }

     return {
        login,
     }
}