# Simple-Posts
## Features
- authentication(Login/out)
- create User
- view Users
- create Post
- view Posts
- delete Post


## Specification
### Backend
- Node.js
- MongoDB(Atlas)
### Frontend
- React

------------

## CheckList
### Setup
- [ ] Fork and clone the repo
- [ ] Intialize npm project `npm init`
- [ ] install dependancies `npm install express body-parser mongoose jsonwebtoken bcrypto`
- [ ] install dev dependancies `npm install --save-dev dotenv`
- [ ] create a file (.env) for environment variables
- [ ] create .gitignore (write ".node-modules" in the file)
- [ ] commit 
```bash
git add .
git commit -m "setup"
```

------------


### Backend
- #### Setup express routes
##### User
- [ ] Setup api (/api/v1/user, GET)
- [ ] Setup api (/api/v1/user/new, POST)
- [ ] Setup api (/api/v1/user/:id. GET)
- [ ] Setup api (/api/v1/user/:id. DELETE)
##### Post
- [ ] Setup api (/api/v1/post, GET)
- [ ] Setup api (/api/v1/post/new, POST)
- [ ] Setup api (/api/v1/post/:id. GET)
- [ ] Setup api (/api/v1/post/:id. DELETE)
##### Auth
- [ ] Setup api (/api/v1/auth, POST)

------------

- [ ] commit
```bash
git add .
git commit -m "setup express routes"
```

------------
#### Setup DB
- [ ] add an environment variable, MONGO_URI  ``
- [ ] create a folder (models) `mkdir models`
##### User
- [ ] create a file (user.js) `touch models/user.js`
- [ ] (in user.js..) import express and mongoose
- [ ] create MongoDB Schema: UserSchema 
```javascript
const UserSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true}
})
```
- [ ] create MongoDB Model: User
```javascript
mongoose.model("User", UserSchema);
```

##### Post
- [ ] create a file (post.js) `touch models/user.js`
- [ ] (in post.js..) import express and mongoose
- [ ] create MongoDB Schema: PostSchema 
```javascript
const UserSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true}
})
```
- [ ] create MongoDB Model: Post
```javascript
mongoose.model("Post", PostSchema);
```
------------

- [ ] integrate the user.js and post.js to index.js
- [ ] commit
```bash
git add .
git commit -m "setup mongodb post"
```
####Implement User API
- [ ] Implement GET (/api/v1/user); it returns all users
- [ ] Implement POST (/api/v1/user/new); it creates a document(mongod) and returns an user
- [ ] Implement GET (/api/v1/user/:id); it gets an user (find by id)
- [ ] Implement DELETE (/api/v1/user/:id); it deletes an user
- [ ] commit
```bash
git add .
git commit -m "implement user api"
```


####Implement POST API
- [ ] Implement GET (/api/v1/post); it returns all posts
- [ ] Implement POST (/api/v1/post/new); it create a document(mongod) and returns a post
- [ ] Implement GET (/api/v1/post/:id); it returns a post (find by id)
- [ ] Implement DELETE (/api/v1/post/:id); it deletes a post
- [ ] commit
```bash
git add .
git commit -m "implement post api"
```



------------

### Authentication
- ####Create a middleware service authenticateToken
- [ ] create a folder (middleware)
- [ ] cretea a folder authenticateToken.js in the folder
- [ ] implement authenticateToken()


- ####Implement AUTH API
- [ ] add TOKEN_SECRET to .env (probably use crypto to generate a secret)
- [ ] implement generateToken(username){}
- [ ] auth api (/api/v1/auth) returns the token or error
- [ ] commit
```bash
git add .
git commit -m "implement authentication"
```

------------

### Frontend
#### Setup client
- [ ] initialize a react app, client `npx create-react-app client`
- [ ] remove unnecessary files 
- [ ] cleanup uncessary statesments and all in files
- [ ] create a folder, containers
- [ ] create a folder, components
- [ ] commit
```bash
git add .
git commit -m "setup react app, client"
```


#### Post
- [ ] create a folder, PostContainer in containers
- [ ] create a file, PostContainer.js
- [ ] implement PostContainer
- [ ] create a folder, Post
- [ ] create a file, Post.js
- [ ] implement Post component (Refactor PostContainer.js)
- [ ] commit
```bash
git add .
git commit -m "implement client, Post"
```

#### User
- [ ] create a folder, UserContainer in containers
- [ ] create a file, UserContainer.js
- [ ] implement UserContainer
- [ ] create a folder, User
- [ ] create a file, User.js
- [ ] implemente User component (Refactor Post)
- [ ] commit
```bash
git add .
git commit -m "implement client, User"
```

#### Auth
- [ ] create a folder, Auth in containers
- [ ] create a file, Auth.js
- [ ] implement Auth
- [ ] commit
```bash
git add .
git commit -m "implement client, Auth"
```
