import { z } from "zod";
import { fetchAccessToken, isError } from "../../../lib";
import { users } from "~/schema";
import { db } from "~/clients/drizzle";

export const runtime = "edge";

const incomingRequestSchema = z.object({
  code: z.string().nonempty(),
});

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { code } = incomingRequestSchema.parse(body);

    const authData = await fetchAccessToken(code);

    if (isError(authData)) {
      return new Response(JSON.stringify({ message: authData.error_description }), { status: 500 });
    }

    const { access_token, bot_id, workspace_id, workspace_name } = authData;

    await db.insert(users).values({
      accessToken: access_token,
      workspaceId: workspace_id,
      workspaceName: workspace_name,
      workspaceIcon: bot_id,
    });

    return new Response(JSON.stringify({ succes: true }), { status: 201 });
  } catch (e: any) {
    console.log({ e });

    if (e instanceof z.ZodError) {
      return new Response("Bad request", { status: 400 });
    }

    const error = e.message;

    return new Response(JSON.stringify({ error }), { status: 400 });
  }
}
