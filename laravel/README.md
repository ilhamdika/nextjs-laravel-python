# Laravel Posts API

Proyek ini merupakan contoh implementasi **REST API CRUD** menggunakan Laravel dengan resource `posts`.

## 🚀 Fitur
- CRUD (Create, Read, Update, Delete) untuk tabel `posts`
- Validasi input menggunakan fitur bawaan Laravel
- Pagination pada endpoint GET
- Seed data dummy menggunakan factory

---

## 🔧 Instalasi

```bash
git clone <url repo ini>
cd laravel-posts

# Install dependencies
composer install

# Copy konfigurasi .env dan generate key
cp .env.example .env
php artisan key:generate

# Konfigurasi database di .env
# DB_DATABASE=nama_database
# DB_USERNAME=root
# DB_PASSWORD=

# Jalankan migrasi dan seeder
php artisan migrate --seed

# Jalankan server lokal
php artisan serve
