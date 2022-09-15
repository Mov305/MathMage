import calculate from './calculate';
import operate from './operate';

test('AC button returns object props equal null', () => {
  const obj = {
    next: null,
    operation: null,
    total: null,
  };
  calculate({}, 'AC');
  expect(obj.next).toBe(null);
});

test('testing addition ', () => {
  const obj = {
    next: 2,
    operation: '+',
    total: 5,
  };
  calculate({ next: '2', operation: '+', total: '3' }, '+');
  expect(obj.next).toBe(2);
});

describe('Test operations with numbers', () => {
  test('  x sign', () => {
    expect(operate(5, 8, 'x')).toBe('40');
  });

  test('÷ sign', () => {
    expect(operate(4, 2, '/')).toBe('2');
  });

  test('+ sign', () => {
    expect(operate(6, 4, '+')).toBe('10');
  });
  test('-', () => {
    expect(operate(6, 4, '-')).toBe('2');
  });

  test('%', () => {
    expect(operate(6, 4, '%')).toBe('2');
  });
});
