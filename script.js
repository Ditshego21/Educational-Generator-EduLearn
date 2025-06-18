const API_KEY = "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"; // Replace with your valid OpenRouter key
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "mistralai/mistral-7b-instruct"; // Known supported model

async function generateContent() {
  const topic = document.getElementById("topic").value.trim();
  const audience = document.getElementById("Grade").value.trim();
  const contentType = document.getElementById("contentType").value;
  const output = document.getElementById("output");

  if (!topic || !audience) {
    alert("Please fill out all fields.");
    return;
  }

  const prompt = `Create a high-quality ${contentType} on the topic '${topic}'. It should be designed for ${audience} and be engaging, clear, and informative.`;

  console.log("Sending prompt to API:", prompt);

  try {
    output.textContent = "Generating...";

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: "You are an expert educational content generator." },
          { role: "user", content: prompt }
        ]
      })
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`HTTP ${response.status} - ${errorDetails.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "No content returned.";
    output.textContent = content;

  } catch (error) {
    console.error("API Error:", error);
    output.textContent = `Error: ${error.message}`;
  }
}

async function downloadPDF() {
  const outputText = document.getElementById("output").textContent.trim();

  if (!outputText) {
    alert("Please generate content before downloading.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const lines = doc.splitTextToSize(outputText, 180);
  doc.text(lines, 10, 20);
  doc.save("lesson_content.pdf");
}
