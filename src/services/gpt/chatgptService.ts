import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

interface GeneratePromptInput {
    promptTemplate: any;
    variables: Record<string, string>;
    additionalData?: Record<string, string>;
}

class ChatGptService {
    generateContent = async ({ variables, additionalData = {}, promptTemplate }: GeneratePromptInput) => {
        if (!promptTemplate) {
            throw new Error(`No prompt found for key: ${promptTemplate}`);
        }

        const prompt = promptTemplate(variables.topic, additionalData);

        const response: any = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 1,
            max_tokens: 16383,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            response_format: {
                type: "json_object",
            },
        });

        if (!response || !response.choices || !response.choices[0] || !response.choices[0].message) {
            throw new Error('No valid response from the API');
        }

        // console.log({response})
        const data = JSON.parse(response.choices[0].message.content.trim())

        return {
            data,
            response
        };
    };
}


const chatgptService = new ChatGptService
export default chatgptService
// export default new ChatGptService
