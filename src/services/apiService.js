import axios from "axios";

const baseUrl = "https://elite-dev-test-api.azurewebsites.net/";

export const getContacts = () => {
  return axios.get(`${baseUrl}api/contact`);
};

export const deleteContacts = (id) => {
  return axios.delete(`${baseUrl}api/contact/${id}`);
};
