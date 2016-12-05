import test from 'ava';

const f = () => 'test';
const throwing = () => { throw new Error('noooo'); };

test('f should not throw', t => {
  t.notThrows(f);
});

test(t => {
  t.truthy(f(), 'f() should return truthy value');
});

test(t => {
  t.throws(throwing);
});

const unit = {
  add: (x,y) => { console.log('wee %s %s', x, y); return x + y }
};

test('unit.add() should add numbers', t => {
  return t.true(unit.add(2, 3) === 5);
});

test('unit.add() should multiply numbers', t => {
  return t.true(unit.add(2, 3) === 6);
});