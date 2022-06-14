// Teste de Cadastro de entregador
import signup from '../pages/SignupPage'

describe('Cadastro', ()=>{

    beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    })
    //Caso de teste 1
    it('Usuário deve se tornar um entregador', function(){
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
         //Valida o texto após o upload da CNH
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signup.modalContentShouldBe(expectedMessage)   
    })
    //Caso de teste 2
    it('CPF incorreto', function(){
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
        
    })
})