import { SearchResponse } from "@notionhq/client/build/src/api-endpoints";
export type OAuthResponse = {
  access_token: string;
  bot_id: string;
  duplicated_template_id?: any;
  owner: Owner;
  workspace_icon: string;
  workspace_id: string;
  workspace_name: string;
};

export type OAuthError = {
  error: string;
  error_description: string;
};

export type Owner = {
  workspace: boolean;
};

export type ExtractInner<T> = T extends { [key: string]: infer U } ? U : never;

export type SearchResults = ExtractInner<Pick<SearchResponse, "results">>;
