# Social-Network-backend

Backend app using Node.js, Express, MongoDB Atlas, Bcrypt etc

## Why?

## How to

https://social-neto.herokuapp.com/

you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

## Pre-requisites

1. NodeJs
2. MongoDb
3. Npm
4. Yarn

## How To Run

1. At first clone the project.
2. Run `yarn` to install all the dependencies
3. The system will run on `port: 8800`. You can modify it by changing the port in `index.js` or adding an `env` variable.
4. Once installed, run `yarn start`
5. The API url will be `localhost:{PORT}/{ROUTES}`

# USER

### SignUP

```js
fetch('{BASE_URL}/signup',{
  method: "POST",{
      email: "test@gmail.com",
		username: 'username',
		password: 'password',
		firstname: 'First name',
		lastname: 'Last name',
		phone: 'Phone Number',
  }
})
	.then((res) => res.json())
	.then((json) => console.log(json));
```

### Login

```js
fetch('{BASE_URL}/auth/login',{
  method: "POST",{
      email: "test@gmail.com",
		  password: 'password',
  }
})
	.then((res) => res.json())
	.then((json) => console.log(json));
```

### Add USer by Admin

Require Admin Authentication

```
req.body = {
    "role": "user/admin",
    "email": "user@email.com",
    "username": "username",
    "phone": "phonenumber",
    "password": "password"
}

```

```js
fetch('{BASE_URL}/user',{
  method: "POST",req.body
})
	.then((res) => res.json())
	.then((json) => console.log(json));
```

### Delete user by ID

Require Admin Authentication

```js
fetch("{BASE_URL}/user/{UserId}", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Update user by ID

```

```

### Get user by ID

Require Admin Authentication

```js
fetch("{BASE_URL}/user/{UserId}", {
  method: "GET",
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Get All User List

Require Admin Authentication

```js
fetch("{BASE_URL}/user/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Get My Information

Require Authentication

```js
fetch("{BASE_URL}/my-detail/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

<!-- ### Edit My Information -->

````
### Get all Posts

```js
fetch("{BASE_URL}/posts/")
    .then((res) => res.json())
    .then((json) => console.log(json));
````

### Get a single Post

```js
fetch("{BASE_URL}/posts/:id")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

## ToDo

```

```
