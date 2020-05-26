# nodejs-mysql-microservice

Crear el Dockerfile

Executar "docker build -t ester/microservice ."

Executar "docker run -it -p 8000:8080 microservice". L'aplicació funcionarà en el port 8000

Consultar les imatges amb "docker images"

Consultar els contenidors amb "docker ps -a"





"docker run --link mysql-main:db -e DATABASE_HOST=db -p 8000:8080 node-ms"