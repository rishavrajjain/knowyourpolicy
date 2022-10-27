import axios from "axios";

const expertAIAxiosClient = axios.create({
  baseURL: `https://nlapi.expert.ai`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { expertAIAxiosClient };
