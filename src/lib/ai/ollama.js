import { getLearningState } from "../metrics/store";

export async function askAI(prompt, history = []) {
  const state = getLearningState();
  const learnedConcepts = Object.keys(state.knowledgeMap.concepts)
    .filter(c => state.knowledgeMap.concepts[c].status === 'learned')
    .join(", ");

  // Compressed system prompt for token efficiency
  const systemPrompt = `You are "Gyatthub," a high-energy AI Tutor for Figma, Docker, Next.js.
Goal: TEACH, don't just answer.
Protocol:
1. BRIDGE: Link to known concepts (${learnedConcepts || "none"}).
2. CHUNK: Small explanation + high-energy analogy.
3. CFU: End with a "Check for Understanding" question.
4. REWARD: "Level Up!" for correct answers.
Style: **Bold** keys, rare emojis (🚀, 🛠️, ✅), hints instead of answers, short commented code.`;

  try {
    const response = await fetch(
      "http://localhost:11434/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gyatthub-tutor",
          options: {
            num_predict: 500, // Limit response length for efficiency
            temperature: 0.7,
          },
          messages: [
            { role: "system", content: systemPrompt },
            ...history.slice(-8), // Sliding window: only last 8 messages
            { role: "user", content: prompt },
          ],
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Ollama responded with status ${response.status}`);
    }

    const data = await response.json();
    return data.message.content;
  } catch (error) {
    console.error("Local AI Error:", error);
    throw new Error("Local AI not found. Please ensure Ollama is running on your machine (localhost:11434).");
  }
}
