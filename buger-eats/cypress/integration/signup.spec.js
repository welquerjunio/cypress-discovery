//Caso de Teste: Cadastro de entregador
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', ()=>{

    //beforeEach(function(){
      //  cy.fixture('deliver').then((d)=>{
        //    this.deliver = d
        //})
    //})

    //Canário de teste 1
    it.skip('User should be deliver', function(){
        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
         //Valida o texto após o upload da CNH
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signup.modalContentShouldBe(expectedMessage)   
    })
    //Cenário de teste 2
    it.skip('Incorrect document', function(){
        var deliver = signupFactory.deliver()
        deliver.cpf = '000000000aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
        
    })
    // Cenário de Teste 3
    it.skip('Incorrect email', function(){
        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
        
    })
    // Cenário de Teste 4
    it('Required fields', function(){
        SignupPage.go()
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('É necessário informar o nome')
        SignupPage.alertMessageShouldBe('É necessário informar o CPF')
        SignupPage.alertMessageShouldBe('É necessário informar o email')
        SignupPage.alertMessageShouldBe('É necessário informar o CEP')
        SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        SignupPage.alertMessageShouldBe('Selecione o método de entrega')
        SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })
})