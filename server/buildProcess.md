# Build MERN React Admin dashboard

Last building time : 1:01:56

link : <https://www.youtube.com/watch?v=0cPCMIuDk2I&t=1573s>
gitHub : <https://github.com/Bambo0o0o/mernReactDashboard.git>
***.JSON file don't have any comment track***

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
   1) For line comment : Ctrl + /
   2) For block comments : Shift + Alt + A
   3) Run server : npm run dev

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
   - Create server(Backend) directory : mkdir server
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
   2) password : ya1UNXwvO9mb6LPL
   3) Connect method : Driver
   4) Connection from : Local environment
   5) IP Access list : Add My Current IP Address
   6) Driver : NodeJS
   7) Link : mongodb+srv://devillasu_db_user:rmBK7Ut9nmzNy2fY@dashboard0.7a9g7jo.mongodb.net/?appName=dashboard0
2) Create {.env} file in server folder
3) Adding :
   1) MONGO_URL : mongodb+srv://devillasu_db_user:rmBK7Ut9nmzNy2fY@dashboard0.7a9g7jo.mongodb.net/?appName=dashboard0
   2) PORT : 5001
4) Create {.gitignore} to be necklect upload file list to gitHub or repository
   1) Adding necklect list : /node_modules and .env
5) Go to {package.json} then adding :
   1) Adding "type" under "main" : "type":"module",        //To allow us to used imported on index.js file
   2) Adding "start" and "dev" inside "scripts" :
      - "start":"node index.js"
      - "dev":nodemon index.js"
   3) Delete "type" under "license" : "type": "commonjs",
***Testing run server : npm run dev***

<!-- Backend Configuration and Setup(Cont.) -->
1) Setup mongoose on {index.js}
***Got error : Error: querySrv ECONNREFUSED _mongodb._tcp.dashboard0.7a9g7jo.mongodb.net did not connect***
   <!-- Solve by -->
   1) Install Node 18.20.8 version

<!-- Frontend Installation and Packages -->
1) Setup clinet(frontend) directory and initialize tools : npx create-react-app client
2) Go to client folder : cd client
3) Install client packages : npm i react-redux @reduxjs/toolkit react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid @nivo/core @nivo/bar @nivo/geo @nivo/pie
4) Install old version datepicker : npm i --force react-datepicker@4.8.0
5) Delete others file left only : App.js, index.js, index.css
6) Create {jsconfig.json} using {"ignoreDeprecations": "6.0"} to ignore baseURL deprecated

<!-- set up Colors and MUI Light and Dark Mode Themes -->
1) Create {theme.js} in src folder
   1) For one color code we can shady it by tailwind shades
   2) By select all color code then : #666666
   3) Using tailwind Shades with key : ctrl+k --> ctrl+g
2) Just copy data from EdRoh to our {theme.js} : <https://github.com/ed-roh/fullstack-admin/blob/master/client/src/theme.js>
3) Create assets to store profile picture : profile.jpeg

<!-- Backend Configuration and Setup(Cont.) -->
1) Inside data folder create {index.js} file
2) Copy sorce data from EdRoh to there : <https://github.com/ed-roh/fullstack-admin/blob/master/server/data/index.js>

<!-- Set font from google font : inter family -->
1) Go to google font with inter family : <https://fonts.google.com/specimen/Inter?query=inter>
2) Copy embed code from @import within style taq
3) Place that @import code to {index.css}
4) Add default setting to {index.css} file : html,body,#root,.app{}

<!-- Create Mode dark and light -->
1) Create state folder in src folder
2) Create {index.js} in state folder
3) Create Dark/Light mode from reduxjs/toolkit in {index.js}

<!-- Create API state -->
1) Create {api.js} file in state folder
2) Adding API data from EdRoh to {api.js}

<!-- Create geoData state -->
1) Create {geoData.js} file in state folder
2) Adding geoData from EdRoh to {geoData.js}

<!-- Go to main frontend index.js in client folder -->
1) On index.js import things : configureStore, globalReducer, Provider, setupListeners, api
2) On index.js setup configureStore()
3) On index.js adding Provider store to ReactDom.createRoot

<!-- Complete App.js in client folder -->
1) On App.js import things : CssBaseline, ThemeProvider, createTheme, useMemo, useSelector, BrowserRouter, , Navigate, Route, Routes, themeSettings, Layout, Dashboard, Products, Customers, Transactions, Geography, Overview, Daily, Monthly, Breakdown, Admin, Performance
2) Create route paths to : /, dashboard, products, customers, transactions, geography, overview, daily, monthly, breakdown, admin, performance

<!-- Create Dashboard : Scenes -->
1) Create scenes folder in src folder
2) Create dashboard folder in scenes folder
3) Create {index.jsx} in dashboard folder
4) Using intellisence of vscode "rafce" on {index.jsx} file
5) Then complete Adding code from EdRoh

<!-- Create Layout : Scenes -->
1) Test run : npm run start                             //Don't turn on other modules otherwise it will get error
2) Create {FlexBetween.jsx} in components folder        // Setup to get space between left-right of Navebar
3) Adding Box and Styled to {FlexBetween.jsx}
4) Adding {Navbar.jsx} in components folder
5) Create layout folder in scenes folder
6) Create {index.jsx} in scenes folder
7) Import Navebar and Sidebar to {index.jsx} of layout folders
8) Setup Navbar and Sidebar on {index.jsx}
9) Adding {Sidebar.jsx} in components folder
10) Setup {Sidebar.jsx}
11) Then complete Adding code from EdRoh

<!-- Create Layout : Scenes -->