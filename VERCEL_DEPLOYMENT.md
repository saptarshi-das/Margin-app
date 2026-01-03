# Deploying to Vercel with Environment Variables

This guide shows you how to deploy your app to Vercel while keeping your Firebase API keys secure.

## 🎯 How It Works

- **Local**: Your `.env` file (not committed to Git)
- **GitHub**: Only your code (no secrets)
- **Vercel**: Environment variables configured in dashboard

## 📋 Prerequisites

✅ Firebase project set up (from `FIREBASE_SETUP.md`)
✅ `.env` file working locally
✅ Code pushed to GitHub
✅ Vercel account (free at https://vercel.com)

## 🚀 Deployment Steps

### Step 1: Push Your Code to GitHub

```bash
# Check what will be committed (`.env` should NOT appear here)
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Add Google authentication with domain restriction"

# Push to GitHub
git push origin main
```

**⚠️ Important**: Verify that `.env` is NOT in the list when you run `git status`. If it appears, check your `.gitignore` file.

### Step 2: Connect to Vercel

1. Go to https://vercel.com and sign in (or create account)
2. Click **"Add New Project"**
3. **Import** your GitHub repository
4. Select your **Margin-app** repository

### Step 3: Configure Environment Variables in Vercel

**This is the critical step!** Before deploying:

1. In the Vercel project setup, scroll to **"Environment Variables"** section
2. Add each variable from your local `.env` file:

Click **"Add"** for each variable:

| Name | Value |
|------|-------|
| `VITE_FIREBASE_API_KEY` | (paste from your .env) |
| `VITE_FIREBASE_AUTH_DOMAIN` | (paste from your .env) |
| `VITE_FIREBASE_PROJECT_ID` | (paste from your .env) |
| `VITE_FIREBASE_STORAGE_BUCKET` | (paste from your .env) |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | (paste from your .env) |
| `VITE_FIREBASE_APP_ID` | (paste from your .env) |

**For each variable:**
- Name: Copy exactly as shown (including `VITE_` prefix)
- Value: Copy the value from your local `.env` file
- Environment: Select **Production, Preview, and Development** (all three)

### Step 4: Deploy

1. After adding all environment variables, click **"Deploy"**
2. Vercel will build and deploy your app (takes 1-2 minutes)
3. You'll get a URL like: `https://your-app.vercel.app`

### Step 5: Add Your Vercel Domain to Firebase

**Critical**: Firebase needs to know about your Vercel domain!

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Authentication** → **Settings** → **Authorized domains**
4. Click **"Add domain"**
5. Add your Vercel URL: `your-app.vercel.app` (without `https://`)
6. Click **"Add"**

✅ **Done!** Your app is now live and authentication will work.

## 🔄 Future Deployments

For all future updates:

```bash
# Make your changes to code
# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Your update message"
git push

# Vercel automatically deploys! ✨
```

Vercel will **automatically detect** your push and redeploy. Environment variables persist, so you don't need to re-enter them.

## ✏️ Updating Environment Variables

If you ever need to update your Firebase config:

1. Go to your project on vercel.com
2. Click **Settings** → **Environment Variables**
3. Edit the variable you need to change
4. Click **Save**
5. **Redeploy** your app (Vercel will prompt you)

## 🔒 Security Best Practices

✅ **DO:**
- Keep `.env` in `.gitignore`
- Use Vercel's environment variables for production
- Add all deployment domains to Firebase Authorized domains
- Use different Firebase projects for dev/production (optional but recommended)

❌ **DON'T:**
- Commit `.env` to Git
- Hardcode API keys in your code
- Share your Firebase credentials publicly
- Use the same Firebase config for testing and production (optional, but good practice)

## 🐛 Troubleshooting

### "Firebase config is missing" on Vercel

**Solution**: Check that all environment variables are set in Vercel dashboard and spelled correctly with `VITE_` prefix.

### "This domain is not authorized" error

**Solution**: Add your Vercel domain to Firebase Console → Authentication → Settings → Authorized domains

### Environment variables not updating

**Solution**: After changing variables in Vercel, you need to trigger a new deployment (Settings → Deployments → Redeploy)

### Login works locally but not on Vercel

**Solutions**:
1. Verify all 6 environment variables are set in Vercel
2. Check that Vercel domain is in Firebase Authorized domains
3. Check browser console for specific errors
4. Verify variable names have `VITE_` prefix

## 📊 Environment Variable Comparison

| Environment | Where Config Lives | How It's Used |
|-------------|-------------------|---------------|
| **Local Dev** | `.env` file | Vite reads it automatically |
| **GitHub** | Nowhere (ignored) | Code only, no secrets |
| **Vercel** | Vercel Dashboard | Injected during build |

## 🎯 Quick Reference Commands

```bash
# Check what will be committed (should NOT see .env)
git status

# Standard commit and push
git add .
git commit -m "Your message"
git push

# Check if .env is ignored
git check-ignore .env
# Should output: .env (if properly ignored)
```

## 🔗 Useful Links

- [Vercel Environment Variables Docs](https://vercel.com/docs/projects/environment-variables)
- [Firebase Authorized Domains](https://console.firebase.google.com/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

**You're all set! Your workflow stays the same: commit → push → Vercel auto-deploys! 🚀**
