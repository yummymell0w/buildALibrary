class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get title() {
        return this._title;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            return this._isCheckedOut = false;
        } else {
            return this._isCheckedOut = true;
        }
    }

    getAverageRating() {
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length;
        return this._ratings = ratingsSum / lengthOfArray;
    }

    addRating(rating) {
        return this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get pages() {
        return this._pages;
    }

    get author() {
        return this._author;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTIme = runTime;
    }

    get runTIme() {
        return this._runTIme;
    }

    get director() {
        return this._director;
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4,5,5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed','Jan de Bont',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1,1,5);

console.log(speed.getAverageRating());