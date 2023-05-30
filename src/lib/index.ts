import { CONSTANTS } from "../app/constants";
import { OAuthResponse, OAuthError } from "../types/notion.type";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://notion-starter-template.vercel.app"
    : "http://localhost:3000";

export const encodeTokens = () => {
  return Buffer.from(`${CONSTANTS.NOTION_CLIENT_ID}:${CONSTANTS.NOTION_CLIENT_SECRET}`).toString(
    "base64",
  );
};

export const fetchAccessToken = async (code: string) => {
  const token = encodeTokens();

  const oAuthPromise = await fetch("https://api.notion.com/v1/oauth/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
    body: JSON.stringify({
      code,
      grant_type: "authorization_code",
      redirect_uri: `${baseURL}`,
    }),
  });

  if (!oAuthPromise.ok) {
    throw new Error("Error fetching access token");
  }

  return (await oAuthPromise.json()) as OAuthResponse | OAuthError;
};
