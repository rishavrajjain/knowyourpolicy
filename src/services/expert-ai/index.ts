import axios from "axios";
import { status } from "../../utils/httpresponses";
import { CustomError } from "../../utils/types";
import { expertAIAxiosClient } from "./httpClient";
import { AnalyseResponseData } from "./types";

export const analyseDocument = async (document: string) => {
  try {
    const token = await getToken();

    const { data } = await expertAIAxiosClient.post(
      "/v2/analyze/standard/en",
      {
        document: {
          text: document,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data as AnalyseResponseData;
  } catch (err) {
    console.error(err);
    throw new CustomError(
      status.SERVER_ERROR,
      "Something went wrong with our partner AI services, please try again in sometime"
    );
  }
};

export const getCategories = async (document: string) => {
    try {
        const token = await getToken();
    const { data } = await expertAIAxiosClient.post(
      `/v2/categorize/iptc/en`,
      {
        document: {
          text: document,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getToken = async () => {
  try {
    const { data } = await axios.post(
      `https://developer.expert.ai/oauth2/token`,
      {
        username: `${process.env.EXPERT_AI_USERNAME}`,
        password: `${process.env.EXPERT_AI_PASSWORD}`,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw new CustomError(
      status.SERVER_ERROR,
      "Something went wrong with our partner AI services, please try again in sometime"
    );
  }
};
