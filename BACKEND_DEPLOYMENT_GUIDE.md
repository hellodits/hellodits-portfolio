# 🚀 Panduan Deploy Backend

## Pilihan Platform Deploy (Gratis)

### 1. Railway.app (Recommended) ⭐
**Kelebihan:**
- Setup paling mudah
- Free tier generous (500 jam/bulan)
- Auto-deploy dari GitHub
- Support MongoDB Atlas

**Langkah-langkah:**

1. **Buat Akun Railway**
   - Kunjungi: https://railway.app
   - Sign up dengan GitHub

2. **Deploy Backend**
   ```bash
   # Install Railway CLI (optional)
   npm install -g @railway/cli
   
   # Login
   railway login
   
   # Deploy
   railway up
   ```

3. **Atau Deploy via Dashboard:**
   - Klik "New Project"
   - Pilih "Deploy from GitHub repo"
   - Pilih repository Anda
   - Railway akan auto-detect dan deploy

4. **Setup Environment Variables:**
   - Buka project di Railway dashboard
   - Pergi ke "Variables" tab
   - Tambahkan:
     ```
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
     JWT_SECRET=your-secret-key-here
     PORT=5000
     NODE_ENV=production
     ```

5. **Get Backend URL:**
   - Setelah deploy, Railway akan memberikan URL
   - Format: `https://your-app.railway.app`

---

### 2. Render.com
**Kelebihan:**
- Free tier permanent
- Auto-deploy dari GitHub
- Easy setup

**Langkah-langkah:**

1. **Buat Akun Render**
   - Kunjungi: https://render.com
   - Sign up dengan GitHub

2. **Deploy Backend:**
   - Klik "New +" > "Web Service"
   - Connect repository
   - Konfigurasi:
     - **Name:** devport-api
     - **Region:** Singapore
     - **Branch:** main
     - **Root Directory:** (kosongkan)
     - **Build Command:** `cd server && npm install`
     - **Start Command:** `cd server && npm start`

3. **Environment Variables:**
   ```
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   NODE_ENV=production
   ```

4. **Deploy:**
   - Klik "Create Web Service"
   - Tunggu build selesai (5-10 menit)

---

### 3. Vercel (Serverless)
**Kelebihan:**
- Deploy super cepat
- Unlimited bandwidth
- Auto-deploy

**Catatan:** Vercel lebih cocok untuk serverless functions

**Langkah-langkah:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Environment Variables:**
   - Tambahkan di Vercel dashboard atau via CLI:
   ```bash
   vercel env add MONGO_URI
   vercel env add JWT_SECRET
   ```

---

## Setup MongoDB Atlas (Database)

1. **Buat Akun MongoDB Atlas:**
   - Kunjungi: https://www.mongodb.com/cloud/atlas
   - Sign up gratis

2. **Buat Cluster:**
   - Pilih "Create a Free Cluster"
   - Pilih region terdekat (Singapore)
   - Cluster name: devport-db

3. **Setup Database Access:**
   - Database Access > Add New Database User
   - Username: devport-admin
   - Password: (generate strong password)
   - Role: Read and write to any database

4. **Setup Network Access:**
   - Network Access > Add IP Address
   - Pilih "Allow Access from Anywhere" (0.0.0.0/0)
   - Atau tambahkan IP Railway/Render

5. **Get Connection String:**
   - Clusters > Connect > Connect your application
   - Copy connection string:
   ```
   mongodb+srv://username:<password>@cluster.mongodb.net/devport?retryWrites=true&w=majority
   ```
   - Ganti `<password>` dengan password user Anda

---

## Update Frontend dengan Backend URL

1. **Edit `client/.env.production`:**
   ```env
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```

2. **Rebuild & Redeploy Frontend:**
   ```bash
   cd client
   npm run build
   git add .
   git commit -m "Update API URL"
   git push origin main
   ```

---

## Testing Backend

### Test Health Endpoint:
```bash
curl https://your-backend-url.com/api/health
```

Response:
```json
{
  "status": "ok",
  "message": "DevPort API is running"
}
```

### Test Projects Endpoint:
```bash
curl https://your-backend-url.com/api/projects
```

---

## Seed Database (Optional)

Jika Anda ingin mengisi database dengan data dummy:

```bash
# Update MONGO_URI di server/.env dengan production URI
cd server
npm run seed
```

---

## 🔧 Troubleshooting

### Error: Cannot connect to MongoDB
**Solusi:**
- Pastikan MongoDB Atlas IP whitelist sudah benar
- Cek connection string (username, password, database name)
- Pastikan user memiliki permission yang benar

### Error: 502 Bad Gateway
**Solusi:**
- Cek logs di platform dashboard
- Pastikan PORT environment variable sudah diset
- Pastikan start command benar

### Error: CORS
**Solusi:**
Update `server/src/index.js`:
```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://username.github.io'
  ],
  credentials: true
}));
```

---

## 📋 Checklist Deployment

### Backend:
- [ ] MongoDB Atlas cluster dibuat
- [ ] Database user & password dibuat
- [ ] Network access dikonfigurasi
- [ ] Backend di-deploy ke Railway/Render
- [ ] Environment variables diset
- [ ] Test health endpoint
- [ ] Test API endpoints

### Frontend:
- [ ] Update VITE_API_URL di .env.production
- [ ] Rebuild frontend
- [ ] Push ke GitHub
- [ ] Verify GitHub Pages deployment
- [ ] Test website end-to-end

---

## 🎯 Rekomendasi Platform

| Platform | Best For | Free Tier | Auto-Deploy |
|----------|----------|-----------|-------------|
| **Railway** | Full-stack apps | 500 hrs/month | ✅ |
| **Render** | Long-running services | Unlimited | ✅ |
| **Vercel** | Serverless/API routes | Unlimited | ✅ |

**Rekomendasi:** Gunakan **Railway** untuk kemudahan dan **MongoDB Atlas** untuk database.

---

## 📞 Support

Jika ada masalah:
1. Cek logs di platform dashboard
2. Verify environment variables
3. Test endpoints dengan Postman/curl
4. Check MongoDB connection

## 🔗 Useful Links

- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
- [Vercel Documentation](https://vercel.com/docs)
