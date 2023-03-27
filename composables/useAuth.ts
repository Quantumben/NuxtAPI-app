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
        await axios.post('/logout');
        useRouter().replace('/login');
    }

    //register
    interface RegisterPayload{
        name:  string;
        email: string;
        password: string;
        password_confirmation: string;
      }

    async function register(payload: RegisterPayload){
        await axios.post("api/register", payload);
        await axios.post("api/login", {
          email: payload.email,
          password: payload.password
        });
        useRouter().push('/me');
      }

     return {
        login,
        logout,
        register,
     }
}