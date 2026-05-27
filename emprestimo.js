function analisarEmprestimo(renda, score) {
    if (score < 400) {
        return "Negado: Score muito baixo!";
    }
    if (renda >= 5000 && score >= 700) {
        return "Aprovado: Cliente VIP!";
    }
    // Se não caiu nos anteriores, ele é padrão
    return "Aprovado: Cliente padrão!"; 
}

module.exports = analisarEmprestimo