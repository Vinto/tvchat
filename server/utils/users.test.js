const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Zoo Fans'
    }, {
      id: '2',
      name: 'Ney',
      room: 'Skype Fans'
    }, {
      id: '3',
      name: 'Ray',
      room: 'Zoo Fans'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '321',
      name: 'Neymar',
      room: 'PSG'
    };

    res = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '30';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '100';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Zoo Fans', () => {
    var userList = users.getUserList('Zoo Fans');

    expect(userList).toEqual(['Mike', 'Ray']);
  });

  it('should return names for Skype Fans', () => {
    var userList = users.getUserList('Skype Fans');

    expect(userList).toEqual(['Ney']);
  });
});
