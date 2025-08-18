import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function GET(){
    return Response.json(
        {message: "This is Completion GET Method"},
        {status: 200}
    )
}

export async function POST() {
    const {text} = await generateText({
        model: google("gemini-2.5-flash"),
        prompt:"What is react in simple terms?"
    })

    return Response.json({message: text}, {status: 200})
}