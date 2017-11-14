# Readable Project

This is the second project in Udacity's React nano-degree. It's built using React, Redux and React Router.
It's a content managment system where users can add, edit, remove posts and comments.


## Getting Up and running

The API server is packed in this repo in the "api-server" folder. 

At the root directory of this repository, run one of the following methods:

### First method

**Note that this method was tested by trying to clone the project again and install it from scratch and it worked very well. As shown in the following image:**

![proof](https://i.imgur.com/TBCuBQI.png "Proof of command working")



1- Install the dependencies (running this command will install the dependecies for both the server and the client):
```
npm run setup
```

2- Start the API server and the development server using this command (This will start both of the server at the same time):
```
npm start
```
---

### Second method

Use yarn instead of npm:
```
yarn setup
```
```
yarn start
```
---

### Thrid method

1- Install client dependencies:
```
yarn
```
or 
```
npm install
```


1- Go to the api-server directory
```
cd api-server
```
2- Install server dependancies:
```
npm install
```
3- Run the server:
```
npm start
```
4- Change the directory back to the root:
```
cd ..
```
5- Install client dependencies:
```
yarn
```
or 
```
npm install
```
6- Run client server:
```
yarn client-start
```
or
```
npm run client-start
```


## Credits and Acknowledgments for the UI

The UI was inspired from different sources:

- [This dashboard design](https://www.uplabs.com/posts/post-dashboard-design) by Ashraf Hossain.
- [Blog UI design](https://ildiesign.deviantart.com/art/Pixelstains-blog-UI-design-595026782) by Ildiesign
- Youtube web application.
- Stackoverflow desktop site.