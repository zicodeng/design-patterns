class Printer {
    private static instance: Printer | undefined = undefined;

    // Ensure there will be only one instance of the class at any given time.
    static getInstance(price: number) {
        if (!Printer.instance) {
            Printer.instance = new Printer(price);
        }
        return Printer.instance;
    }

    // Instance variables.
    private price: number = 0;

    private constructor(price: number) {
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    print(): void {
        console.log('Printing...');
    }
}

const printer = Printer.getInstance(600);
const price = printer.getPrice();
console.log(price);
printer.print();
