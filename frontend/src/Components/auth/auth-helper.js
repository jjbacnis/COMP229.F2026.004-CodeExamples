import { jwtDecode } from "jwt-decode";

const authenticate = (token, cb)=>{
    if(typeof window !== "undefined"){
        sessionStorage.setItem('token', token);
    
        let payload = jwtDecode(token);
        sessionStorage.setItem('username', payload.username);
    }
    cb();
}

const getToken = ()=>{
  if (typeof window === "undefined") {
    return false;
  }
  return sessionStorage.getItem('token');
}

export {authenticate, getToken} 