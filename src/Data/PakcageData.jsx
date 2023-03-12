import { atom } from "recoil"

export const PackageData = atom({
    key : 'PackageData',
     default : [
    {
     id:1,   
     name : 'lodash',
     discribtion : 'A utility library that provides many helpful functions for working with arrays, objects, and strings.'
    },
    {
        id:2,   
        name : 'express',
        discribtion : 'A fast, minimalist web framework for Node.js that makes it easy to create web applications and APIs.'
       },
       {
        id:3,   
        name : 'react',
        discribtion : 'A JavaScript library for building user interfaces.'
       },
       {
        id:4,   
        name : 'moment',
        discribtion : 'A lightweight and powerful date manipulation library.'
       },
       {
        id:5,   
        name : 'async',
        discribtion : 'A utility module that provides easy-to-use functions for working with asynchronous JavaScript.'
       },
       {
        id:6,   
        name : 'request',
        discribtion : 'A simplified HTTP request client.'
       },
       {
        id:7,   
        name : 'axios',
        discribtion : 'A promise-based HTTP client for making API requests.'
       },
       {
        id:8,   
        name : 'babel',
        discribtion : 'A toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.'
       },
       {
        id:9,   
        name : 'socket.io ',
        discribtion : 'A library that enables real-time, bidirectional and event-based communication between the browser and the server.'
       },
       {
        id:10,   
        name : 'body-parser',
        discribtion : 'A middleware for parsing incoming request bodies in a middleware before your handlers.'
       },
       {
        id:11,   
        name : 'bluebird',
        discribtion : 'A fully featured promise library with performance optimization and useful extensions.'
       },
       {
        id:12,   
        name : 'debug',
        discribtion : 'A debugging utility for Node.js that provides a simple and flexible interface for debugging applications.'
       },
       {
        id:13,   
        name : '',
        discribtion : ''
       },
       {
        id:14,   
        name : 'gulp',
        discribtion : 'A task runner that helps automate repetitive tasks in your development workflow.'
       },
       {
        id:15,   
        name : 'nodemon',
        discribtion : 'A utility that automatically restarts your Node.js application when files change.'
       },
       {
        id:16,   
        name : 'mongoose',
        discribtion : 'A MongoDB object modeling tool designed to work in an asynchronous environment.'
       },
       {
        id:17,   
        name : 'chalk',
        discribtion : 'A library that provides an easy way to add colors to your command line output.'
       },
       {
        id:18,   
        name : 'webpack',
        discribtion : 'A module bundler that helps you manage and optimize your JavaScript applications dependencies.'
       },
       {
        id:19,   
        name : 'joi',
        discribtion : 'A schema description language and data validator for JavaScript objects.'
       },
       {
        id:20,   
        name : 'request-promise ',
        discribtion : 'A simplified HTTP request client that returns a promise.'
       },
       {
        id:21,   
        name : 'underscore',
        discribtion : 'A utility library that provides many helpful functions for working with arrays, objects, and functions.'
       },
       {
        id:22,   
        name : 'fs-extra ',
        discribtion : 'A module that adds file system methods that arent included in the native fs module.'
       },
       {
        id:23,   
        name : 'react-dom',
        discribtion : 'A package that provides DOM-specific methods that can be used with React.'
       },
       {
        id:24,   
        name : 'request-promise-native',
        discribtion : 'A simplified HTTP request client that returns a native ES6 Promise.'
       },
       {
        id:25,   
        name : 'yargs',
        discribtion : ' A command line parser that helps you build interactive command line tools.'
       },
       {
        id:26,   
        name : 'moment-timezone',
        discribtion : ' A plugin for Moment.js that adds timezone support.'
       },
       {
        id:27,   
        name : 'rimraf',
        discribtion : 'A cross-platform tool for removing files and directories.'
       },
       {
        id:28,   
        name : 'body-parser-xml ',
        discribtion : ' A middleware for parsing XML request bodies in a middleware before your handlers.'
       },
       {
        id:29,   
        name : 'commander ',
        discribtion : 'A framework for building command line interfaces in Node.js.'
       },
       {
        id:30,   
        name : 'mocha',
        discribtion : 'A feature-rich JavaScript testing framework.'
       },
       {
        id:31,   
        name : 'debug-favicon',
        discribtion : 'A debugging utility for Node.js that adds a favicon to the browsers address bar when a request is made.'
       },
       {
        id:32,   
        name : 'cookie-parser',
        discribtion : 'A middleware for parsing cookies in a middleware before your handlers.'
       },
       {
        id:33,   
        name : 'glob',
        discribtion : 'A module that helps you find files using glob patterns.'
       },
       {
        id:34,   
        name : 'nodemailer',
        discribtion : 'A module that allows you to send email from your Node.js application.'
       },
       {
        id:35,   
        name : 'sequelize',
        discribtion : 'A promise-based ORM for Node.js that supports multiple databases.'
       },
       {
        id:36,   
        name : 'jsonwebtoken',
        discribtion : 'A JSON Web Token implementation for Node.js.'
       },
       {
        id:37,   
        name : 'passport',
        discribtion : 'An authentication middleware for Node.js that provides a set of strategies for authenticating with various authentication providers.'
       },
       {
        id:38,   
        name : 'helmet',
        discribtion : 'A middleware that helps secure your Express.js applications by setting various HTTP headers.'
       },
       {
        id:39,   
        name : 'moment-range',
        discribtion : 'A plugin for Moment.js that adds date range support.'
       },
       {
        id:40,   
        name : 'compression',
        discribtion : 'A middleware for compressing HTTP responses in your Express.js application.'
       },
       {
        id:41,   
        name : 'winston',
        discribtion : 'A versatile logging library for Node.js.'
       },
       {
        id:42,   
        name : 'react-redux ',
        discribtion : 'A package that provides bindings between React and Redux.'
       },
       {
        id:43,   
        name : 'Validator',
        discribtion : 'Validator is a library of string validators and sanitizers.'
       },
       {
        id:44,   
        name : 'yup',
        discribtion : 'Yup is a schema builder for complex, interdependent validations and transformations.'
       },
       {
        id:45,   
        name : 'jsonwebtoken',
        discribtion : 'Jsonwebtoken is a library to sign, verify and decode JSON Web Tokens.'
       },
       {
        id:46,   
        name : 'bcrypt',
        discribtion : 'Bcrypt is a library to hash and verify passwords with sync, callbacks, and promise interface.'
       },
       {
        id:47,   
        name : 'uuid',
        discribtion : 'UUID is a library to create RFC4122 universally unique identifiers'
       },
       {
        id:48,   
        name : 'glob',
        discribtion : 'Glob is a library to match files using multiple patterns.'
       },
       {
        id:49,   
        name : 'winston',
        discribtion : 'Winston is a simple and universal logging library with support for multiple transports.'
       },
]

})
