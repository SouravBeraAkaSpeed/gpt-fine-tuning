import { openai } from "./api.js";

async function deleteFineTune() {
  try {
    const modelId = "ft:gpt-4.1-mini:personal:model-name";

    const response = await openai.models.delete(modelId);

    console.log("Model deleted:", response);
  } catch (error) {
    console.error("Delete error:", error.message);
  }
}

deleteFineTune();