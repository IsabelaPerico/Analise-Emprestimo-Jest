const analisarEmprestimo = require('./emprestimo');

describe('Teste de aprovação de emprestimo', () => {
    
    // O CT01 fica dentro do texto, e tem uma vírgula antes do () =>
    it('CT01: Deve aprovar como cliente VIP para score alto e renda alta', () => {
        const resultado = analisarEmprestimo(6000, 800);
        expect(resultado).toBe("Aprovado: Cliente VIP!");
    })
    it('CT02: Deve negar emprestimo de o score for menor 400', () => {
        const resultado = analisarEmprestimo (6000, 300)
        expect(resultado).toBe("Negado: Score muito baixo!")
    })
    it('CT03: Deve aprovar como cliente padrão para score bom, mas renda < 5000', () => {
        const resultado = analisarEmprestimo(3000, 700)
        expect(resultado).toBe("Aprovado: Cliente padrão!")
    })
})