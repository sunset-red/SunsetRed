const reducer = require('../../public/js/reducers/show-friend-test');
const expect = require('chai').expect;

describe('friend', function () {
  it('can show',function () {
    const state = {value: ''};
    const action={type:"GETTVALUE",value:{name:"gaole",sex:"女",city:"西安"}};
    expect(reducer(state,action)).to.be.deep.equal({value:{name:"gaole",sex:"女",city:"西安"}});
  })
});

