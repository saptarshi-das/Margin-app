# Quick Setup Checklist

Follow these steps to get Google login working:

## ☐ 1. Create Firebase Project
- Go to https://console.firebase.google.com/
- Click "Add project"
- Name it and create

## ☐ 2. Enable Google Auth
- Go to Authentication → Sign-in method
- Enable Google provider
- Set support email

## ☐ 3. Register Web App
- Project Settings → Your apps
- Click web icon `</>`
- Register app and copy config

## ☐ 4. Create .env File
```bash
# In your project root, create .env file
cp .env.example .env
```

Then fill in your Firebase values in the `.env` file.

## ☐ 5. Add Authorized Domains
- Authentication → Settings → Authorized domains
- Add `localhost` (should be there already)
- Add your production domain when deploying

## ☐ 6. Test
```bash
npm run dev
```

Visit http://localhost:3000 and try logging in with an @iimranchi.ac.in email!

---

**Need help?** Read the full guide in `FIREBASE_SETUP.md`
