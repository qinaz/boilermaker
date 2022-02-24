const { db, Puppy, Kitten } = require('./server/db');
const User = require('./server/db/User');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced!');
  // seed your database here!

  // users
  const users = await Promise.all([
    User.create({ username: 'kate', password: 'kate_pw' }),
    User.create({ username: 'cody', password: 'cody_pw' }),
  ]);

  const [kate, john] = users;

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
};

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
