import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: "What is Lens Protocol?",
      max_output_tokens: 200,
    });

    console.log("Response:\n", response.output_text);
  } catch (error) {
    console.error("Completion error:", error.message);
  }
}

createCompletion();