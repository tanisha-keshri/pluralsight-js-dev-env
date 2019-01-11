import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test',()=> {
  it('should pass',()=> {
    expect(true).to.equal(true);
  });
});
//lets create a test for something in the Dom using jsdom
describe('index.html', () =>{
  it('why hello world is undefined', (done) => { //when we call jsdom- asynchronous call occurs - to se5t our test synchronous we need to add done parameter here.
    const index = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index, function(err,window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      //const h1InnerValue = ;
      //console.log(h1.innerHTML);
     // expect( window.document.getElementsByTagName('h1')[0].innerText).to.equal('Hello World!!');
      expect(h1.innerHTML).to.equal("Hello World!!");
      done(); // tells mocha that the test is done.
      window.close();
    });
  });
});
