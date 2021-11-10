import dotenv from 'dotenv';

const envSetup = dotenv.config();

if(envSetup.error) {
    throw envSetup.error;
}

console.log(envSetup.parsed);

