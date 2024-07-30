// assignDistrict.ts
import { PrismaClient } from '../prisma/listingDB-client';

const prisma = new PrismaClient();

const uzbekistanRegions = {
    "Andijon": [
        "Asaka", "Baliqchi", "Buloqboshi", "Jalaquduq", "Izboskan", 
        "Xo'jaobod", "Marhamat", "Oltinko'l", "Paxtaobod", "Shahrixon", 
        "Ulug'nor", "Xonobod", "Andijon",
    ],
    "Buxoro": [
        "G'ijduvon", "Jondor", "Kogon", "Olot", "Peshko'", 
        "Qorako'l", "Qorovulbozor", "Romitan", "Shofirkon", "Vobkent", "Buxoro",
    ],
    "Farg'ona": [
        "Beshariq", "Bag'dod", "Buvayda", "Dang'ara", "Furqat", 
        "Oltiariq", "Quva", "Rishton", "So'x", "Toshloq", "Uchko'prik", "Yozyovon", "Farg'ona"
    ],
    "Jizzax": [
        "Arnasoy", "Baxmal", "Do'stlik", "Forish", "G'allaorol",  
        "Mirzacho'l", "Paxtakor", "Yangiobod", "Zafarobod", "Zomin", "Zarbdor", "Jizzax"
    ],
    "Qashqadaryo": [
        "Chiroqchi", "Dehqonobod", "G'uzor", "Qamashi", "Qarshi", "Kasbi", 
        "Kitob", "Koson", "Mirishkor", "Muborak", "Nishon", "Shahrisabz", "Yakkabog'"
    ],
    "Xorazm": [
        "Bog'ot", "Gurlan", "Xiva", "Shovot", "Urganch", "Xonqa", 
        "Hazorasp", "Yangiariq", "Yangibozor"
    ],
    "Namangan": [
        "Chortoq", "Chust", "Kosonsoy", "Mingbuloq", "Norin", 
        "Pop", "To'raqo'rg'on", "Uchqo'rg'on", "Uychi", "Yangiqo'rg'on", "Namangan"
    ],
    "Navoiy": [
        "Karmana", "Konimex", "Nurota", "Qiziltepa", "Tomdi", 
        "Uchquduk", "Xatirchi", "Navoiy"
    ],
    "Samarqand": [
        "Bulung'ur", "Ishtixon", "Jomboy", "Kattaqo'rg'on", "Narpay", "Nurobod", 
        "Oqdarya", "Payariq", "Pastdarg'om", "Paxtachi", "Toyloq", "Urgut", "Samarqand"
    ],
    "Surxondaryo": [
        "Angor", "Boysun", "Denov", "Jarqo'rg'on", "Qiziriq",  
        "Muzrabot", "Oltinsoy", "Qumqo'rg'on", "Sariosiyo", "Sherobod", 
        "Sho'rchi", "Termiz", "Uzun"
    ],
    "Sirdaryo": [
        "Boyovut", "Guliston", "Mirzaobod", "Oqoltin", "Sardoba", 
        "Sayxunobod", "Xovos", "Sirdaryo"
    ],
    "Toshkent viloyati": [
        "Bekobod", "Bo'stonliq", "Chinoz", "Qibray", "Oqqo'rg'on", "Chirchiq",
        "Ohangaron", "Olmaliq", "Parkent", "Piskent", "Quyichirchiq", "O'rtachirchiq", 
        "Yangiyo'l", "Yuqorichirchiq", "Zangiota", "Toshkent tumani"
    ],
    "Qoraqalpog'iston Respublikasi": [
        "Amudaryo", "Beruniy", "Chimboy", "Ellikqak'a", "Kegeyli",  
        "Mo'ynoq", "Nukus", "Qanliko'l", "Qo'ng'irot", "Qorao'zak", "Shumanay", 
        "Taxtako'pir", "To'rtko'l", "Xo'jayli"
    ],
    "Toshkent": [
        'Bektemir', 'Chilonzor', 'Yashnobod', 'Mirobod', 'Mirzo', 'Sergeli',
        'Shayxontohur', 'Uchtepa', 'Yunusobod', 'Yakkasaroy', 'Olmazor', 'Yangihayot'
    ]
};

async function populateDistrictsAndRegions() {
    try {
        const regionsCount = await prisma.region.count();

        if (regionsCount > 0) {
            console.log('Regions already populated. Skipping...');
            return;
        }

        for (const regionName in uzbekistanRegions) {
            const region = await prisma.region.create({
                data: { name: regionName }
            });

            for (const districtName of uzbekistanRegions[regionName]) {
                await prisma.district.create({
                    data: {
                        name: districtName,
                        regionId: region.id
                    }
                });
            }
        }
    } catch (error) {
        console.error('Error populating regions and districts:', error);
    }
}

async function assignDistricts() {
    // Ensure the Region and District tables are populated
    await populateDistrictsAndRegions();

    try {
        // Fetch all properties with their addresses
        const properties = await prisma.property.findMany({
            include: {
                address: true
            }
        });

        for (const property of properties) {
            try {
                // Check if the address and fullAddress exist
                if (!property.address || !property.address.fullAddress) {
                    console.warn(`Property ${property.id} is missing address or fullAddress.`);
                    continue;
                }

                // Check if the regionId is already filled
                if (property.address.districtId) {
                    console.log(`Property ${property.id} already has a districtId.`);
                    continue;
                }
                const fullAddress = property.address.fullAddress as { en: string, ru: string, uz: string };

                // Check if the 'uz' key exists in fullAddress
                if (!fullAddress.uz) {
                    console.warn(`Property ${property.id} is missing 'uz' address.`);
                    continue;
                }

                // Access the 'uz' key
                const uzAddress = (fullAddress.uz as string).toLowerCase();

                for (const regionName in uzbekistanRegions) {
                    const districts = uzbekistanRegions[regionName];

                    // Check if the region name exists in the address
                    if (uzAddress.includes((regionName == 'Toshkent' ? regionName + ',' : regionName).toLowerCase())) {
                        // Find the region in the database
                        const region = await prisma.region.findUnique({
                            where: { name: regionName }
                        });
                        
                        // Assign the region ID to the address
                        if (region) {
                            await prisma.address.update({
                                where: { id: property.address.id },
                                data: { regionId: region.id }
                            });
                        }
                        let entered = false;
                        // Check if any of the district names exist in the address
                        for (const districtName of districts) {

                            if (uzAddress.includes(districtName.toLowerCase())) {
                                // Find the district in the database
                                const district = await prisma.district.findFirst({
                                    where: { 
                                        name: districtName,
                                        regionId: region?.id 
                                    }
                                });
                                
                                // Assign the district ID to the address
                                if (district) {
                                    await prisma.address.update({
                                        where: { id: property.address.id },
                                        data: { districtId: district.id }
                                    });
                                } 
                                entered = true;
                            } else {
                                if (!entered) {
                                    await prisma.address.update({
                                        where: { id: property.address.id },
                                        data: { districtId: region?.id }
                                    });
                                }
                            }
                        }
                    }
                }

            } catch (error) {
                console.error(`Error processing property ${property.id}:`, error);
            }
            console.log(`Successfully processed property ${property.id}.`);
        }
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
}

assignDistricts()
    .then(() => {
        console.log('Districts assigned successfully.');
    })
    .catch((error) => {
        console.error('Error assigning districts:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });