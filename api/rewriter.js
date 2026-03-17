
// Exemple Next.js / Vercel
export default async function handler(req, res) {
  const { bullet, prof, tone, jd } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) return res.status(500).json({ error: "API key missing" });

  const response = await fetch('https://api.anthropic.com/v1/complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "claude-2",
      prompt: `Ton prompt ici avec bullet: ${bullet}, prof: ${prof}, tone: ${tone}, jd: ${jd}`,
      max_tokens: 300
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}