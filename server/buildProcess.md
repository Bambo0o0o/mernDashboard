# Build MERN React Admin dashboard

Last building time : 6:48:51 / 7:00:32

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
   4) Run client : npm start
   5) Console.log : highlight word + {ctrl + k} then {ctrl + l}
   6) Development tool : ctrl+shift+l

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
<!-- Password MongoDB : Q8sYFDng5V82eSrH -->
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
11) Making comments element on Sidebar code : <https://mui.com/material-ui/react-drawer/>
12) Then complete Adding code from EdRoh

## RTK Query and injecting mock data into MongoDB : Create Navbar and Sidebar layout

<!-- Create User field to support User data -->
1) Create User information to User profile on {index.js} in state folder
    1) Sending UserId to backend and backend
    2) Backend sending User information to Navbar and show it.
    3) Adding UserID under dark mode : userId: "63701cc1f03239b7f700000e",
2) Go to {general.js} in routes folder
3) Create UserId to support input UserId to backend :
    1) Import { getUser, getDashboardStats }
    2) Making route path to push/pull userId from backend : route.get("/user/:id)
    3) Go to models folder create {User.js} in there
    4) Create user schema in {User.js} with mongoose to support User fields which contains : name, email, password, address, occupation, contact, transaction, role and timestamp
    ***Schema is a format which database will check is field in there must be correct format***
4) Go to {general.js} in controllers folder
    1) Import {User.js} from models folder
    2) Setup async function with request and response for manipulate User fields in database
    3) Create catch up error
5) Adding User information which prepare on {index.js} in data folder to MongoDB
    1) Setup {index.js} in server folder to import raw User data in one time to MongoDb
      ***Remind this below track target used onetime after upload to MongoDB must be markdown on code**
    2) Unmark track to add User to database : User.insertMany(dataUser), here with link <D:\WorkShop\MERN\Me simple app\MERN Dashboard\mernDashboard\server\index.js>
      ***Code above must markdown at 1:41:20 before run server on index.js in server folder : npm run dev**
    3) Start backend server : npm run dev
   ***Get error : errors:496 ErrorCaptureStackTrace(err), Error [ERR_MODULE_NOT_FOUND]: Cannot find module***
      Solve err : corrected path of general.js on controllers folder which missed spell as "contollers"
   ***Get error : E11000 duplicate key error collection:***
      Solver err : Cancel duplicate userID
    4) We can check existing userID on client side from index.js in state folder on find tab of MongoDb with syntax as: {_id: ObjectId('63701cc1f03239b7f700000e')} --> then press find or enter

6) Setup API Free call to the backend using redux-toolkit
   1) Create {api.js} in state folder
   2) Import createApi, fetchBaseQuery from redux-toolkit
   3) Create getUser functions as :
         createApi,
         useGetUserQuery,
         useGetProductsQuery,
         useGetCustomersQuery,
         useGetTransactionsQuery,
         <!-- useGetGeographyQuery,
         useGetSalesQuery,
         useGetAdminsQuery,
         useGetUserPerformanceQuery,
         useGetDashboardQuery, -->
   4) Create local host port as 3000 by create {.env.local}
      1) Then configuration is as : REACT_APP_BASE_URL=http://localhost:5001
      ***The reason to be create this file because when deploy application this port must set to different meant that when setting server url to rendering this url will be different as this example : <https://simplepiechart.onrender.com>**
   5) Setup {api.js} which set tagTypes as User
   6) Setup "getUser" call back function as (build)=>({getUser:build.query({query:(id)=>...})...})     T(1:47:37)
   7) Last setting is recall to :
      1) router.get("/user/:id", getUser) function in {general.js} in controllers folder
      2) which link to  export const getUser = async (req, res) => {} on {general.js} on routes folder
   8) Go to {index.js} in client folder to import {setupListeners} from redux-toolkit and api from state folder
      1) Setup reducer taq with : [api.reducerPath]: api.reducer,
      2) Then setup middleware with getDefault with ..api.middleware
      3) Setup listener as : setupListeners(store.dispatch)
   9) Go to {index.jsx} in layout folder set import useGetUserQuery from api
      1) Create param as userId and data to handling each userId data
      2) Testing logging data from userId with in {index.jsx} : console.log("data:", data)

   ***Checking with data flow on development tools with Fetxh/XHR will see userID was fetched for example last user is : "63701cc1f03239b7f700000e" is "Shelly" ---> online url : <http://localhost:5001/general/user/63701cc1f03239b7f700000e>***
      3) Now it still fixed as Shelly user which cann't change now
   10) Adding user taq to {index.jsx} in components folder : user={data || {}}
7) Adding user profile to {Sidebar.jsx}
   1) Create user profile on sidebar in {Sidebar.jsx}
   2) Setup profile on bottom of Sidebar
   3) Decorative user profile with text and profile picture
8) Adding user profile to {Navebar.jsx}
   1) Create user profile on navbar in {navbar.jsx} under 3rd IconButton taq
   2) Setup drop down button for logout function
   3) Decorative user profile with logout button
   ***Here complete setup User-Profile -layout**

## ERD Diagram and Data Modeling : Create Products page 2:10:04
<!-- Remind that all data that upload to MongoDB come from {index.js} in server/data folder
   From taq : import {
                        dataUser,
                        dataProduct,
                        dataProductStat,
                        dataTransaction,
                        dataOverallStat,
                        dataAffiliateStat,
                     } from "./data/index.js" -->

<!-- Start Client setup Section -->
1) Explain about SQL format and NoSQL format using Lucidchart or Draw.io webpage
   <https://lucid.app/lucidchart/81ff5432-cc50-4c41-a7b8-7258fec1e630/view?page=0_0#>

## Products Page 2:20:00

1) On server side create {Product.js} in models folder
2) Inside {Product.js} file
   1) Import mongoose
   2) Create Product schema with ProductSchema name
   3) Create ProductSchema components as
         name: String,
         price: Number,
         description: String,
         category: String,
         rating: Number,
         supply: Number,
         timestamps: true,
3) Create {ProductStat.js} in models folder
   1) Import mongoose
   2) Create ProductStat schema with ProductStatSchema name
   3) Create ProductStatSchema components as
         productId: String,
         yearlySalesTotal: Number,
         yearlyTotalSoldUnits: Number,
         year: Number,
         monthlyData : [],
         dailyData : [],
         timestamps: true
4) Go to {index.js} in server folder
   1) Import Product and ProductStat to mongoDB
   2) Adding dataProduct and dataProductStat
   3) Export dataProduct and dataProductStat to MongoDB
   4) Check data was upload to mongoDB which dataProduct and dataProductStat will include data 30 set
5) Setup {client.js} in routes folder
   1) Import express
   2) Import getProduct
   3) Create param : const router = express.Router()
   4) Create get route with : router.get("/products", getProducts);
6) Setup {clinent.js} in controllers folder
   1) Import Product and ProductStat
   2) Create async function for getProduct as : const getProducts = async (req, res) =>{try{}catch(error){}}
   3) Adding Product information and ProductStat to product page as :
      1) const products = await Product.find()
      2) const productsWithStats = await Promise.all()
   4) Mapping to productId: product._id
   5) Return product information
   6) Return status of page as 200 code : res.status(200).json(productsWithStats)
***Try to understanding by Database diagram as <https://lucid.app/lucidchart/81ff5432-cc50-4c41-a7b8-7258fec1e630/view?page=0_0#>**

7) Back to frontend(client) to render Product page
   1) Go to {api.js} in state folder then setup Product to point to redux/toolkit on database
   2) In {api.js} adding Products to tagTypes
   3) Setup getProduct to query a product : getProducts: build.query({...})
   4) Then export useGetProductsQuery as api
   5) Go to {App.js} in src folder to setup product for render page
      1) Import Product from scenes/products
      2) Setup route path to : Route path to product
   6) Create products folder in scenes
   7) Create {index.jsx} in products folder
   8) Setup Product and Products page in {index.jsx} file using "rafce" shortkey
      1) Import tools from @mui/materials, Header, useGetProductsQuery
      2) Create Product schema with :_id,name,description,price,rating,category,supply,stat,
      3) Create Products to Mapping each product
   ***Card component : <https://mui.com/material-ui/react-card/>
      4) Import Header for Products page from components folder
   9) Adding {Header.jsx} in components folder
   10) Setup {Header.jsx} file by import @mui/material
       1) Create Title and Subtile
       2) Decorative with Box and Typography
       3) All of Header setup for decoration on Header of each page name(Title and subTitle)

## Customers Page 3:02:41 --> Try to undestand route setup each file that involved this Customer setup
<!-- Grap data of User from backend and Show on data list from @mui/materials -->
1) Go to {client.js} file in routes folder import getCustomer and Create Customer route
2) Go to {client.js} file in controllers folder
   1) Import User from models {User.js}
   2) Setup getCustomer function to handling customers login
3) Create customers on {api.js} file in state folder 
   1) Adding customers to tagTypes
   2) Create getCustomer function
   3) Export useGetCustomersQuery
4) Go to {App.js} file in src folder(Frontend) to setup rendering Customers
   1) Import customer from "scenes/customers"
   2) Create route path for customers
5) Create customers folder in client/src/scenes
   1) Create {index.jsx} file in customers folder
   2) Import react, @mui/material, Header, @mui/x-data-grid
   ***Tool to show as list page : <https://mui.com/x/react-data-grid/>***
   3) Create function with shortkey "rafce" and set name as Customers
   4) Setup customer fields as : _id, name, email, phoneNumber, country, occupation and role
   5) Decorative Customer page with DataGrid as List format

## Transactions Page 3:23:26

1) Go to {client.js} file in routes folder import getTransaction and Create Customer route
2) Go to {client.js} file in controllers folder
   1) Import Transaction from models {Transaction.js}
   2) Setup getTransaction function to handling Transactions login
3) Create Transactions on {api.js} file in state folder 
   1) Adding Transactions to tagTypes
   2) Create getTransaction function
   3) Export useGetTransactionsQuery
4) Go to {App.js} file in src folder(Frontend) to setup rendering Transactions
   1) Import Transaction from "scenes/Transactions"
   2) Create route path for Transactions
***Skip to see how to setup Graph***
5) Create {DataGridCustomToolbar.jsx} in components folder
   1) 
6) Create Transactions folder in client/src/scenes
   1) Create {index.jsx} file in Transactions folder
   2) Import react, @mui/material, Header, @mui/x-data-grid
   ***Tool to show as list page : <https://mui.com/x/react-data-grid/>***
   3) Create function with shortkey "rafce" and set name as Transactions
   4) Setup Transaction fields as : _id, name, email, phoneNumber, country, occupation and role
   5) Decorative Transaction page with DataGrid as List format

## Geography Page 4:05:00

***Skip to see how to setup Graph***

1) Go to {client.js} file in routes folder import getGeography and Create Customer route
2) Go to {client.js} file in controllers folder
   1) Import Geography from models {Geography.js}
   2) Setup getGeography function to handling Geographys login
3) Create Geographys on {api.js} file in state folder 
   1) Adding Geographys to tagTypes
   2) Create getGeography function
   3) Export useGetGeographysQuery
4) Go to {App.js} file in src folder(Frontend) to setup rendering Geographys
   1) Import Geography from "scenes/Geographys"
   2) Create route path for Geographys
5) Create geography folder in client/src/scenes
   1) Create {index.jsx} file in geography folder
   2) Import react, @mui/material, Header, @mui/x-data-grid
   ***Tool to show as list page : <https://mui.com/x/react-data-grid/>***
   3) Create function with shortkey "rafce" and set name as Geographys
   4) Setup Geography fields as : _id, name, email, phoneNumber, country, occupation and role
   5) Decorative Geography page with DataGrid as List format
<!-- End Client setup Section -->

<!-- Start Sales setup Section -->
## Overview Page 4:27:18

   <!-- Backend Setup -->
1) Go to models folder in server folder
   1) Create {OverallStat.js} file
   2) In {OverallStat.js} file create OverallStatSchema
   3) Create schema field as :
      - totalCustomers: Number,
      - yearlySalesTotal: Number,
      - yearlyTotalSoldUnits: Number,
      - year: Number,
      - monthlyData: [{}],
      - dailyData: [{}],
      - salesByCategory: {},
      - { timestamps: true }
2) Go to {index.jx} file in server folder
   1) Import OverallStat from "./models/OverallStat.js"
   2) Upload data (one-time) dataOverallStat from data/index.js
   3) Uncomment taq : OverallStat.insertMany(dataOverallStat)
   4) Save file and comment to protect re-upload : 4:31:09
3) Go to {sales.js} file in routes folder import getSales and Create sales route
4) Go to {sales.js} file in controllers folder
   1) Import OverallStat from models folder in {OverallStat.js} file
   2) Setup getSales function to handling OverallStats login and ErrorHandling
   <!-- Frontend Setup -->
5) Create Sales on {api.js} file in state folder
   1) Adding Sales to tagTypes
   2) Create getSales callBack function
   3) Export useGetSalesQuery
6) Go to {App.js} file in src folder(Frontend) to setup rendering Overview
   1) Import Overview from "scenes/overview"
   2) Create route path for /overview
7) Create overview folder in client/src/scenes
   1) Create {index.jsx} file in overview folder
      1) Creat "rafce" template function
      2) Import react, @mui/material, Header, OverviewChart
      3) Create title as "VIEW" and subtitle as "Overview of general revenue and profit"
      4) Decorative overview page
   2) Create {OverviewChart.jsx} in components folder
   ***Get error not install @nivo/line solve by : npm install @nivo/line @nivo/core --legacy-peer-deps***
      1) Create "rafce" template function
      2) Create function name as OverviewChart
      3) Import react, @mui/material, @nivo/line, state/api
      4) Install nivo line chart : npm i @nivo/line ---> Normally case, If didn't error appeared
      5) Setup line chart as : totalSalesLine and totalUnitsLine
      6) Decorative overview page
   3) Setup changing chart type on {index.jsx} in geography folder by copy theme section then place under data={view === "sales" ? totalSalesLine : totalUnitsLine} function
   4) Import react, @mui/material, Header, @mui/x-data-grid
   ***Tool to show as list page : <https://mui.com/x/react-data-grid/>***
   5) Create function with shortkey "rafce" and set name as Overview
   6) Setup OverallStat fields as : _id, name, email, phoneNumber, country, occupation and role
   7) Decorative OverallStat page with DataGrid as List format

## Daily Page 5:02:00

   <!-- Frontend Setup -->
1) Go to scenes folder create daily folder
   1) Create {index.jsx} in daily folder
   2) Import react, @mui/material, Header, @nivo/line, state/api, react-datepicker
   3) Create Daily callBack function
   4) Decorative Daily page
   ***Daily page don't need to create on controllers folder and api.js in state folder because this page don't show on main Dashboard**
2) Go to {App.js} file in src folder(Frontend) to setup rendering Daily page
   1) Import Daily from "scenes/daily"
   2) Create route path for /daily
***(imported as 'findDOMNode') was not found in 'react-dom'***
***cause is : depreciate version***
***solve by used : npm install react-datepicker@latest***

<!-- ***No need Backend Setup -->
**********************Good thing for redux toolkit************************************************
***It shared data which no need to seperate data on each page such Overview, Daily, Monthly and***
***Breakdown pages which it will save our money from database data size------------------------***
**************************************************************************************************

## Monthly Page 5:17:20

<!-- Frontend Setup -->
1) Go to scenes folder create monthly folder
   1) Create {index.jsx} in monthly folder
   2) Import react, @mui/material, Header, @nivo/line, state/api
   3) Create Monthly callBack function
   4) Decorative Monthly page
   ***Monthly page don't need to create on controllers folder and api.js in state folder because this page don't show on main Dashboard**
2) Go to {App.js} file in src folder(Frontend) to setup rendering Monthly page
   1) Import Monthly from "scenes/monthly"
   2) Create route path for /monthly

<!-- ***No need Backend Setup -->
**********************Good thing for redux toolkit************************************************
***It shared data which no need to seperate data on each page such Overview, Daily, Monthly and***
***Breakdown pages which it will save our money from database data size------------------------***
**************************************************************************************************

## Breakdown Page 5:22:39

<!-- Frontend Setup -->
1) Go to {App.js} file in src folder(Frontend) to setup rendering Breakdown page
   1) Import Breakdown from "scenes/breakdown"
   2) Create route path for /breakdown
2) Go to scenes folder create breakdown folder
   1) Create {index.jsx} in breakdown folder
   2) Import react, @mui/material, Header, @nivo/line, state/api
   3) Create breakdown callBack function
   4) Decorative breakdown page
3) Go to components folder create {BreakdownChart.jsx} file
   1) Import react, @nivo/pie, @mui/material, state/api
   2) Create BreakdownChart callBack function
   3) Decorative BreakdownChart

<!-- ***No need Backend Setup -->
**********************Good thing for redux toolkit************************************************
***It shared data which no need to seperate data on each page such Overview, Daily, Monthly and***
***Breakdown pages which it will save our money from database data size------------------------***
**************************************************************************************************
<!-- End Sales setup Section -->

<!-- Start Management setup Section -->
## Admin Page 5:37:15

   <!-- Backend setup -->
1) Go to {management.js} in routes folder
   1) Import express, getAdmin
   2) Create router for : getAdmins
2) Go to {management.js} in controllers folder
   1) Import mongoose, User.js, Transaction.js
   2) Create callBack fucntion for getAdmins to tracking Events and errorHandling
   <!-- Frontend Setup  -->
3) Go to {api.js} in state folder
   1) Adding Admin to taqTypes;[]
   2) Create Admin callBack function
   3) Export useGetAdminsQuery
4) Go to {App.js} in src folder
   1) Import Admin
   2) Create route path for Admin
5) Go to scenes folder
   1) Create admin folders
   2) Create {index.jsx} in there
   3) On {index.jsx} in admin folder
      1) Import react, @mui/material, @mui/x-data-grid, state/api, components/Header, components/DataGridCustomColumnMenu
      2) xx
   4) Create {DataGridCustomColumnMenu.jsx} in components folder
      1) Import @mui/x-data-grid tools set
      2) Create callBack function to handling CustomColumnMenu
   ***Get error : ERROR in ./src/components/DataGridCustomColumnMenu.jsx 16:36-54 export 'GridFilterMenuItem' (imported as 'GridFilterMenuItem') was not found***
   ***Solve by install packages : npm install react@18.2.0 react-dom@18.2.0 @mui/material@5 @mui/icons-material@5 @mui/x-data-grid@5.17.26 react-datepicker@4.16.0***

## Performance Page 5:48:03

 <!-- Backend setup -->
1) Create {AffiliateStat.js} in models folder
   1) Create AffiliateStatSchema using mongoose.Schema
   2) Go to {index.js} in server folder
      1) Import AffiliateStat
      2) Uncomment : AffiliateStat.insertMany(dataAffiliateStat) to update data to MongoDB
      3) Save file to upload
      4) Comment again to protect re-upload data
2) Go to {management.js} in routes folder
   1) Import express, getUserPerformance
   2) Create router for : getUserPerformance
3) Go to {management.js} in controllers folder
   1) Import mongoose, User.js, Transaction.js
   2) Create callBack fucntion for getUserPerformance to tracking Events and errorHandling
   <!-- Frontend Setup  -->
4) Go to {api.js} in state folder
   1) Adding Performance to taqTypes;[]
   2) Create Performance callBack function
   3) Export useGetUserPerformanceQuery
5) Go to {App.js} in src folder
   1) Import Performance
   2) Create route path for Performance
6) Go to scenes folder
   1) Create performance folders
   2) Create {index.jsx} in there
   3) On {index.jsx} in performance folder
      1) Import react, @mui/material, @mui/x-data-grid, state/api, components/Header, components/DataGridCustomColumnMenu
      2) xx
   4) Create {DataGridCustomColumnMenu.jsx} in components folder
      1) Import @mui/x-data-grid tools set
      2) Create callBack function to handling CustomColumnMenu

<!-- End Management setup Section -->

## Dashboard Page 6:09:21

   <!-- Backend setup -->
1) Go to {general.js} in routes folder
   1) Import getDashboardStats
   2) Create router for getDashboardStats
2) Go to {general.js} in controllers folder
   1) Import OverallStat, Transaction
   2) Create callBack function for getDashboardStats

   <!-- Frontend Setup  -->
3) Go to {api.js} in state folder
   1) Adding Dashboard to tagTypes
   2) Create getDashboard function to handling Dashboard
   3) Export useGetDashboardQuery to render dashboard
4) Go to {index.jsx} in scenes/dashboard folder
   1) Import react, components/FlexBetween, components/Header, @mui/icons-material, @mui/material, @mui/x-data-grid, components/BreakdownChart, components/OverviewChart, state/api, components/StatBox
   <!-- Adding Data : Total customers, Sales Today, Monthly Sales, Yearly Sales data 6:25:37-->
5) Create {StatBox.jsx} in components folder 
   1) Import react, @mui/material, ./FlexBetween
   2) Create StatBox function to handling : Total customers, Sales Today, Monthly Sales, Yearly Sales data
   ***Come back to see process to pick up each dashbord elements and show them to gether to understand manipulate data flow**
   <!-- Adding Data : Transaction 6:40:45 -->
6) Go to {index.jsx} in transactions folder
   1) Copy DataGrid components and place to {index.jsx} in dashboard
   2) Select only loading, getRowId, rows, columns
   <!-- Adding Data : Pie Chart 6:40:50 -->
7) Setup Pie Chart to render in dashboard
   1) Import Pie chart : BreakdownChart isDashboard={true}

## Deployment on Render.com 6:44:05

1) Go to Webside <render.com> : Is one way to post frontend/backend api to also can use <railway.app>
2) Before render must check .gitignore :
   1) Frontend(client) must include : .env.local
   2) Backend must include : /node_modules and .env
3) remove .git folder in project folder before upload : this case is mernDashboard
4) Sign in <render.com> with GitHub account : <pramote.s@windowslive.com>
5) On main project folder(mernDashboard)
   1) Run git : git init
   2) Go to GitHub create new repository : Bambo0o0o/<Repository_name>
   3) Keep default Public and others then click : Create repository
   4) Then follow these step :
      1) <!-- Create new GitHub -->
      2) git init
      3) git add .
      4) git commit -m "first commit"
      5) git branch -M main
      6) git remote add origin https://github.com/Bambo0o0o/deployDashBoard.git
      7) git push -u origin main
   5) Check .env don't existed on GitHub repository
   6) Concept using GitHub to stored our code before sending it to Render.com and In there both frontend/backend will create .env and vars it self to link between frontend and backend data which following to this diagram : <https://1drv.ms/i/c/691f3d6ad160c142/IQR89w-KHvJrQ7EiQ8FunKZBAapCKzPa5fLcccIlBshP3fs?width=578&height=573>
      <!-- Backend setup on Render  -->
   7) Go to <render.com> then select "Web service" for Backend
      1) Click Connect to our Github
      2) Then select Only select repositories
         1) On new web service Name as : admin-backend
         2) Region : Oregon
         3) Branch : master
         4) Root directory (check on Github will be server folder) : server
         5) Environment : Node
         6) Build Command : server/npm install
         7) Start command : npm run start
         8) Package select : Free
         9) Advance option add environment :
            - Key : MONGO_URL
            - value (Mongo URL as we created) : mongodb+srv://devillasu_db_user:rmBK7Ut9nmzNy2fY@dashboard0.7a9g7jo.mongodb.net/?appName=dashboard0
         10) Adding another environment
            - Key : PORT
            - Value : 5001
            - On Web service click : Create Web Service
      3) Adding IP address to mongoDB by click on(Will get 3 IP Address) : "Connect button" on Render.com
         1) Go to MongoDB go to Network access then IP Access List
         2) Click on "Add IP Address" place on "Access List Entry" by 3 IP Address
         3) Then Render will show on logs(When complete) as : Server Port 5001

      <!-- Frontend setup on Render  -->
   8) Go to <render.com> then select "Static Site" for Frontend
      1) Click Connect to our Github
         1) On new "Static Site" Name as : admin-frontend
         2) Region : Oregon
         3) Branch : master
         4) Root directory (check on Github will be server folder) : client
         5) Build Command : client/npm install
         6) Start command : npm run build
         7) Publish directory : build
         8) Advance option add environment :
            - Key : REACT_APP_BASE_URL
            - value (URL created from Render) : Get from create backend
            - On Web service click : Create Static Site
         ***Error "not found /build directory" come from .gitignore cancel this folder update to Github : Solve by Adding build command on render as "npm install && npm run build"***
         9) Getting render frontend web : <https://admin-frontend-w9kw.onrender.com>

## Completed and Deployed MERN Stack Admin Dashboard 6:57:57

