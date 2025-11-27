# 🚀 Panduan Deploy ke GitHub Pages

## Langkah-langkah Deploy:

### 1. Setup Repository GitHub
```bash
# Jika belum ada repository, buat dulu di GitHub
# Kemudian push kode Anda
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. Konfigurasi GitHub Pages
1. Buka repository Anda di GitHub
2. Pergi ke **Settings** > **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**

### 3. Update Base Path
Edit file `client/vite.config.js`:
```javascript
base: '/nama-repository-anda/', // Ganti dengan nama repository Anda
```

**Contoh:**
- Jika repository: `https://github.com/username/portfolio`
- Maka base: `'/portfolio/'`
- URL hasil: `https://username.github.io/portfolio/`

**Untuk custom domain atau username.github.io:**
- Jika repository: `https://github.com/username/username.github.io`
- Maka base: `'/'`
- URL hasil: `https://username.github.io/`

### 4. Install Dependencies & Deploy

#### Opsi A: Automatic Deploy (Recommended)
Setiap kali Anda push ke branch `main`, GitHub Actions akan otomatis build dan deploy.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

#### Opsi B: Manual Deploy
```bash
cd client
npm install
npm run deploy
```

### 5. Verifikasi Deployment
- Tunggu beberapa menit setelah push
- Buka **Actions** tab di GitHub untuk melihat progress
- Setelah selesai, akses: `https://username.github.io/repository-name/`

## 🔧 Troubleshooting

### Masalah: 404 Not Found
**Solusi:** Pastikan `base` di `vite.config.js` sesuai dengan nama repository

### Masalah: Assets tidak load (CSS/JS)
**Solusi:** Periksa kembali `base` path di vite.config.js

### Masalah: Routing tidak bekerja
**Solusi:** Tambahkan file `client/public/404.html` yang redirect ke index.html

### Masalah: API tidak berfungsi
**Solusi:** 
- GitHub Pages hanya untuk static site
- Backend (server) perlu di-deploy terpisah (Heroku, Railway, Vercel, dll)
- Update API URL di `client/src/lib/api.js`

## 📝 Catatan Penting

1. **Backend Terpisah**: GitHub Pages hanya untuk frontend. Deploy backend ke:
   - Railway.app (Recommended)
   - Render.com
   - Heroku
   - Vercel (untuk serverless)

2. **Environment Variables**: 
   - Update `.env` di client dengan API URL production
   - Contoh: `VITE_API_URL=https://your-backend.railway.app`

3. **Custom Domain** (Opsional):
   - Beli domain
   - Tambahkan file `CNAME` di `client/public/`
   - Konfigurasi DNS di domain provider

## 🎯 Checklist Deploy

- [ ] Repository sudah di push ke GitHub
- [ ] Base path di vite.config.js sudah benar
- [ ] GitHub Pages source sudah diset ke "GitHub Actions"
- [ ] Push ke main branch
- [ ] Cek Actions tab untuk melihat build progress
- [ ] Test website di URL GitHub Pages

## 🔗 Links Berguna

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
