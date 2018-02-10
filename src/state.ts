// Define a shared interface.
interface GumballState {
    insertQuarter(): void;
    ejectQuarter(): void;
    turnCrank(): void;
    dispense(): void;
}

// Create class for each state.
class NoQuarterState implements GumballState {
    constructor(private machine: GumballMachine) {}

    insertQuarter(): void {
        console.log('You inserted a quarter.');
        this.machine.setState(new HasQuarterState(this.machine));
    }
    ejectQuarter(): void {
        console.log("You haven't inserted a quarter.");
    }
    turnCrank(): void {
        console.log('No gumball without a quarter.');
    }
    dispense(): void {
        console.log('You need to pay first.');
    }
}

// Create class for each state.
class HasQuarterState implements GumballState {
    constructor(private machine: GumballMachine) {}

    insertQuarter(): void {
        console.log('You already inserted a quarter.');
    }
    ejectQuarter(): void {
        console.log('Quarter refunded.');
        this.machine.setState(new NoQuarterState(this.machine));
    }
    turnCrank(): void {
        console.log('Processing payment...');
    }
    dispense(): void {
        console.log('Turn the crank to get a gumball.');
        this.machine.setState(new NoQuarterState(this.machine));
    }
}

class GumballMachine {
    // Store State objects as instance variable.
    private state: GumballState = new NoQuarterState(this);

    constructor() {}

    setState(newState: GumballState) {
        this.state = newState;
    }

    // Public methods.
    insertQuarter(): void {
        // Delegate to state.
        this.state.insertQuarter();
    }
    ejectQuarter(): void {
        this.state.ejectQuarter();
    }
    turnCrank(): void {
        this.state.turnCrank();
    }
    dispense(): void {
        this.state.dispense();
    }
}

const gumballMachine = new GumballMachine();
gumballMachine.dispense(); // You need to pay first.
gumballMachine.insertQuarter(); // You inserted a quarter.
// Transit to HasQuarterState.
gumballMachine.turnCrank(); // Processing payment...
gumballMachine.dispense(); // Turn the crank to get a gumball.
// Transit to NoQuarterState.
