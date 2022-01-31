# Project Overview

## Project Name

[<h2><b>blackArchives</b></h2>](https://blackarchives.netlify.app/)

## Project Description

<em>blackArchives</em> is an online database devoted to celebrating the work of Black Film Directors. The application will feature information on each director and details about their films. The site is authenticated, which allows users to access Director and Film information. Users will also be able to add, update and delete directors and films from the list.

## Wireframes

![wireframes](https://res.cloudinary.com/kacloud20/image/upload/v1643648098/Screen_Shot_2022-01-31_at_11.54.20_AM_adrlrj.png)

![wireframes](https://res.cloudinary.com/kacloud20/image/upload/v1643648096/Screen_Shot_2022-01-31_at_11.51.36_AM_dy4fso.png)

Wireframes URL: https://www.figma.com/file/h62ivP8PWsBibRcYC8cSQb/blackArchives?node-id=0%3A1

## Entity Relationship Diagram

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1643052545/Project%204/untitled_2_ndtofd.png)

## Component Hierarchy

![wireframe](https://res.cloudinary.com/kacloud20/image/upload/v1643064832/Project%204/blackarchive_chart_2x_skokre.png)

Component Hierarchy URL: https://whimsical.com/blackarchive-chart-XDyaWqJ3CMF3mggkEebhBb

## Application Dependencies

The following dependencies are needed to run this application:

- django
- psycopg2-binary
- djangorestframework
- djangorestframework-simplejwt
- gunicorn
- whitenoise
- dj-database-url
- python-dotenv

## Endpoints

The application has the following endpoints:

<b>Client (Front-end):</b>

- Home = '/'
- User Login = '/user/login/'
- User Sign-out = '/sign-out'
- All Directors = '/directors/'
- Director Detail (by ID number)= '/directors/:id'
- Director Edit (by ID number) = '/directors/:id/edit'
- Director Create = '/directors/create'
- Film Create = '/films/create'
- Film Edit (by ID number) = '/films/:id/edit'

<b>Back-end:</b>

Directors -

```
 {
        "id": 1,
        "name": "Spike Lee",
        "roles": "Director | Producer | Writer | Actor",
        "biography": "Shelton Jackson \"Spike\" Lee is an American film director, producer, screenwriter, actor, and professor. His production company, 40 Acres and a Mule Filmworks, has produced more than 35 films since 1983. He made his directorial debut with She's Gotta Have It.",
        "image": "https://res.cloudinary.com/kacloud20/image/upload/v1643473193/1361425_spikelee_851459_stwdfk.jpg",
        "films": [
            {
                "id": 3,
                "title": "She's Gotta Have It",
                "release": 1986,
                "description": "The plot concerns a young woman (Johns) who is seeing three men, and the feelings this arrangement provokes.",
                "image": "https://res.cloudinary.com/kacloud20/image/upload/v1643149621/Project%204/e926be11e21586c1d0ec78f36b72fa0d538ed49e_rhooso.jpg",
                "director": 1
            },
```

Films -

```
{
    "id": 12,
    "title": "Keanu",
    "release": 2016,
    "description": "Recently dumped by his girlfriend, slacker Rell (Jordan Peele) finds some happiness when a cute kitten winds up on his doorstep. After a heartless thief steals the cat, Rell recruits his cousin Clarence (Keegan-Michael Key) to help him retrieve it.",
    "image": "https://res.cloudinary.com/kacloud20/image/upload/v1643514796/Project%204/MV5BMTUwODA0NzQxMl5BMl5BanBnXkFtZTgwNzUyMjY3ODE_._V1_FMjpg_UX1000__usoaci.jpg",
    "director": 4
}
```

## MVP

- Create a database with PostgreSQL
- Create a RESTful JSON API in Django with user authentication deployed on Heroku
- Create a front-end user interface written in React and hosted Netlify

## Post-MVP

- Build Sign-up functionality for users
