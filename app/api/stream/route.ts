import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request){
    try{    
        const { prompt } = await req.json()

        const result = await streamText({
            model: google("gemini-2.0-flash"),
            prompt
        })

        return result.toUIMessageStreamResponse();

    }catch(error){
        console.error("Error while streaming", error);
        return Response.json({error: "Error while streaming"}, {status: 500})
    }
}