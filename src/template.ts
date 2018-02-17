abstract class SportsGame {
    abstract initialize(): void;
    abstract start(): void;
    abstract end(): void;

    // Define play method along with its components and execution order.
    play(): void {
        this.initialize();
        this.start();
        this.end();
    }
}

class SoccerGame extends SportsGame {
    constructor() {
        super();
    }

    initialize(): void {
        console.log('Initializing soccer game...');
    }

    start(): void {
        console.log('Soccer game has started');
    }

    end(): void {
        console.log('Soccer game has ended');
    }
}

class BasketballGame extends SportsGame {
    constructor() {
        super();
    }

    initialize(): void {
        console.log('Initializing basketball game...');
    }

    start(): void {
        console.log('Basketball game has started');
    }

    end(): void {
        console.log('Basketball game has ended');
    }
}

const soccerGame = new SoccerGame();
soccerGame.play();

const basketballGame = new BasketballGame();
basketballGame.play();
