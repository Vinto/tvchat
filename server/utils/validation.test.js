const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var name = 8;
    var room = 0;

    var res_name = isRealString(name);
    var res_room = isRealString(room);

    expect(res_name).toBe(false);
    expect(res_room).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var name = '   ';
    var room = ' ';

    var res_name = isRealString(name);
    var res_room = isRealString(room);

    expect(res_name).toBe(false);
    expect(res_room).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var name = ' Neymar  ';
    var room = ' PSG ';

    var res_name = isRealString(name);
    var res_room = isRealString(room);

    expect(res_name).toBe(true);
    expect(res_room).toBe(true);
  });
});
