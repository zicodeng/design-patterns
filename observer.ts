interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyAll(): void;
}

interface Observer {
    notify(): void;
}

class Newspaper implements Subject {
    private article: string = 'To be, or not to be, that is the question.';
    private ads: string = 'Black Friday Sale';

    private subscribers: Observer[] = [];

    constructor() {}

    registerObserver(subscriber: Observer): void {
        this.subscribers.push(subscriber);
    }

    removeObserver(subscriber: Observer): void {
        this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
    }

    notifyAll(): void {
        this.subscribers.forEach(subscriber => {
            subscriber.notify();
        });
    }

    getArticle(): string {
        return this.article;
    }

    getAds(): string {
        return this.ads;
    }

    updateArticle(newArticle: string): void {
        this.article = newArticle;
        this.notifyAll();
    }

    updateAds(newAds: string): void {
        this.ads = newAds;
        this.notifyAll();
    }
}

class ArticleSubscriber implements Observer {
    private article = '';

    constructor(private newspaper: Newspaper) {
        // Register self (delegation).
        newspaper.registerObserver(this);
    }

    notify() {
        // Only notify data interested to this class.
        const article = this.newspaper.getArticle();
        if (this.article !== article) {
            console.log('New Article:', article);
            this.article = article;
        }
    }
}

class AdsSubscriber implements Observer {
    private ads = '';

    constructor(private newspaper: Newspaper) {
        // Register self (delegation).
        newspaper.registerObserver(this);
    }

    notify() {
        const ads = this.newspaper.getAds();
        if (this.ads !== ads) {
            console.log('New Ads:', ads);
            this.ads = ads;
        }
    }
}

const newspaper = new Newspaper();
const articleSubscriber = new ArticleSubscriber(newspaper);
const adsSubscriber = new AdsSubscriber(newspaper);
newspaper.notifyAll();

// Trigger events.
newspaper.updateArticle(
    'Winter Olympics 2018: Pence skips dinner with N Koreans.'
);
// In this case, ads subscribers will not be notified,
// because no new ads is updated.
