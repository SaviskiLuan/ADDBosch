const express = require('express')

export default function(app){
    app
    .use(express.json())
    .use('/user', user)
}