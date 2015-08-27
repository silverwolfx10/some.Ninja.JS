/**
 * $some
 * 
 * Testa se algum elemento do array passa o teste implementado pela função
 * fornecida a funcao curry
 * 
 * @module $some
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *      $some([1, 2, 3, 4, 5], $lambda('(a) => a > 5'));
 * 
 */
this.Ninja.module('$some', ['$curry'], function ($curry) {
  
  /**
   * Testa se algum elemento do array passa o teste implementado pela função
   * fornecida
   * 
   * @public
   * @method $some
   * @param {Array} a Colecao de valores que seram testato
   * @param {Function} b Funcao predicado
   * @param {Boolean} Retorna true se pelo menos um teste passar
   * @example
   * 
   *        $some([1, 2, 3, 4, 5], $lambda('(a) => a > 5'));
   * 
   */
  function some(a, b) {
    return a.some(b);
  }
  
  /**
   * Revelacao do objeto $some, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(some);
  
});
