import axios from "axios"

let apiUrl="https://localhost:8080/"

export const signIn=async (user)=>{
 const res= await axios.post(`${apiUrl}`,user);
 return res.data;
}

export const signUp=async (user)=>{
    const res= await axios.post(`${apiUrl}`,user);
    return res.data;
   }