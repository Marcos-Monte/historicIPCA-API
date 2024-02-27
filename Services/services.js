//Importando coleção de Dados
import historicIpca from '../Data/data.js';

//Funções

// Retonar TODA a coleção de dados 
function returnData() {
    return historicIpca;
}

// Retorna uma coleção filtrada pela propriedade 'ano'
function searchByYear(year) {
    const historic = returnData();
    const historicFilterByYear = historic.filter(
        (item) => item.year === year
    );
    return year ? historicFilterByYear : historic;
}

// Retorna uma coleção filtrada pela propriedade 'id'
function searchById(id) {
    const historic = returnData();
    return historic.find(
        (item) => item.id === id
    )
}

//Retorna um valor de 'Calculo de Reajuste do IPCA'
function calculate(valor, mesInicial, anoInicial, mesFinal, anoFinal) {
    const historic = returnData();
    const historicFilter = historic.filter(
        (item) => {
            if (anoInicial === anoFinal) {
                return item.year === anoInicial && item.month >= mesInicial && item.month <= mesFinal;
            } else {
                return (
                    (item.year === anoInicial && item.month >= mesInicial) ||
                    (item.year > anoInicial && item.year < anoFinal) ||
                    (item.year === anoFinal && item.month <= mesFinal)
                );
            }
        }
    );

    let taxas = 1;
    for (const element of historicFilter) {
        taxas *= (element.ipca / 100) + 1;
    }

    const result = valor * taxas;
    return parseFloat(result.toFixed(2));
}

// Retorna um valor booleano que define se a validação é verdadeira ou falsa.
function validation(valor, mesInicial, anoInicial, mesFinal, anoFinal) {
    if (isNaN(valor) || isNaN(mesInicial) || isNaN(anoInicial) || isNaN(mesFinal) || isNaN(anoFinal)) {
        return true;
    } else if (anoFinal < anoInicial || mesInicial < 1 || mesInicial > 12 || mesFinal < 1 || mesFinal > 12) {
        return true;
    }
    else {
        return false;
    }
}

// Exportando métodos / funções
export { calculate, returnData, searchById, searchByYear, validation };

