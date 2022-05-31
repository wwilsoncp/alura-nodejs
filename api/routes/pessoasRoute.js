const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criarUmaPessoa)
router.put('/pessoas/:id', PessoaController.atualizarUmaPessoa)
router.delete('/pessoas/:id', PessoaController.apagarPessoa)

module.exports = router