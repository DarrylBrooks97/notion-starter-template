import { OAuthResponse, OAuthError } from "../types/notion.type";

export const isError = (data: OAuthResponse | OAuthError): data is OAuthError => {
  return "error" in data;
};
