# Project STructure

```bash
react-boilerplate/
├── public/
│   └── ... (static assets)
├── src/
│   ├── assets/
│   │   └── ... (images, fonts, etc.)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── ... (reusable UI components)
│   │   ├── layout/
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   └── PublicLayout.jsx
│   │   └── ... (other component directories)
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── authSlice.js
│   │   │   └── authService.js
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   └── dashboardSlice.js
│   │   └── ... (other feature modules)
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── ... (custom hooks)
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Profile.jsx
│   │   ├── Home.jsx
│   │   └── ... (other pages)
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── ... (API services)
│   ├── store/
│   │   ├── index.js
│   │   └── ... (Redux store configuration)
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── ... (utility functions)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── vite.config.js
└── package.json
```
