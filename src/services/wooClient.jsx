// src/services/wooClient.jsx
import axios from "axios";

const wooClient = axios.create({
  baseURL: "https://turfvi.app/wp-json/wc/v3",
  auth: {
    username: "ck_860b0623210c5d21c9215813f7152aa56339b021",
    password: "cs_f64597d255e9773ff885600a100b1b4336d2f007",
  },
});

export default wooClient;
