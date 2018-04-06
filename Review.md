# Review Questions

## What is Node.js?

Node.js is a runtime environment that allows us to run JS outside of the browser, letting us make webservers and apps outside of a browser environment.

## What is Express?

Express is a framework that is used to help manage routes and handle requests(makes building APIs easier)
It sits on top of the HTTP server from node.js and makes it simpler to make web apps

## Mention two parts of Express that you learned about this week.

I learned about cusom Middleware, and how to make it/use it.

## What is Middleware?

Middleware is software that sits between the action creators and the reactor stack

## What is a Resource?

When building RESTful APIs resources are a place you get your info from, meaning Users, Products, Orders, Shipping methods, Shipping companies, etc.

## What can the API return to help clients know if a request was successful?

Successful: 200 - 299 is the range of successful status codes.

## How can we partition our application into sub-applications?

By breaking our application down into express routers, we would then classify them as 'sub-applications.'

## What is CORS and why do we need it?

CORS is 'Cross Origin Resource Sharing' that allows users to access selected data/resources from a server different than the one they're working on.
