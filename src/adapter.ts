class Chick {
    constructor() {}

    walk(): void {
        console.log('Chick walking on the ground...');
    }
}

class Bird {
    constructor() {}

    fly(): void {
        console.log('Bird flying in the sky...');
    }
}

class BirdAdapter extends Bird {
    constructor(private chicken: Chick) {
        super();
    }

    fly(): void {
        this.chicken.walk();
    }
}

const birds: Bird[] = [
    new Bird(),
    new Bird(),
    new Bird(),
    new BirdAdapter(new Chick()) // Chick is not a Bird, but we can convert it to a Bird through our BirdAdapter.
];

birds.forEach(bird => {
    bird.fly();
});
