import axios from "axios";

const BASE_URL = "https://breathe-esg-backend-mcko.onrender.com/api";

export const fetchEmissionRecords = () => {
  return axios.get(`${BASE_URL}/emissions/`);
};

export const approveEmissionRecord = (id) => {
  return axios.post(
    `${BASE_URL}/reviews/approve/${id}/`
  );
};

export const rejectEmissionRecord = (id) => {
  return axios.post(
    `${BASE_URL}/reviews/reject/${id}/`
  );
};

export const uploadEmissionFile = (formData) => {
  return axios.post(
    `${BASE_URL}/ingestion/upload/`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};