QUnit.module('romaiSzamok', function() {
    QUnit.test('Létezik-e a római számok függvény?', function(assert) {
      assert.ok(romaiszamok,"létezik a függvény");
    });
    QUnit.test('függvénye?', function(assert) {
        assert.ok(typeof romaiszamok==="function","igen, fv");
      });
    QUnit.test('n=1 - I.', function(assert) {
        assert.equal(ertek(1),"I");
      });
      QUnit.test('n=2 - II.', function(assert) {
        assert.equal(ertek(2),"II");
      });
    QUnit.test('n=1,2,3 - I.,II.,III.', function(assert) {
        assert.equal(ertek(3),"III");
      });
    QUnit.test('n=5 - V.', function(assert) {
        assert.equal(ertek(5),"V");
      });
    QUnit.test('n=10 - X.', function(assert) {
        assert.equal(ertek(10),"X");
      });
    QUnit.test('n=7 - VII.', function(assert) {
        assert.equal(ertek(7),"VII");
      });
      QUnit.test('n=5 - V.', function(assert) {
        assert.equal(ertek(5),"V");
      });
    QUnit.test('n=4 - IV.', function(assert) {
        assert.equal(ertek(4),"IV");
      });
    QUnit.test('n=9 - IX.', function(assert) {
        assert.equal(ertek(9),"IX");
      });
    QUnit.test('n=11 - XI.', function(assert) {
        assert.equal(ertek(11),"XI");
      });
    QUnit.test('n=15,16,17,18,19 - XV.,XVI.,XVII.,XVIII.,XIX.,', function(assert) {
        assert.equal(ertek(19),"XIX");
      });
    QUnit.test('n=21 - XXI.,', function(assert) {
        assert.equal(ertek(21),"XXI.,");
      });
  });