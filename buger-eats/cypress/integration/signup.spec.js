//Caso de Teste: Cadastro de entregador
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', ()=>{

    //beforeEach(function(){
      //  cy.fixture('deliver').then((d)=>{
        //    this.deliver = d
        //})
    //})

    //Canário de teste 1
    it('User should be deliver', function(){
        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
         //Valida o texto após o upload da CNH
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signup.modalContentShouldBe(expectedMessage)   
    })
    //Cenário de teste 2
    it('Incorrect document', function(){
        var deliver = signupFactory.deliver()
        deliver.cpf = '000000000aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
        
    })
    // Cenário de Teste 3
    it('Incorrect email', function(){
        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
        
    })
})