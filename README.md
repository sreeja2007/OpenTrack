# 🔭 OpenTrack — Developer Dashboard

> Your all-in-one developer productivity tool. Track repos, test APIs, and debug errors with AI — all in one place.

![OpenTrack](https://img.shields.io/badge/OpenTrack-Developer%20Dashboard-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![AI](https://img.shields.io/badge/AI-Groq%20LLaMA%203-purple?style=for-the-badge)

---

## 🚀 Live Demo

🌐 **[https://open-track1.vercel.app/](https://open-track1.vercel.app/)**

---

## 😩 The Problem

Every developer wastes time switching between:
- **GitHub** — to check repos and issues
- **Postman** — to test APIs
- **Stack Overflow** — to debug errors

That's 10+ tabs open and 40+ minutes wasted every single day.

---

## ✅ The Solution

OpenTrack brings everything into **one unified dashboard**:

| Feature | What it does |
|---|---|
| 📦 **Repo Dashboard** | See all your GitHub repos, stars, forks and languages in one view |
| 🧪 **API Tester** | Test any REST endpoint with GET, POST, PUT, DELETE — no Postman needed |
| 🤖 **AI Debugger** | Paste any error → get instant AI explanation + fix |

---

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios
- Lucide React (icons)
- React Markdown

### Backend
- Node.js
- Express.js
- JWT Authentication
- Socket.io

### APIs & Services
- GitHub OAuth 2.0
- GitHub REST API
- Groq AI (LLaMA 3.3)

### Deployment
- Vercel (Frontend)
- Render (Backend)

---


## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- GitHub OAuth App
- Groq API Key (free at console.groq.com)

### 1. Clone the repo
```bash
git clone https://github.com/sreeja2007/opentrack.git
cd opentrack
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create `.env` file:
```env
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

Start backend:
```bash
node index.js
```

### 3. Setup Frontend
```bash
cd client
npm install
npm start
```

### 4. Open the app
```
http://localhost:3000
```

---

## 🔐 GitHub OAuth Setup

1. Go to **github.com/settings/developers**
2. Click **New OAuth App**
3. Set callback URL to `http://localhost:5000/auth/github/callback`
4. Copy Client ID and Secret to `.env`

---

## 📁 Project Structure

```
opentrack/
├── client/                   # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ApiTester.jsx
│   │   │   └── ErrorExplainer.jsx
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   └── Dashboard.jsx
│   │   └── App.js
│   └── package.json
│
├── server/                   # Node.js Backend
│   ├── routes/
│   │   ├── auth.js
│   │   ├── repos.js
│   │   ├── api-tester.js
│   │   └── ai.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── index.js
│
└── README.md
```

---

## 🗺️ Roadmap

- [ ] Real-time alerts for stale issues
- [ ] PostgreSQL database integration
- [ ] PR tracking per repo
- [ ] API response history
- [ ] Team collaboration features

---

## 💼 What I Learned

Building OpenTrack taught me:
- ✅ GitHub OAuth 2.0 flow from scratch
- ✅ JWT authentication and middleware
- ✅ Integrating AI APIs into real products
- ✅ Building and proxying REST APIs
- ✅ Full-stack deployment (Vercel + Render)
- ✅ Real-time features with Socket.io

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a PR.

---

## 📄 License

MIT License — feel free to use this project!

---

## 👩‍💻 Built by

**Sreeja** 

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/sreeja)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/sreeja2007)

---

⭐ **If you found this useful, please star the repo!**
