![Mockup](https://github.com/RetroGhosty/camp-blog/assets/54449218/14d63238-b025-4885-9a1b-95b7ba4884de)

<p align="center">
A campsite blogpost made by Laravel and React with Inertia.js 🏕️🔥   
</p>
✅ Admin dashboard to post an article<br/>
✅ Integrated with emailer to receive a recommendation campsites for anonymous user<br/>


# Installation

1. `sudo apt install php8.1 (check: php --version)`
2. disable apache2
3. install composer (check: composer --version)
4. `composer install`
5. `npm install`
6. put the authorization details in the .env file
7. `php artisan migrate`

## Database refresher

1. `php artisan migrate:reset`
2. `php artisan migrate`

## How to run the website

1. Open two command prompt
2. First CLI (backend) `php artisan serve`
3. Second CLI (frontend) `npm run dev`
