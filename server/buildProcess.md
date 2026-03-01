# Build MERN React Admin dashboard

link : <https://www.youtube.com/watch?v=0cPCMIuDk2I&t=1573s>
gitHub : <https://github.com/Bambo0o0o/mernReactDashboard.git>

<!-- Create new GitHub -->
echo "# mernDashboard" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Bambo0o0o/mernDashboard.git
git push -u origin main
<!-- Existed directory -->
git remote add origin https://github.com/Bambo0o0o/mernDashboard.git
git branch -M main
git push -u origin main

<!-- Comment shortkey VSCODE-->
   - For line comment : Ctrl + /	
   - For block comments : Shift + Alt + A

 <!-- Tools for project -->
    Node: <https://nodejs.org/en/download/>
    NPX: <https://www.npmjs.com/package/npx>
    VSCode: <https://code.visualstudio.com/download>
    Nodemon: <https://github.com/remy/nodemon>
    Nivo: <https://nivo.rocks/>
    Material UI: <https://mui.com/material-ui/getting-started/installation/>
    Material UI Data Grid: <https://mui.com/x/react-data-grid/>
    React Router: <https://reactrouter.com/v6.3.0/getting-started/installation>
    React Date Picker: <https://reactdatepicker.com/#example-date-range>
    Redux Toolkit: <https://redux-toolkit.js.org/introduction/getting-started>
    Redux Toolkit Query: <https://redux-toolkit.js.org/rtk-query/overview>
    Dotenv: <https://github.com/motdotla/dotenv>
    JsonWebToken: <https://github.com/auth0/node-jsonwebtoken>
    Google Fonts: <https://fonts.google.com/>
    Render: <https://render.com/>
    Railway: <https://railway.app/>
    MongoDB: <https://www.mongodb.com/>
    Mongoose: <https://github.com/Automattic/mongoose>
    MongoDB Aggregate: <https://www.mongodb.com/docs/manual/reference/mql/aggregation-stages/>

## Package installation
<!-- Process Time -->
0:00 Build a Complete React MERN Stack Admin Dashboard App
3:42 Backend Packages and Installations
5:27 Backend Configuration and Setup
12:12 MongoDB Installation and Setup
20:50 Frontend Installation and Packages
26:46 How to set up Colors and MUI Light and Dark Mode Themes with Redux Toolkit
40:32 Building a Navbar with MUI
1:01:37 Building a Sidebar with MUI
1:29:32 RTK Query and injecting mock data into MongoDB
2:09:00 ERD Diagram and Data Modeling
2:20:00 Products Page
3:02:41 Customers Page
3:23:26 Transactions Page
4:05:00 Geography Page
4:27:18 Overview Page
5:02:00 Daily Page
5:17:20 Monthly Page
5:22:39 Breakdown Page
5:37:15 Admin Page
5:48:03 Performance Page
6:09:21 Dashboard Page
6:44:05 Deployment on Render.com
6:57:57 Completed and Deployed MERN Stack Admin Dashboard

<!-- Backend Packages and Installations -->
1) Create server directory :
   - Create server directory : mkdir server
   - Go to server directory : cd server
   - Adding initial {package.json} : npm init -y
2) Setup server tools : npm i express body-parser cors dotenv helmet morgan mongoose nodemon
   ***Atually we will used package.json by EdRoh will better API environment to study case***
3) Install tools from {package.json} that file located : npm install

<!-- Backend Configuration and Setup -->
1) Create {index.js} in server folder : touch index.js
2) import tools : express body-parser cors dotenv helmet morgan mongoose
3) Configuration tools : express body-parser cors dotenv helmet morgan mongoose
4) Import routes : clientRoutes, generalRoutes, managementRoutes, salesRoutes
5) Configuration routes : clientRoutes, generalRoutes, managementRoutes, salesRoutes
6) Adding routes folder in server folder
7) Create {route files} to routes folder : client.js, general.js, management.js, sales.js
8) Init Configuration route files with : express.Router()
9) Adding folders in server folder : controllers, data, models
10) Create controller files as route files : client.js, general.js, management.js, sales.js

<!-- MongoDB Installation and Setup -->
1) Go to mogoDB signUp and signIn with atlas
   1) Username : devillasu_db_user
   2) password : xMO4PrLgpLYosQwK
   3) Connect method : Driver
   4) Connection from : Local environment
   5) IP Access list : Add My Current IP Address
   6) Driver : NodeJS
   7) Link : mongodb+srv://devillasu_db_user:xMO4PrLgpLYosQwK@dashboard0.7a9g7jo.mongodb.net/?appName=dashboard0
2) Create {.env} file in server folder
3) Adding :
   1) MONGO_URL : mongodb+srv://devillasu_db_user:xMO4PrLgpLYosQwK@dashboard0.7a9g7jo.mongodb.net/?appName=dashboard0
   2) PORT : 5001
4) Create {.gitignore} to be necklect upload file list to gitHub or repository
   1) Adding necklect list : /node_modules and .env