const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const hashedPassword = await bcrypt.hash('AdminPassword123', 10); // Securely hash the password

        await queryInterface.bulkInsert('Users', [
            {
                name: 'Admin',
                email: 'nextAdmin@gmail.com',
                password: hashedPassword,
                role: 'admin', // Assign 'admin' role
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        // This deletes the admin account when rolling back
        await queryInterface.bulkDelete('Users', { email: 'admin@example.com' }, {});
    },
};

// adding using seeder: npx sequelize-cli db:seed --seed seeders/20241217152934-seed-admin.js