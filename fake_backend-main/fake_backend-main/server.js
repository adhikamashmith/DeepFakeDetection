const express = require('express');
const { GoogleGenAI } = require("@google/genai");
const app = express();
const port = 5000;
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

// Function to clean AI response and extract valid JSON
function extractJson(text) {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        throw new Error("AI did not return valid JSON.");
    }
    return JSON.parse(jsonMatch[0]);
}

async function generateContentAndScore(input) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI});

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `Analyze the factual accuracy of the following content and return a JSON object with two keys: 
            - "score": A floating-point number strictly between 0.0 and 1.0.
            - "response": A concise explanation (max 3 sentences) justifying the score.
            
            Strict Rules:
            1. The score **must be** a float between 0 and 1 (inclusive).
            2. The response **must not exceed 3 sentences**.
            3. **Do not include any extra text** before or after the JSON.
            4. Output format (MUST follow this exactly):
               {
                 "score": 0.85,
                 "response": "The statement is mostly accurate with minor discrepancies."
               }

            Now analyze this input and return ONLY the JSON object: "${input}"`,
        });

        // Extract and parse the JSON response
        const generatedText = response.text.trim();
        const result = extractJson(generatedText);

        // Validate the score range
        if (typeof result.score !== "number" || result.score < 0 || result.score > 1) {
            throw new Error("Generated score is out of range. Ensure it's between 0 and 1.");
        }
        console.log(result);
        return result;

    } catch (error) {
        console.error("Error generating content and score:", error);
        return { error: `Gemini API Error: ${error.message}` };
    }
}

app.post('/api/verify', async (req, res) => {
    const { input } = req.body;
    console.log('post req');
    console.log(input);
    if (!input) {
        return res.status(400).json({ error: 'Input is required' });
    }

    try {
        const result = await generateContentAndScore(input);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
