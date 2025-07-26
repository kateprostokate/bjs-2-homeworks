//1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//2
class Library {
  constructor(name) {
    this.name = name;     // Название библиотеки
    this.books = [];      // Хранилище книг (изначально пустой массив)
  }

  addBook(book) {
    // Добавляем книгу только если её состояние > 30
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    // Ищем книгу по ключу (например, "name") и значению
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    // Ищем книгу по названию
    const index = this.books.findIndex((book) => book.name === bookName);

    if (index !== -1) {
      // Удаляем книгу из массива и возвращаем её
      const book = this.books.splice(index, 1)[0];
      return book;
    }

    return null; // Если книга не найдена
  }
}

//3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; // объект вида { "математика": [5, 4], "физика": [3] }
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.warn(`Оценка ${mark} не добавлена: должна быть от 2 до 5`);
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    const sum = this.marks[subject].reduce((acc, m) => acc + m, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }

    const total = subjects.reduce((acc, subj) => {
      return acc + this.getAverageBySubject(subj);
    }, 0);

    return total / subjects.length;
  }
}
