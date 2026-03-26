require('dotenv').config();
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Groq = require('groq-sdk');

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post('/', authMiddleware, async (req, res) => {
  const { error } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful coding assistant. When given an error or stack trace, explain what caused it and how to fix it clearly and concisely.'
        },
        {
          role: 'user',
          content: `Explain this error and how to fix it:\n\n${error}`
        }
      ]
    });

    const explanation = completion.choices[0].message.content;
    res.json({ explanation });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI explanation failed' });
  }
});

module.exports = router;