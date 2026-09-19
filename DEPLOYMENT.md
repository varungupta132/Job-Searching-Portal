# 🚀 Deployment Guide

## Step 1: Setup MongoDB Password

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Click on **Database Access** (left sidebar)
3. Find user: `guptavarun132_db_user`
4. Click **Edit** → Set/Reset password
5. Copy the password

## Step 2: Local Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Edit `.env` file and replace `<db_password>` with your actual password:
```
MONGODB_URI=mongodb+srv://guptavarun132_db_user:YOUR_ACTUAL_PASSWORD@chatapp.fwtcmjb.mongodb.net/jobportal?retryWrites=true&w=majority
PORT=3000
```

3. Seed the database:
```bash
npm run seed
```

4. Start the server:
```bash
npm start
```

## Step 3: Deploy on Render (FREE)

### Option A: Deploy from GitHub (Recommended)

1. Go to [Render.com](https://render.com/) and sign up with GitHub
2. Click **New +** → **Web Service**
3. Connect this GitHub repository
4. Render will auto-detect the settings from `render.yaml`
5. Add Environment Variable:
   - Key: `MONGODB_URI`
   - Value: Your full connection string with password
6. Click **Create Web Service**
7. Wait 2-3 minutes for deployment
8. Done! Your app is live! 🎉

### Option B: Manual Deploy

1. Go to [Render.com](https://render.com/)
2. Click **New +** → **Web Service**
3. Select **Build and deploy from a Git repository**
4. Connect your GitHub repository
5. Configure:
   - **Name**: job-portal
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - `MONGODB_URI`: Your connection string with password
   - `PORT`: 10000
7. Click **Create Web Service**

## Step 4: Seed Database on Render (Optional)

After deployment, go to **Shell** tab in Render dashboard and run:
```bash
npm run seed
```

## Alternative Deployment Options

### Railway.app (Also FREE)
1. Go to [Railway.app](https://railway.app/)
2. Sign in with GitHub
3. Click **New Project** → **Deploy from GitHub repo**
4. Select this repository
5. Add environment variable: `MONGODB_URI`
6. Deploy! 🚀

### Vercel (For static + serverless)
```bash
npm install -g vercel
vercel
```

---

## Troubleshooting

### MongoDB Connection Issues
- Make sure your MongoDB password is correct
- Check if your IP is whitelisted in MongoDB Atlas (Network Access)
- Use `0.0.0.0/0` to allow all IPs (for testing)

### Port Issues
- Render uses port `10000` by default
- Make sure `process.env.PORT` is used in `server.js`

---

**Need Help?** Check the README.md file for more details!
