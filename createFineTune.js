import { openai } from "./api.js";
import { fileId } from "./fileId.js";

async function createFineTune() {
  try {
    const job = await openai.fineTuning.jobs.create({
      training_file: fileId,
      model: "gpt-4.1-mini",
    });

    console.log("Fine-tune job created:");
    console.log(job);
  } catch (error) {
    console.error("Fine-tune error:", error.message);
  }
}

createFineTune();