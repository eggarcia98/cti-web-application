
# Frontend Haciendola

Web page to get a list of productos throught the API [Haciendola Backend](https://github.com/eggarcia98/backend-haciendola), There is an user validation through a jwt token session to check is the user can get the product list


## Used Technologies:
* SvelteKit
* Docker

## Steps to Execute:
Step 1. If It doesn't exist, create the network "haciendola-network" in your docker environment:
```console
$ docker network create haciendola-network   
```

Step 2. Build and Deploy it using the docker-compose configuration included in the repository:
```console
$ docker-compose up --build -d
```

Step 3. You can access to the web page in the URL: [http://localhost:3000/]

```console
Credentials to Test:

Username: admin
Password: admin
```



