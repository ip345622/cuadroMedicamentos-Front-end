import axios from "./axios";


export const registrar = (user) => axios.post(`/registrar`, user);

export const login = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/auth/veryfy`);

// export const logoutPost = () => axios.post(`/logout`);