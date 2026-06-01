export function validateFuncionario(req, res, next) {

    const {nome,sobrenome,setor,funcao} = req.body;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({error: "Nome é obrigatório"});
    }

    if (!sobrenome || sobrenome.trim() === "") {
        return res.status(400).json({error: "Sobrenome é obrigatório"});
    }

    if (!setor || setor.trim() === "") {
        return res.status(400).json({error: "Setor é obrigatório"});
    }

    if (!funcao || funcao.trim() === "") {
        return res.status(400).json({error: "Função é obrigatória"});
    }

    next();
}