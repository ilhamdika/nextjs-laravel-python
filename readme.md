# 🧩 Monorepo: Next.js + Laravel + Django

Repository ini berisi 3 proyek:

- `nextjs/` — Frontend menggunakan Next.js + DaisyUI
- `laravel/` — Backend API menggunakan Laravel
- `django/` — Backend tools menggunakan Django

---
Setiap folder punya `README.md` dan konfigurasi mandiri.
## 🚀 Menjalankan

- Next.js:
    ```bash
    cd nextjs
    npm install
    npm run dev
    ```

- Laravel:
    ```bash
    cd laravel
    cp .env.example .env
    composer install
    php artisan migrate --seed
    php artisan serve
    ```

- Django:
    ```bash
    cd django
    venv\Scripts\activate
    pip install django
    python manage.py runserver
    ```

### Running with docker
```bash
docker-compose up --build
```

note:
- Next js running on port `3000`,
- Laravel on port `8000`
- Django on port `8001`