interface Image {
    getSize(): [number, number];
    render(): void;
}

// The actual object the client is interested in,
// but the client should not interact with it directly.
class LargeRemoteImage implements Image {
    constructor() {}

    getSize(): [number, number] {
        return [1000, 1000];
    }

    render(): void {
        console.log('Render large remote image');
    }

    isLoaded(): boolean {
        // Some logic here dealing with loading.
        return true;
    }
}

// The proxy object the client actually interacts with.
// It surrogates for the actual object and communicates with client directly.
class ProxyImage implements Image {
    private proxiedImage = new LargeRemoteImage();

    constructor() {}

    getSize(): [number, number] {
        if (this.proxiedImage.isLoaded()) {
            return this.proxiedImage.getSize();
        } else {
            // If LargeRemoteImage is not ready yet,
            // give client placeholder image size.
            return [500, 500];
        }
    }

    render(): void {
        if (this.proxiedImage.isLoaded()) {
            this.proxiedImage.render();
        } else {
            // If LargeRemoteImage is not ready yet,
            // render placeholder image.
            console.log('Render placeholder image');
        }
    }
}

const image = new ProxyImage();
console.log(image.getSize());
image.render();
