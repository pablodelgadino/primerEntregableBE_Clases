class Usuario{
    constructor(name, lastname, books, pets){
    this.name = name;
    this.lastname= lastname;
    this.books = books;
    this.pets = pets;
    }

    getFullName(){
        return `${this.name} ${this.lastname}`
    } 
   
    countMascotas(){
        return this.pets.length
    }

    addMascotas (animal){
        let nuevaMascota = animal;
        this.pets.push(nuevaMascota)
    }

    addBook(libro){
        let nuevoLibro = libro;
        this.books.push (nuevoLibro)
    }

    getBooksNames(){
        let bookNames = this.books.map (books => books.nombre);
        console.log(bookNames);
    }
}

const usuario = new Usuario ("Miguel", "Tondo", [{nombre: "MazeRunner", autor: "James Dashner"},{nombre: "LOTR", autor: "J.R.R. Tolkien"}, {nombre: "Mr Mercedes", autor: "Stephen King"},], ["perro1","perro2", "conejo"])

console.log(usuario.getFullName())
console.log(usuario.countMascotas())
console.log(usuario.addMascotas("hamster"))
console.log(usuario.pets)
console.log(usuario.addBook({nombre:'Don quijote de la mancha', autor: 'Calderon de la barca'}))
console.log(usuario.books)
console.log(usuario.getBooksNames())
