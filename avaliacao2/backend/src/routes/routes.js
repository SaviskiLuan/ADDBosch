import express from 'express';
import funcionariosRoutes from './funcionarios.js';

export default function (app) {
    app.use('/funcionarios', funcionariosRoutes);
}  
