import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedDatabase = async (numberOfRecords: number) => {
    const records = Array.from({ length: numberOfRecords }, () => ({
        // Define your Prisma model fields and use faker to generate fake data
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "password",
        role: faker.helpers.arrayElement(["customer", "admin", "super_admin"]),
        contactNo: faker.phone.number(),
        address: `${faker.location.city()}, ${faker.location.country()}`,
        profileImg: faker.image.avatar()
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
