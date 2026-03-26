const express = require('express');
const axios = require('axios');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, async (req, res) => {
  console.log('Request body:', req.body);
  const { url, method, headers, body } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios({
      url,
      method: method || 'GET',
      headers: headers || {},
      data: body || undefined
    });

    res.json({
      status: response.status,
      data: response.data,
      headers: response.headers
    });

  } catch (err) {
    res.json({
      status: err.response?.status || 500,
      data: err.response?.data || { error: err.message },
      headers: err.response?.headers || {}
    });
  }
});
module.exports = router;