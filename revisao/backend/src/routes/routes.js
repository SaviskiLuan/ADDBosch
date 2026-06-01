import express from 'express';
import produtoRoutes from './produto.js';

export default function (app) {
    app.use('/produto', produtoRoutes);
}  
