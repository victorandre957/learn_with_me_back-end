# API

This project is the API with strapi for the learn_with_me.

The strapi instructions are on `./strapi_README` file.

This project contains:

- docker and docker-compose
- strapi framework
- postgresql (used for dev only, for production must be connected to an external db)

## Extensions

### Required Plugins

- Prettier (Install him on your code editor to follow the project format rules)
- EditorConfig

## Running the project

### Requirements

We will develop inside a container with vscode, so you will need:

1. Instal `docker`
2. If in windows install `WSL2`
3. Install the required plugins

### How to run

1. Copy `./.env.example` to `./.env`
2. Execute `docker-compose down --volumes --remove-orphans`
3. Run `docker-compose run docker-compose run --service-ports strapi bash strapi bash`

This will create 2 services: the DB for development and the strapi application.

And will attach you to the container with the correct yarn version.

NOTE: The flag `--service-ports` must be used on running the command `run` for the
ports binding to work.

Inside the container run

```
yarn ci
```

and

```
yarn develop
```

## Project access

After run the project your db will be locally available at:

    - host: localhost / postgres (if inside the container network)
    - port: 5432
    - user: strapi-learn-with-me
    - password: 123456
    - database: learn-with-me

After run the API server your application will be available at:

    - host: localhost / strapi (if inside the container network)
    - port: 1337

You can access the painel with:

    - user: strapi@strapi.com
    - pass: Pass1234

## Running troubles

If you need to reset all, you can run `docker-compose down --volumes --remove-orphans`
(on a linux terminal inside the root of the project), to clear all including the database.

You can change the ports as need in your docker-compose file.

If you have some trouble with permission at run `docker-compose up`,
change the user and user group at `docker-compose.yml`:

1.  run `echo $(id -u):$(id -g)` on your terminal.
2.  copy the value an past where is the value `user: 1000:1000`.

## Documentation

Strapi contains your own API documentation, you can access here:
http://localhost:1337/admin/plugins/documentation

For plugins API documentation (like, user, roles, assets upload), you can check strapi documentation, unfortunately they don't show up on swagger docs (link above):
https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html
