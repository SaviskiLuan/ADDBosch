import connection from "../../config/db.js";

export const listarFuncionarios = (req, res) => {
    try {
        connection.query("SELECT * FROM funcionarios", (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
                return res.status(200).json(results);
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export const cadastrarFuncionario = (req, res) => {
    try {
        const {nome, sobrenome, setor, funcao} = req.body;
        connection.query("INSERT INTO funcionarios (nome, sobrenome, setor, funcao) VALUES (?, ?, ?, ?)", [nome, sobrenome, setor, funcao], (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: "Funcionário cadastrado com sucesso!"});
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export const atualizarFuncionario = (req, res) => {
    try {
        const { id } = req.params;
        const {nome, sobrenome, setor, funcao} = req.body;
        connection.query("UPDATE funcionarios SET nome = ?, sobrenome = ?, setor = ?, funcao = ? WHERE id = ?", [nome, sobrenome, setor, funcao, id], (error, results) => {
            if (error) {
                return res.status(500).json({
                    error: error.message
                });
            }
            return res.status(200).json({message: "Funcionário atualizado com sucesso!",});
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export const deletarFuncionario = (req, res) => {
    try {
        const { id } = req.params;
        connection.query("DELETE FROM funcionarios WHERE id = ?",[id],(error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(200).json({message: "Funcionário removido com sucesso!"});
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export const listarPorSetor = (req, res) => {
    try {
        const { setor } = req.params;
        connection.query("SELECT * FROM funcionarios WHERE setor = ?",[setor],(error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(200).json(results);
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export default {
    listarFuncionarios,
    cadastrarFuncionario,
    atualizarFuncionario,
    deletarFuncionario,
    listarPorSetor
};