import { z } from "zod";
import { fetchAccessToken } from "../../../lib";
export const runtime = "edge";

const incomingRequestSchema = z.object({
  code: z.string().nonempty(),
});

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { code } = incomingRequestSchema.parse(body);

    const authData = await fetchAccessToken(code);

    if ("error" in authData) {
      return new Response(JSON.stringify({ message: authData.error_description }), { status: 500 });
    }

    // TODO: Save authorize data to Vercel Postgres
    // const vals = authData;

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
