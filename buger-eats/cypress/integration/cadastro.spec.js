// Teste de Cadastro de entregador
import SignupPage from '../pages/SignupPage'

describe('Cadastro', ()=>{
    //Caso de teste 1
    it('Usuário deve se tornar um entregador', ()=>{
        
        var deliver = {
            nome: 'Fernando Papito',
            cpf: '00000000078',
            email:'papito@hotmail.com',
            whatsapp:'11999999999',
            address:{
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh:'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
         //Valida o texto após o upload da CNH
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signup.modalContentShouldBe(expectedMessage)   
    })
    //Caso de teste 2
    it('CPF incorreto', ()=>{

        var deliver = {
            nome: 'Fernando Papito',
            cpf: '000000000AA',
            email:'papito@hotmail.com',
            whatsapp:'11999999999',
            address:{
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh:'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
        
    })
})