//Importando métodos e dependencias
import express from 'express';
import { calculate, searchById, searchByYear, validation } from './Services/services.js';

// Atribuindo recursos da dependencia 'express' a variavel 'app'
const app = express();

//Rotas da API

// Rotas 1: FrontEnd ao consumit API fará calculo de reajusto de IPCA, baseado nas variaveis que vai passar pelo HTTP

//exemplo de EndPoint: http://localhost:3333/historicIPCA/calculo?valor=100&mesInicial=1&anoInicial=2015&mesFinal=11&anoFinal=2015
app.get('/historicIPCA/calculo', (req, res) => {

    // Valores inputados pelo usuário via Front (Http)
    const valor = parseFloat(req.query.valor);
    const dataInicialMes = parseInt(req.query.mesInicial);
    const dataInicialAno = parseInt(req.query.anoInicial);
    const dataFinalMes = parseInt(req.query.mesFinal);
    const dataFinalAno = parseInt(req.query.anoFinal);

    // Estrutura de validação
    if (validation(valor, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno)) {
        // Caso os valores forem invalidos, retornar:
        res.status(400).json({ 'Erro': 'Parâmetros Inválidos' })
    } else {
        // Se os valores forem validos, retornar resultado do calculo:
        const historicCalculate = calculate(valor, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno);
        res.json(historicCalculate)
    }

})

//Rota 2 e 3: Rota 2 mostra todos os elementos da coleção de Dados e Rota 3 faz uma busca e retorna apenas os valores de um 'ano' expecífico

//Exemplo de EndPoint Rota 2: http://localhost:3333/historicIPCA
//Exemplo de EndPoint Rota 3: http://localhost:3333/historicIPCA?year=2016
app.get('/historicIPCA', (req, res) => {

    // Valor inputado pelo usuario via Front (Http)
    const yearByUser = parseInt(req.query.year);

    // Coleção filtrada por ano atribuida a uma variavel
    const historicFilterByYear = searchByYear(yearByUser)

    // Validação: Se a 'coleção filtrada' for maior que zero
    if (historicFilterByYear.length > 0) {
        // Se for maior que zero, retornar:
        res.json(historicFilterByYear)
    } else {
        // Se for zero ou menor, retornar:
        res.status(404).json({ 'Erro': 'Nenhum histórico encontrado!' })
    }
});

//Rota 4: Retorna um único elemento especificado por um ID

//Exemplo de EndPoint: http://localhost:3333/historicIPCA/44
app.get('/historicIPCA/:ID', (req, res) => {

    //// Valor inputado pelo usuario via Front (Http)
    const itemId = parseInt(req.params.ID);

    // Coleção filtrada pelo ID
    const historicFilterById = searchById(itemId);

    // Validação: Se a Coleção Filtrada estiver vazia
    if (!historicFilterById) {
        // Se vazia, retornar:
        res.status(404).send('Nenhum histórico encontrado com o ID especificado')
    } else {
        // Se não estiver vazia, retornar:
        res.json(historicFilterById);
    }
});

// Rota de observação da porta '3333'
app.listen(3333, () => {
    console.log(`Servidor Iniciado`)
})