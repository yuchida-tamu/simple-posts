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
- [x] Fork and clone the repo
- [x] Intialize npm project `npm init`
- [x] install dependancies `npm install express body-parser mongoose jsonwebtoken bcrypto cors`
- [x] install dev dependancies `npm install --save-dev dotenv nodemon`
- [x] create a file (.env) for environment variables 'touch .env .gitignore'
- [x] create .gitignore (write "node-modules" & ".env" in the file)
- [x] commit 
```bash
git add .  #.gitignoreに書いていないファイルがトラックされる。
git commit -m "setup"    # 変化分をコミット。
```

------------


### Backend
- #### Setup express routes
##### User
- [x] Setup api (/api/v1/user, GET)
- [x] Setup api (/api/v1/user/new, POST)
- [x] Setup api (/api/v1/user/:id. GET)
- [x] Setup api (/api/v1/user/:id. DELETE)
##### Post
- [x] Setup api (/api/v1/post, GET)
- [x] Setup api (/api/v1/post/new, POST)
- [x] Setup api (/api/v1/post/:id. GET)
- [x] Setup api (/api/v1/post/:id. DELETE)
##### Auth
- [x] Setup api (/api/v1/auth, POST)

------------

- [x] commit
```bash
git add .
git commit -m "setup express routes"
```

------------
#### Setup DB
- [x] add an environment variable, MONGO_URI  ``
- [x] create a folder (models) `mkdir models`
##### User
- [x] create a file (user.js) `touch models/user.js`
- [x] (in user.js..) import mongoose #DBを操作するライブラリ 
- [x] create MongoDB Schema: UserSchema 
```javascript
const UserSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true}
})
```
- [x] create MongoDB Model: User
```javascript
mongoose.model("User", UserSchema);
# DBの操作はmodelを通して
```

##### Post
- [x] create a file (post.js) `touch models/post.js`
- [x] (in post.js..) import mongoose
- [x] create MongoDB Schema: PostSchema 
```javascript
const PostSchema = new mongoose.Schema({
	user_id: {type: String, required: true},
	content: {type: String, required: true}
})
```
- [x] create MongoDB Model: Post
```javascript
mongoose.model("Post", PostSchema);
```
------------

- [x] integrate the user.js and post.js to index.js
- [x] commit
```bash
git add .
git commit -m "setup mongodb"
```
#### Implement User API
- [x] Implement GET (/api/v1/user); it returns all users
- [ ] Implement POST (/api/v1/user/new); it creates a document(mongod) and returns an user
- [ ] Implement GET (/api/v1/user/:id); it gets an user (find by id)
- [ ] Implement DELETE (/api/v1/user/:id); it deletes an user
- [ ] commit
```bash
git add .
git commit -m "implement user api"
```


#### Implement POST API
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
