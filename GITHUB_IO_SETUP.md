# 🌐 Cara Membuat Domain GitHub.io

## Pilihan 1: User Site (Recommended)
**URL:** `https://username.github.io`

### Langkah-langkah:

#### 1. Buat Repository Khusus
```
Nama repository: username.github.io
(Ganti 'username' dengan username GitHub Anda)

Contoh:
- Username: johndoe
- Repository: johndoe.github.io
- URL hasil: https://johndoe.github.io
```

**Penting:**
- ✅ Repository HARUS public
- ✅ Nama HARUS persis: `username.github.io`
- ✅ Hanya bisa 1 user site per akun

#### 2. Cek Username GitHub Anda
```bash
# Cara cek username:
# 1. Buka github.com
# 2. Klik profile picture (kanan atas)
# 3. Lihat username di bawah nama Anda
# 4. Atau lihat di URL: github.com/USERNAME
```

#### 3. Buat Repository Baru
```
1. Buka github.com
2. Klik tombol "+" (kanan atas) > New repository
3. Repository name: username.github.io
4. Description: My Portfolio Website
5. Public (HARUS public)
6. ❌ JANGAN centang "Add a README file"
7. Klik "Create repository"
```

#### 4. Push Code ke Repository Baru

**Jika ini repository baru:**
```bash
# Di folder project Anda
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

**Jika sudah ada repository lain:**
```bash
# Ganti remote URL
git remote set-url origin https://github.com/username/username.github.io.git
git push -u origin main
```

#### 5. Setup GitHub Pages
```
1. Buka repository di GitHub
2. Klik "Settings" (tab paling kanan)
3. Scroll ke bawah, klik "Pages" (menu kiri)
4. Di "Source", pilih: "GitHub Actions"
5. Tunggu 2-3 menit
6. Refresh halaman, akan muncul link: "Your site is live at..."
```

#### 6. Verifikasi
```
Buka: https://username.github.io
(Ganti 'username' dengan username GitHub Anda)
```

---

## Pilihan 2: Project Site
**URL:** `https://username.github.io/project-name`

### Langkah-langkah:

#### 1. Buat Repository Biasa
```
Nama repository: portfolio (atau nama lain yang Anda mau)
Public
```

#### 2. Update Vite Config
Edit `client/vite.config.js`:
```javascript
base: '/portfolio/', // Sesuai nama repository
```

#### 3. Push & Deploy
```bash
git add .
git commit -m "Setup GitHub Pages"
git push origin main
```

#### 4. Enable GitHub Pages
```
Settings > Pages > Source: GitHub Actions
```

#### 5. Akses
```
https://username.github.io/portfolio
```

---

## 🔧 Troubleshooting

### Masalah: "Repository name must be username.github.io"
**Solusi:** 
- Pastikan nama repository PERSIS sama dengan username Anda
- Cek username di github.com/settings

### Masalah: 404 Not Found
**Solusi:**
- Tunggu 5-10 menit setelah push pertama
- Cek Actions tab untuk melihat build status
- Pastikan `base` di vite.config.js benar:
  - User site: `base: '/'`
  - Project site: `base: '/repo-name/'`

### Masalah: CSS/JS tidak load
**Solusi:**
- Periksa `base` path di vite.config.js
- Rebuild: `cd client && npm run build`
- Push ulang

### Masalah: "Site not found"
**Solusi:**
- Pastikan repository public
- Pastikan GitHub Pages enabled di Settings
- Cek Actions tab untuk error

---

## 📋 Checklist

### Untuk User Site (username.github.io):
- [ ] Repository dibuat dengan nama: `username.github.io`
- [ ] Repository public
- [ ] `base: '/'` di vite.config.js
- [ ] Code sudah di-push ke main branch
- [ ] GitHub Pages enabled (Source: GitHub Actions)
- [ ] Tunggu 2-3 menit
- [ ] Akses https://username.github.io

### Untuk Project Site:
- [ ] Repository dibuat dengan nama bebas
- [ ] Repository public
- [ ] `base: '/repo-name/'` di vite.config.js
- [ ] Code sudah di-push
- [ ] GitHub Pages enabled
- [ ] Akses https://username.github.io/repo-name

---

## 🎯 Rekomendasi

**Gunakan User Site** jika:
- ✅ Ini portfolio utama Anda
- ✅ Ingin URL yang clean (tanpa /project-name)
- ✅ Belum punya username.github.io

**Gunakan Project Site** jika:
- ✅ Sudah punya username.github.io untuk project lain
- ✅ Ini salah satu dari banyak project
- ✅ Ingin multiple sites

---

## 💡 Tips

1. **Custom Domain (Opsional):**
   - Beli domain (Namecheap, GoDaddy, dll)
   - Tambahkan file `CNAME` di `client/public/`
   - Isi dengan domain Anda: `www.yourdomain.com`
   - Setup DNS di domain provider

2. **Multiple Projects:**
   - User site: `username.github.io` (portfolio utama)
   - Project sites: `username.github.io/project1`, `username.github.io/project2`

3. **Update Website:**
   ```bash
   # Edit code
   git add .
   git commit -m "Update website"
   git push origin main
   # GitHub Actions akan auto-deploy
   ```

---

## 📞 Butuh Bantuan?

Jika masih bingung, berikan info:
1. Username GitHub Anda
2. Nama repository yang ingin digunakan
3. URL yang diinginkan

Saya akan bantu setup step-by-step!
