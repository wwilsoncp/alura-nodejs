const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criarUmaPessoa)
router.put('/pessoas/:id', PessoaController.atualizarUmaPessoa)
router.delete('/pessoas/:id', PessoaController.apagarPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criarUmaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarUmaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)

module.exports = router