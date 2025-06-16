CARA INSTALASI DAN MENJALANKAN PROYEK INI:

1. Clone project
git clone https://github.com/edi-mj/laravel-reverb.git

atau jika menggunakan ssh
git clone git@github.com:edi-mj/laravel-reverb.git

2. Masuk ke direktori project
cd laravel-reverb

3. Install dependensi
composer install
cp .env.example .env
php artisan key:generate

4. Buat database mysql
berikan nama database "funwithreverb"

5. Konfigurasi database di file .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=funwithreverb
DB_USERNAME=root
DB_PASSWORD=

6. Migrasi dan seed database
php artisan migrate
php artisan db:seed

7. Install dependensi NPM
npm install

8. Install reverb
php artisan install:broadcasting
pilih reverb
yes

9. Jalankan server
npm run dev
php artisan serve
php artisan reverb:start
php artisan queue:listen
