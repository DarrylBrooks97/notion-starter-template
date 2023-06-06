import { OAuthResponse, OAuthError } from "~/types/notion.type";

const redirectURI =
  process.env.NODE_ENV === "production" ? `https://notion-starter-template.vercel.app` : "http://localhost:3000";

export const encodeTokens = () => {
  return Buffer.from(
    `${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`,
  ).toString("base64");
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
      redirect_uri: `${redirectURI}`,
    }),
  });

  if (!oAuthPromise.ok) {
    throw new Error("Error fetching access token");
  }

  return (await oAuthPromise.json()) as OAuthResponse | OAuthError;
};
