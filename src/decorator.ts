abstract class Room {
    abstract display(): string;
}

class CozyRoom extends Room {
    constructor() {
        super();
    }

    display(): string {
        return 'This is a cozy room';
    }
}

abstract class RoomDecorator extends Room {
    constructor(protected decorated: Room) {
        super();
    }

    // Inherits abstract display method.
}

class LightDecorator extends RoomDecorator {
    display(): string {
        return this.decorated.display() + ' with a red light';
    }
}

class WallDecorator extends RoomDecorator {
    display(): string {
        return this.decorated.display() + ' and a blue wall';
    }
}

const fancyRoom = new WallDecorator(new LightDecorator(new CozyRoom()));
console.log(fancyRoom.display());
