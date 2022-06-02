import { ViaCep } from "./ViaCep"

describe('Via Cep', () => {
    const viaCep = new ViaCep();
    const cepGenerico = '01001000' 
    const expectedResponse = {
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    }

    describe('metodo getAddress()', () => {
        test('deve ser do type function', () => {
            expect(typeof viaCep.getAddress).toBe('function')
        }) 

        test('deve retornar o endereço completo', async () => {
            expect(await viaCep.getAddress(cepGenerico)).toEqual(expectedResponse)
        })
    })
})