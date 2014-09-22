'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('test.html');

  function setInput(val) {
    // set the value of the element and force validation.
    var script = "var inputs = document.querySelectorAll('input'); " +
      "angular.forEach(inputs,function(ipt){ipt.value = '" + val + "';});"
    browser.executeScript(script);
  }

  it('should calculate result as 1000', function() {
    setInput('');

    element(by.model('salary')).sendKeys(10000);

    element(by.model('percentage')).sendKeys(10);

    var result = element(by.binding('{{result()}}'));

    expect(result.getText()).toEqual('1000');
  });
});