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
     
    //logout
    async function logout(){
        await axios.post('logout');
        useRouter().replace('/login');
    }

     return {
        login,
        logout
     }
}