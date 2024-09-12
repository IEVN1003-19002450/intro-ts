// Clase para resolver la fórmula general
class EcuacionCuadratica {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Método para calcular las raíces
    public calcularRaices(): void {
        const discriminante = this.b * this.b - 4 * this.a * this.c;
        if (discriminante > 0) {
            const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Raíces reales: x1 = ${x1}, x2 = ${x2}`);
        } else if (discriminante === 0) {
            const x = -this.b / (2 * this.a);
            console.log(`Raíz doble: x = ${x}`);
        } else {
            console.log("No tiene raíces reales");
        }
    }
}

// Ejemplo para la fórmula general
const ecuacion = new EcuacionCuadratica(1, -3, 2);
ecuacion.calcularRaices(); // Raíces reales: x1 = 2, x2 = 1

// Clase para el cálculo del área y volumen de diferentes figuras
class Geometria {
    // Método estático para calcular el área de un pentágono
    public static areaPentagono(perimetro: number, apotema: number): number {
        return (perimetro * apotema) / 2;
    }

    // Método estático para calcular el volumen de un prisma rectangular
    public static volumenPrismaRectangular(largo: number, ancho: number, altura: number): number {
        return largo * ancho * altura;
    }

    // Método estático para calcular el área de un círculo
    public static areaCirculo(radio: number): number {
        return Math.PI * radio * radio;
    }

    // Método estático para calcular el volumen de una esfera
    public static volumenEsfera(radio: number): number {
        return (4 / 3) * Math.PI * Math.pow(radio, 3);
    }
}

// Ejemplos de uso
console.log(`Área del pentágono: ${Geometria.areaPentagono(20, 5)} unidades cuadradas`);
console.log(`Volumen del prisma rectangular: ${Geometria.volumenPrismaRectangular(10, 5, 8)} unidades cúbicas`);
console.log(`Área del círculo: ${Geometria.areaCirculo(7)} unidades cuadradas`);
console.log(`Volumen de la esfera: ${Geometria.volumenEsfera(7)} unidades cúbicas`);
