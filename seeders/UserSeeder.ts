import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const seedDatabase = async (numberOfRecords: number) => {
    const hashedPassword = await bcrypt.hash("password", 10);
    const records = Array.from({ length: numberOfRecords }, () => ({
        // const hashedPassword = await bcrypt.hash(data.password, 10)
        // Define your Prisma model fields and use faker to generate fake data
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(["customer", "admin", "super_admin"]),
        // Add other fields as needed
    }));

    await prisma.user.createMany({
        data: records,
    });
};

const numberOfRecordsToInsert = 20;

seedDatabase(numberOfRecordsToInsert)
    .catch((error) => {
        console.error('Error seeding database:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
