# Project Overview

## Project Name

<h3><strong>blackArchives</strong></h3>

## Project Description

<em>blackArchives</em> is an online database devoted to celebrating the work of Black Film Directors. The application will feature information on each director and details about their films. The site is authenticated, which allows users to access Director and Film information. Users will also be able to add, update and delete directors and films from the list.

## Wireframes

![wireframes](https://res.cloudinary.com/kacloud20/image/upload/v1643076673/Project%204/Screen_Shot_2022-01-24_at_9.10.59_PM_qurfnu.png)

![wireframes](https://res.cloudinary.com/kacloud20/image/upload/v1643065826/Project%204/Screen_Shot_2022-01-24_at_6.08.46_PM_xfri9c.png)

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

- Home = '/'
- User Login = '/user/login/'
- User Sign-out = '/sign-out'
- All Directors = '/directors/'
- Director Detail (by ID number)= '/directors/:id'
- Director Edit (by ID number) = '/directors/:id/edit'
- Director Create = '/directors/create'
- Film Create = '/films/create'
- Film Edit (by ID number) = '/films/:id/edit'

## MVP

- Create a database with PostgreSQL
- Create a RESTful JSON API in Django with user authentication deployed on Heroku
- Create a front-end user interface written in React and hosted Netlify

## Post-MVP

- Build Sign-up functionality for users
