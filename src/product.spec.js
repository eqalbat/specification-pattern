import Product from './product.js'
import { Spec } from './specification.js'

describe('제품 스펙 테스트', () => {
  const products = [
    new Product(100, "widgetA"),
    new Product(1100, "widgetB"),
    new Product(2000, "widgetA"),
    new Product(300, "widgetB"),
  ]
  

  test('제품에 A란 명칭이 포함되지 않은 상품 또는 가경이 1000원이상인 상품', () => {
    // 제품명에 pattern이 포함되어야한다.
    const nameContains = pattern => product => product.name.includes(pattern)
    // 제품이 해당 가격보다 높아야한다.
    const highPrice = product => product.price > 1000;
  
    const spec = new Spec(nameContains(`A`)).not().or(highPrice);

    const product = products.filter(x => spec.isSatisfiedBy(x)).map(Product.info);
    
    expect(product).toEqual([
      { name: 'widgetB', price: 1100 },
      { name: 'widgetA', price: 2000 },
      { name: 'widgetB', price: 300 }
    ]);
  })
})
