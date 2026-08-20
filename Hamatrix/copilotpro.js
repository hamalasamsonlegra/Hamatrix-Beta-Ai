const fetch = require('node-fetch');
module.exports = {
  name: 'copilotpro',
  description: 'AI chat with copilotpro',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const prompt = args.join(' ');
    if (!prompt) return sock.sendMessage(jid, { text: 'Please provide a message.' }, { quoted: msg });
    try {
      // Replace with your actual AI API endpoint
      const response = await fetch('https://api.aimlapi.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_API_KEY' },
        body: JSON.stringify({ model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: prompt }] })
      });
      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content || 'No response from AI.';
      await sock.sendMessage(jid, { text: reply }, { quoted: msg });
    } catch {
      await sock.sendMessage(jid, { text: 'AI service is currently unavailable. Please configure your API key.' }, { quoted: msg });
    }
  }
};