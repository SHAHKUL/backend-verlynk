
# Verlynk Back End Developer Task

A brief description of what this project does and how to start.


## Tech Stack


**Server:** Node.js, Express.js, Mongoose, JWT, Bcrypt.js, Cors, Dotenv, express-rate-limit





## Run Locally

Clone the project

```bash
  git clone https://github.com/SHAHKUL/verlynk-backend
```

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install 
  or
  npm install express nodemon mongoose jsonwebtoken express-rate-limit dotenv cors bcryptjs

```

Start the server

```bash
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`URL=mongodb+srv://shahkul:123@cluster0.eyasecg.mongodb.net/verlynk?retryWrites=true&w=majority`

`PORT=3005`

`key=secretkey`

## API Reference Regsiter Profile

#### Get all items

```http
  GET /auth/register
```


#### Get one item

```http
  GET /auth/register/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Regsiter one item

```http
  POST /auth/register
```

#### From: req.body

| key | value_type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Login 

```http
  POST /auth/Login
```

#### From: req.body

| key | value_type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |



## API Reference for Blog

#### Authentication :

| headers | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth`      | `token` | while we Login **token value** will be generated

**Note : Following Each route is protected by the Authentication please use the about value.**
#### Get all blog created

```http
  GET /blog/get
```


#### Get one item

```http
  GET /blog/get/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get blog details per page

```http
  GET /blog/get?page=0
```
req.query.page
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | **Required**. Id of item to fetch |

#### Create one item

```http
  POST /blog/create/
```

#### From: req.body

| key | value_type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required** |



#### Put one item

```http
  PUT /blog/update/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### From: req.body

| key | value_type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required** |

#### Delete one item

```http
  DELETE /blog/remove/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## API Reference for Comment

#### Authentication :

| headers | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth`      | `token` | while we Login **token value** will be generated

**Note : Following Each route is protected by the Authentication please use the about value.**
#### Get all Comment created

```http
  GET /comment/get
```


#### Get one item

```http
  GET /comment/get/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Create one item

```http
  POST /comment/create/
```

#### From: req.body

| key | value_type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required** we create a comment |
| `blogId` | `string` | **Required** we use blogId to this comment with associate  which blog is blong to. |


#### Put one item

```http
  PUT /comment/update/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### From: req.body

| key | value_type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required** we create a comment |
| `blogId` | `string` | **Required** we use blogId to this comment with associate  which blog is blong to. |

#### Delete one item

```http
  DELETE /comment/remove/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Demo

[Deployed on render Link](https://linktodocumentation)


## 🔗 Links
[![My portfolio link](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://subtle-mochi-92a5d5.netlify.app/)

[![My Resume link]()](https://drive.google.com/file/d/1lEo5qxiK03MLWB7iugEKrnURg-kz5iLf/view?usp=drive_link)
