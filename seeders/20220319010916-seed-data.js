module.exports = {
  up: async (queryInterface) => {
    const usersList = [
      {
        email: 'admin@gmail.com',
        password: 'admin',
        username: 'admin',
        win: 0,
        loss: 0,
        draw: 0,
        rank: 'Beginner',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'player1@gmail.com',
        password: 'player1',
        username: 'player1',
        win: 0,
        loss: 0,
        draw: 0,
        rank: 'Beginner',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'player2@gmail.com',
        password: 'player2',
        username: 'player2',
        win: 0,
        loss: 0,
        draw: 0,
        rank: 'Beginner',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('users', usersList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
