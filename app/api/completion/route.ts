import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export async function GET(){
    return Response.json(
        {message: "This is Completion GET Method"},
        {status: 200}
    )
}

export async function POST(req: Request) {

    try{
        const {prompt} = await req.json()

        console.log(prompt);
        
        const {text} = await generateText({
            model: google("gemini-2.5-pro"),
            prompt, 
        })
        
    
        return Response.json({message: text}, {status: 200})

    }catch(error){
        console.error(error)
        return Response.json({message: "Failed to Generate Text"}, {status: 500})
    }

}