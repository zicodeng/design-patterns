interface CommentValidator {
    isCommentValid(comment: string): boolean;
}

class SpamValidator implements CommentValidator {
    constructor() {}

    isCommentValid(comment: string): boolean {
        return !comment.includes('buzz');
    }
}

class BlacklistValidator implements CommentValidator {
    constructor() {}

    isCommentValid(comment: string): boolean {
        return !comment.includes('blacklist');
    }
}

class Blog {
    private commentValidators: CommentValidator[] = [
        new SpamValidator(),
        new BlacklistValidator()
    ];

    constructor() {}

    public addComment(comment: string) {
        if (this.validateComment(comment)) {
            console.log('This comment is valid:', comment);
        } else {
            console.log('This comment is not valid:', comment);
        }
    }

    private validateComment(comment: string): boolean {
        for (const validator of this.commentValidators) {
            if (!validator.isCommentValid(comment)) {
                return false;
            }
        }
        return true;
    }
}

const blog = new Blog();
const comments: string[] = ['Hello, World!', 'I am a buzz', 'blacklist me'];
comments.forEach(comment => {
    blog.addComment(comment);
});
