var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Neymar';
    var text = 'wassa';
    var res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = '34.0006126';
    var longitude = '18.4721716';
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var res = generateLocationMessage(from, latitude, longitude);

    expect(res).toInclude({from, url});
    expect(res.createdAt).toBeA('number');
  });
});
