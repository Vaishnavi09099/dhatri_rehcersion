# 🌸 Dhatri (धात्री)

### Your Wellness Bestie 💗

Dhatri is a gentle space to track your health, notice patterns, and feel more prepared for conversations with your healthcare professional. Think of it as a little companion for your wellness journey—not a replacement for medical care.

## ✨ A few lovely things you can do

- 🌙 Track your cycle and understand its phases
- 🌷 Log symptoms and daily check-ins
- 📊 Explore health trends, reports, and personal insights
- 🤖 Chat with the optional AI wellness assistant
- 📚 Browse women's health learning resources
- 🩺 Keep goals, appointments, and care resources together
- 💬 Use the experience in English, Hindi, or Hinglish

## 🧺 What it's made with

| Part | Tools |
| --- | --- |
| Frontend | React 19, Vite, React Router |
| Backend | Node.js, Express |
| Data | MongoDB with Mongoose, plus a local JSON fallback |
| AI helper | Google Gemini (optional) |

## 🏡 Get it running on your computer

You’ll need **Node.js 18+** and npm. MongoDB and a Gemini API key are optional.

### 1. Install the goodies

Run these from the project root:

```bash
npm install --prefix client
npm install --prefix server
```

### 2. Add your local settings

Make a backend environment file by copying `.env.example` to `server/.env`.

**Windows PowerShell**

```powershell
Copy-Item .env.example server/.env
```

**macOS / Linux**

```bash
cp .env.example server/.env
```

Open `server/.env` and set a private, unique `JWT_SECRET`. Add your MongoDB connection string if you want to use MongoDB, and your `GEMINI_API_KEY` if you’d like Gemini-powered assistant replies.

| Setting | What it does |
| --- | --- |
| `PORT` | Backend port; defaults to `5000` |
| `MONGODB_URI` | MongoDB connection; defaults to `mongodb://127.0.0.1:27017/dhatri` |
| `JWT_SECRET` | Signs login tokens; use your own long random value |
| `JWT_EXPIRES_IN` | Token lifetime; defaults to `7d` |
| `GEMINI_API_KEY` | Optional key for Gemini-powered replies |
| `NODE_ENV` | Runtime mode; usually `development` locally |

Please keep your real keys private—never commit them to GitHub. Environment files are ignored by Git.

### 3. Say hello to Dhatri

From the project root:

```bash
npm run dev
```

Then visit **http://localhost:3000** 🌷 The frontend runs on port `3000`, the API on port `5000`, and Vite forwards `/api` requests to the backend.

Want to run them in separate terminals instead?

```bash
npm run dev:server
npm run dev:client
```

The server uses MongoDB when available. If MongoDB isn’t running, it can use a local JSON store at `server/data/db_fallback.json`. Demo data is seeded when the server starts.

## 📦 Make a production frontend build

```bash
npm run build
```

The frontend build is created in `client/dist`. The backend can be started from the project root with:

```bash
npm start
```

For deployment, configure your hosting platform to serve the built frontend and run the API.

## 🗺️ Take a peek around

**Public pages:** Home, About, Features, Learning, Care, Contact, Sign in, Sign up, and onboarding.

**Your wellness space:** Dashboard, Journey, Cycle, Symptoms, Trends, Reports, Insights, Learning, Care, Goals, Profile, Settings, and AI Assistant.

**API base:** `/api`

| Endpoint | For |
| --- | --- |
| `/api/health` | A quick server health check |
| `/api/auth` | Sign-up, sign-in, profile, and password reset |
| `/api/cycle` | Cycle logs |
| `/api/symptoms` | Symptom logs and trends |
| `/api/daily` | Daily check-ins |
| `/api/reports` | Health reports and summaries |
| `/api/appointments` | Appointments and provider directory |
| `/api/goals` | Wellness goals |
| `/api/ai` | Assistant chat and history |
| `/api/learn` | Learning articles |
| `/api/places` | Nearby care and geocoding |
| `/api/alerts` | Health alerts |

## 🧁 Project map

```text
client/
  public/        Images and other static assets
  src/
    components/  Reusable UI pieces
    contexts/    App-wide state and preferences
    pages/       Public pages and wellness workspace
    styles/      App styles and themes
server/
  src/
    config/      Database setup
    controllers/ API logic
    middleware/  Request helpers and authentication
    models/      Data models
    routes/      API endpoints
    services/    Health alert services
    utils/       Seed data and helpers
  data/          Local JSON fallback data
```

## 💌 A gentle reminder

Dhatri shares general health education and helps you organize information for conversations with a qualified healthcare professional. It does **not** diagnose conditions, prescribe treatment, or replace medical advice. If something feels urgent, contact local emergency services or seek immediate medical care.

Health details are personal. Protect your environment files and data, and don’t treat the local demo/fallback setup as production-grade privacy or security. Before deploying, set up secure hosting, access controls, and backups.

## 📜 License

This repository does not currently specify a license. Please contact the project owner before reusing or redistributing the code.

---

Made with care for your wellness journey 🌸
