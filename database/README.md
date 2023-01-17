This folder keeps files to customize the DB like seeds and migrations.

## Migrations

Folder for the default strapi migration system:

https://docs.strapi.io/developer-docs/latest/developer-resources/database-migrations.html

This is an experimental feature, and runs before the strapi update the database schema.

## Custom migrations

Folder for our own system of migration, that runs after strapi update database. Unlike the strapi migration system our system is in JavaScript and fully managed by us.

You can use it to change the DB schema in a way that strapi can't handle, like custom constraints, or you cam setup some data to production db.

NOTE: the files here will run in PRODUCTION environment.

## Seeders

A system like custom migrations, but to run custom javascripts that will insert data on DB.

The files here will run only in development and stage.

Use this only for dev/test seed purpose.

## Utils folder

Some useful javascript functions to keep the custom systems of migration and seed working.
