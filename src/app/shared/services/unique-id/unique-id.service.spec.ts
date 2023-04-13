import { UniqueIdService } from "./unique-id.service";

// describe('O artefato que queremos testar', () => {
//   it('Primeira condição que queremos testar', () => {

//   });
// });

describe(UniqueIdService.name, () => {
  /*
  Dentro do 'it()' deve ser especificada em string
  a regra esperada para determinada função usando
  o seguinte padrão:
  '<nome_função> should <ação_esperada> when <evento/situação>'
  */
  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    // Instancia uma variável com o serviço ou component a ser testado
    const service = new UniqueIdService;
    const id = service.generateUniqueIdWithPrefix('app');

    /*
    Usa-se o 'expect()' para declarar o que seria esperado,
    utilizando uma outra função após o '.' (ponto final)
    como se fosse um pipe.
    Seu 1º param é o valor a ser comparado a algo
    */
    expect(id).toContain('app-');
  });
});

