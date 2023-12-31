import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const serviceList = [
    "Custom Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Cloud Computing Services",
    "Cybersecurity Consulting",
    "UI/UX Design Services",
    "IT Infrastructure Management",
    "Data Analytics and Business Intelligence",
    "Blockchain Development",
    "IoT (Internet of Things) Solutions",
    "Machine Learning and AI Services",
    "Chatbot Development",
    "IT Consulting Services",
    "Digital Transformation Solutions",
    "DevOps Implementation",
    "Software Testing and Quality Assurance",
    "IT Support and Maintenance",
    "Augmented Reality (AR) Development",
    "Virtual Reality (VR) Development",
    "Content Management Systems (CMS)",
    "Database Design and Optimization",
    "Network Security Solutions",
    "Mobile Responsive Website Design",
    "Social Media Integration",
    "IT Training and Workshops",
    "IT Project Management",
    "IT Outsourcing Services",
    "Software Maintenance and Upgrades",
    "IT Risk Assessment and Management",
    "IT Strategy Planning",
]
const seedDatabase = async () => {
    const records = serviceList.map((service) => {
        return {
            title: service,
            price: faker.helpers.rangeToNumber({ max: 900, min: 300 }),
            description: faker.word.words({ count: 30 })
        }
    })

    await prisma.service.createMany({
        data: records,
    });
};
// title       String
// price       Int
// description String

seedDatabase()
    .catch((error) => {
        console.error('Error seeding database:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

// run npx ts-node-dev seeders/ServiceSeeder.ts to seed into database