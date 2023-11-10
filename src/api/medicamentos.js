import axios from "./axios";

export const getMedicamentos = () => axios.get('/medicamentos');

export const getMedicamento = (id) => axios.get(`/medicamentos/${id}`);

export const createMedicamento = (medicamento) => axios.post('/medicamentos',medicamento);

export const updateMedicamento = (id,medicamento) => axios.put(`/medicamentos/${id}`,medicamento); 

export const deleteMedicamento = (id) => axios.delete(`/medicamentos/${id}`);