import sirv from 'sirv';
import polka from 'polka';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
// var proxy = require('express-http-proxy');
// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware');
var apiProxy = createProxyMiddleware({target: 'http://localhost:12000', changeOrigin:true, logLevel : 'debug',selfHandleResponse:true,
					onProxyReq: function (proxyReq,req,res) {
						// console.log("one");
						if(req.headers)
						{
							// console.log(req.headers);
							if(req.headers.authorization)
							{
								console.log("PROXY: req> setting up authorization");
								proxyReq.setHeader('Authorization',req.headers.authorization);
							}
						}	
					},
					selfHandleResponse:true,
					onProxyRes : responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
					    // detect json responses
					    try{
						    	// if (proxyRes.headers['content-type'] === 'application/json') {
							      let data = JSON.parse(responseBuffer.toString('utf8'));

							      var tokbodyObj=data;
						// 				// console.log(tokbodyObj);
								if(tokbodyObj.status=="success" && tokbodyObj.user && tokbodyObj.user.token)
								{
									// console.log("tokenn:"+tokbodyObj.user.token);
									console.log("PROXY: res> setting up xtoken"+tokbodyObj.user.token)
									// console.log(tokbodyObj.user.token)
									res.setHeader('xtoken', tokbodyObj.user.token);
									// res.setHeader('Set-Cookie', "token="+tokbodyObj.user.token);
								}

						      // manipulate JSON data here
						      // data = Object.assign({}, data, { extra: 'foo bar' });

						      // // return manipulated JSON
						      return JSON.stringify(data);
					    	
					    }
					    catch(e){
					    	console.log("inside catch");
					    	console.log(e);
					    }

					    // return other content-types as-is
					    return responseBuffer;
					  })
					// onProxyRes: function (proxyRes,req,res) {
					// 	var body = "";
					// 	console.log(proxyRes);
					// 	// console.log("proxy results");

					// 	// console.log(proxyRes.headers);
					// 	proxyRes.on('data', function(data) {
					// 		data = data.toString('utf-8');
					// 		body += data;
							
					// 		// if(proxyRes.headers && proxyRes.status==200)	
					// 	});	

					// 	proxyRes.on('end',()=>{
					// 		 try
					// 			{
									
					// 				var tokbodyObj=JSON.parse(body);
					// 				// console.log(tokbodyObj);
					// 				if(tokbodyObj.status=="success" && tokbodyObj.user && tokbodyObj.user.token)
					// 				{
					// 					// console.log("tokenn:"+tokbodyObj.user.token);
					// 					console.log("PROXY: res> setting up xtoken")
					// 					console.log(tokbodyObj.user.token)
					// 					res.setHeader('xtoken', tokbodyObj.user.token);
					// 					// res.setHeader('Set-Cookie', "token="+tokbodyObj.user.token);
					// 				}
					// 				console.log(body);
					// 			}
					// 			catch(e)
					// 			{
					// 				console.log("not a json response");
					// 				// console.log(body);
					// 				console.log(e);
					// 			}
					// 	});
								
					// },
});

var socketProxy = createProxyMiddleware('/socket.io',{target: 'http://localhost:12000',changeOrigin:true,ws:true, logLevel : 'debug',
					onProxyReq: function (proxyReq,req,res) {
						console.log("PROXY: req> proxy for socket");
						// console.log(req.headers);
						if(req.headers)
						{
							// console.log(1);
							// proxyReq.setHeader('Authorization',req.headers.authorization);
						}
						// console.log(2);
						
				

					},
					onProxyRes: function (proxyRes,req,res) {
						// console.log("inside response for socket");
						// console.log(3);
						// console.log(proxyRes.headers);

									
					},
					// onError: function(a,b,c){
					// 	console.log(a);
					// 	// console.log(b);
					// 	// console.log(c);
					// }
});

let { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
// PORT = 16000

const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/webinar";


mongoose
    .connect(MONGO_URI, { useUnifiedTopology: true,useNewUrlParser: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));


const session = require("express-session");
// import * as connectMongo from 'connect-mongo'; depricated
import { default as connectMongoDBSession} from 'connect-mongodb-session';

const MongoDBStore = connectMongoDBSession(session);

var store = new MongoDBStore({
  uri: MONGO_URI,
  collection: 'sessions'
});


var sessionMiddleWare=session({
	key:'express.sid',
	secret: "neoned71",
	resave: false,
	saveUninitialized: true,
	store: store
});

var app=express(); // You can also use Express
// app.use('/remote',a, proxy('https://drawpad.neoned71.com/'));
app.use('/socket.io',socketProxy);
app.use('/api',apiProxy);




// for json post form data
//app.use(sessionMiddleWare);



// app.use(express.urlencoded({ extended: false }));

// const passport = require("../../../src/passport/setup.js");
// app.use(passport.initialize());
// app.use(passport.session());



app.use(express.json());
function a(req,res,next){
	console.log("a");
	next();
}

//sapper middleware

app.use(express.static('static'),sapper.middleware({ session:(req,res)=>({user: JSON.stringify(req.user)}) }) );


console.log("a");
/* app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
*/

app.listen(PORT);
