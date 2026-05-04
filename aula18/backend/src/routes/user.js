const express = require('express')
import express, { Router } from 'express'

const router = express.Router()
const users = ["Diego", "Erich", "Leticia", "Luan"]

router.get('/users', (req, res) => {
    res.send(users)
})

export default router

