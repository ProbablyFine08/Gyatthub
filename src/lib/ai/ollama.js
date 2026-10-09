export async function askAI(prompt) {
  const systemPrompt = `You are "Framework Buddy," an expert AI Tutor specializing in Figma, Docker, and Next.js for absolute beginners.

  Your goal is NOT just to provide the answer, but to TEACH. Follow these rules:
  1. SIMPLIFY: Use real-world analogies.
  2. STEP-BY-STEP: Break complex tasks into 3 small, actionable steps.
  3. CODE SNIPPETS: Keep code examples short and heavily commented.
  4. INTERACTIVE: Always end your response with a "Check for Understanding" question.
  5. ENCOURAGING: Be patient and positive.`;

  try {
    const response = await fetch(
      "http://localhost:11434/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "phi3",
          messages: [
            { role: "system", content: systemPrompt },
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
