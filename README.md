# Margin - Course Leave Tracker App

A beautiful, modern course leave tracking app with Google authentication, designed specifically for IIM Ranchi students.

## ✨ Features

- 🔐 **Secure Google Login** - Restricted to @iimranchi.ac.in email addresses
- 📊 **Course Management** - Track leaves for multiple courses
- 🎨 **Beautiful UI** - Modern design with dark mode support
- 📱 **PWA Ready** - Install as a Progressive Web App
- 💾 **Local Storage** - Your data is saved automatically (cloud sync coming soon!)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Firebase Authentication
Before you can use the login feature, you need to set up Firebase:

1. Follow the step-by-step guide in [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md)
2. Or use the quick checklist in [`SETUP_CHECKLIST.md`](./SETUP_CHECKLIST.md)

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` and sign in with your @iimranchi.ac.in email!

## 🔒 Authentication

This app uses **Firebase Google Authentication** with domain restriction:
- ✅ Only `@iimranchi.ac.in` email addresses can sign in
- 🔐 Two-layer security: client-side hint + server-side validation
- 🚪 Automatic sign-out for unauthorized domains

## 📦 Tech Stack

- **React** + **TypeScript** - For robust component development
- **Vite** - Lightning-fast build tool
- **Firebase** - Authentication and future cloud features
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## 📖 Project Structure

```
src/
├── components/         # React components
│   ├── LoginPage.tsx  # Google sign-in interface
│   ├── UserProfile.tsx # User info and sign-out
│   └── ...
├── contexts/          # React contexts
│   └── AuthContext.tsx # Authentication state management
├── firebase/          # Firebase configuration
│   └── config.ts      # Firebase app initialization
└── App.tsx            # Main app component
```

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

See [`.env.example`](./.env.example) for a template.

## 🚢 Building for Production

```bash
npm run build
```

The built files will be in the `build/` directory.

## 🤝 Contributing

This project is designed for IIM Ranchi students. If you'd like to contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes.

## 🔗 Original Design

Based on the original Figma design: https://www.figma.com/design/E2uEpeYb5a1gpeZX0Ajfwx/Course-Leave-Tracker-App

---

**Made with ❤️ for IIM Ranchi students**