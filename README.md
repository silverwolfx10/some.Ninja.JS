# some.Ninja.JS

Testa se algum elemento do array passa o teste implementado pela função fornecida a funcao curry

```javascript
this.Ninja(['$some'], function ($some) {
  console.log($some([1, 2, 3, 4, 5], $lambda('(a) => a > 5')));
});
```
