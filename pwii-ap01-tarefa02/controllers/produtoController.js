const db = require('../config/db.config');
const Produto = db.produto;

// Listar todos os Produtos
exports.produtosList = async(req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json({ produto: produtos });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Detalhar um Produto
exports.produtosRead = async(req, res) => {
  try {
    const produto = await Produto.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json({ produto: produto });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Criar um Produto
exports.produtosCreate = async(req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json({ produto: produto });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Atualizar um Produto
exports.produtosUpdate = async(req, res) => {
  try {
    const produto = await Produto.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(201).json({ produto: produto });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Apagar um Produtos
exports.produtosDelete = async(req, res) => {
  try {
    const produto = await Produto.destroy({
      where: {
          id: req.params.id
      }
    });
    res.status(201).json({ message: 'Apagado com Sucesso!' });
  } catch(err) {
    res.send({ message: err.message });
  }
};

