import { UniqueIdService } from "./unique-id.service";

// describe('O artefato que queremos testar', () => {
//   it('Primeira condição que queremos testar', () => {

//   });
// });

describe(UniqueIdService.name, () => {

  let service = new UniqueIdService();
  /*
  beforeEach() -> antes de executar cada teste,
  o que estiver dentro da arrow-function será executado
  para cada um dos casos de testes
  */
  beforeEach(() => {
    service = new UniqueIdService();
  });

  /*
  Dentro do 'it()' deve ser especificada em string
  a regra esperada para determinada função usando
  o seguinte padrão:
  '<nome_função> should <ação_esperada> when <evento/situação>'
  */
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    // Instancia uma variável com o serviço ou component a ser testado
    const id = service.generateUniqueIdWithPrefix('app');

    /*
    Usa-se o 'expect()' para declarar o que seria esperado,
    utilizando uma outra função após o '.' (ponto final)
    como se fosse um pipe.
    Seu 1º param é o valor a ser comparado a algo
    */
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    // Set() -> não aceita valores iguais
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0', '1'];

      emptyValues.forEach(emptyValue =>
        expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow()
      );
    })
});

