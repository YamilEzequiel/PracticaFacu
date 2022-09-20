## Configuracion necesaria para sequelize
- config .sequelizerc

## Iniciar sequelize
````
npx sequelize init
````

## Crear un nuevo modelo 
````
npx sequelize model:generate --name User --attributes name:STRING,email:STRING,password:STRING
````

## Correar las migraciones
````
npx sequelize db:migrate
````