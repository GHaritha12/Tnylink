# TinyLink – URL Shortener

A simple URL shortener built using Next.js, Prisma, PostgreSQL (Neon), and TailwindCSS.

## Live Demo
👉 https://tinylink-6h0wz8iah-gharitha033-1423s-projects.vercel.app

## Features
- Shorten long URLs  
- Custom short codes  
- Track clicks  
- Delete links  

## Tech Stack
Next.js • Prisma • NeonDB • TypeScript • TailwindCSS • Vercel

## Run Locally
1. npm install  
2. npx prisma generate  
3. npx prisma migrate dev  
4. npm run dev

## Environment Variables
DATABASE_URL=your-neon-url  
NEXT_PUBLIC_BASE_URL=your-vercel-domain

## Author
Haritha – https://github.com/GHaritha12
# TinyLink – Full Stack URL Shortener

TinyLink is a full-stack URL shortening application that allows users to create custom short codes, track clicks, and manage links. The project is built using modern web technologies and deployed on Vercel.

---

## 🚀 Live Application
🔗 https://tinylink-xxxx.vercel.app

---

## 🧩 Features
- Create short URLs
- Optional custom short code
- Track click count
- View last-clicked timestamp
- Delete links
- Fully responsive UI

---

## 🛠 Tech Stack
- **Frontend:** Next.js (App Router), TailwindCSS  
- **Backend:** Next.js API Routes  
- **Database:** Neon PostgreSQL  
- **ORM:** Prisma  
- **Language:** TypeScript  
- **Deployment:** Vercel  

---

## 📁 Project Structure

tinylink/
├── app/ # Pages & API Routes
├── components/ # UI components
├── lib/ # Helpers, DB connection
├── prisma/ # Prisma schema
├── package.json
├── tsconfig.json
└── .gitignore

---

## ⚙️ Environment Variables

Create `.env`:
DATABASE_URL="your-neon-postgres-url-here"
NEXT_PUBLIC_BASE_URL="your-vercel-deployment-url"



---

## ▶️ Run Locally
npm install
npx prisma generate
npx prisma migrate dev
npm run dev

---

## 🧑‍💻 Author
**Haritha**  
GitHub: https://github.com/GHaritha12
# ✨ TinyLink – Modern URL Shortener  

TinyLink is a clean, fast, and modern URL shortener built using **Next.js**, **Prisma**, **NeonDB**, and **TailwindCSS**.  
Create short links, track analytics, and manage everything through a simple UI.

---

## 🌐 Live Demo  
🔗 https://tinylink-xxxx.vercel.app  

---

## ⭐ Features  
- 🔗 Shorten long URLs  
- ✏️ Add custom short codes  
- 📊 Auto-tracking of clicks  
- 🕓 Shows last-clicked time  
- 🗑️ Delete any link  
- 📱 Fully responsive  

---

## 🛠 Tech Used  
| Layer | Technology |
|------|------------|
| Frontend | Next.js + TailwindCSS |
| Backend | Next.js API Routes |
| Database | Neon PostgreSQL |
| ORM | Prisma |
| Deployment | Vercel |

---

## 🗂 Folder Overview  

app/
components/
lib/
prisma/
package.json
tsconfig.json
tailwind.config.js

---

## ⚙️ Setup Instructions  

1️⃣ Install dependencies  

npm install

2️⃣ Generate Prisma Client  
npx prisma generate

3️⃣ Run DB migrations  
npx prisma migrate dev

4️⃣ Start development  

npm run dev

---

## 🔐 Environment Variables  

Create `.env`:

DATABASE_URL="postgresql://neondb_owner:npg_E7LSC5XOKogA@ep-lucky-scene-ah9khkec-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

