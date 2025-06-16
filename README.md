CARA INSTALASI DAN MENJALANKAN PROYEK INI:

1. Clone project

    git clone https://github.com/edi-mj/laravel-reverb.git

    atau jika menggunakan ssh

    git clone git@github.com:edi-mj/laravel-reverb.git

2. Masuk ke direktori project

    cd laravel-reverb

4. Install dependensi

    composer install
   
    cp .env.example .env
   
    php artisan key:generate

7. Buat database mysql

    berikan nama database "funwithreverb"

9. Konfigurasi database di file .env

    DB_CONNECTION=mysql
    
    DB_HOST=127.0.0.1
    
    DB_PORT=3306
    
    DB_DATABASE=funwithreverb
    
    DB_USERNAME=root
    
    DB_PASSWORD=

11. Migrasi dan seed database

    php artisan migrate
    
    php artisan db:seed

14. Install dependensi NPM

    npm install

16. Install reverb

    php artisan install:broadcasting
    
    pilih reverb
    
    pilih "yes"

18. Jalankan server di empat terminal berbeda

    npm run dev
    
    php artisan serve
    
    php artisan reverb:start
    
    php artisan queue:listen
