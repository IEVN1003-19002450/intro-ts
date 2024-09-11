var num1 = 38;
let num2 = 29;
const num3 = 10;
let sum = num1 + num2 + num3;
let nombre: string;
let num: number;
let activo: boolean;
nombre = 'mario';
num = 32;
activo = true;
let matricula: number | string | boolean;
matricula = '1234567';
matricula = 'A56FD77';
console.log('el numero es', sum);

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    year: number;
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 10,
    cancion: "UnderSide821",
    detalles: {
        autor: "La estrella",
        year: 2017
    }
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, year } = detalles;

console.log(`El volumen Actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La canción es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz: string[] = ['Goku', 'Majin Buu', 'Babidi', 'Freezer', 'VEGETTA'];
console.log(`personaje 0: ${dbz[0]}`);
console.log(`personaje 1: ${dbz[1]}`);
console.log(`personaje 2: ${dbz[2]}`);
console.log(`personaje 3: ${dbz[3]}`);
console.log(`personaje 4: ${dbz[4]}`);
const [a, , b] = dbz;
console.log(`Personaje 1: ${a}`);
console.log(`Personaje 2: ${b}`); 