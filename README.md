# c3-dlab-backend


# Setup
- Instalar docker (y tener el servicio en ejecución)

# Como ejecutar el proyecto

- Crear un archivo llamado `.env`, y poner en el los contenidos del archivo `.env_example`

```bash
docker-compose run --rm --service-ports app
```
o bien
```bash
docker-compose up
```

# Sobre postgres
La primera vez que se ejecute, deberán usar 
```
docker-compose up
```

Para que la imagen de postgres genere correctamente las configuraciones en el contenedor de postgres
despues se puede seguir usando
```
docker-compose run --rm --service-ports app
```
(o usar siempre ```docker-compose up```, eso es elección de Uds.)

# Notas

Como escribir un mensaje de commit:
https://cbea.ms/git-commit/
