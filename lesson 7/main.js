// //OOP
//
// // class Dog {
// //     constructor(weight, height, color, gender, breed) {
// //         this.weight = weight;
// //         this.height = height;
// //         this.color = color;
// //         this.gender = gender;
// //         this.breed = breed;
// //     }
// // }
// //
// // const arez = new Dog(80,1.5, "block", "domestic", "alabay");
// // const bobik = new Dog(30, 50, "orange", "domestic", "chi-hua-hua");
// //
// // console.log(arez);
// // console.log(bobik);
//
// //Абстрактные классы
//
// class Animal {
//     constructor(type, gender, color, voice) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voice = voice;
//     }
//     woice() {
//         console.log(this.voice)
//     }
// }
//
// class Cat extends Animal {
//     constructor(type, gender, color, voice, height, weight) {
//         super(type, gender,color,voice);
//         this.height = height;
//         this.weight = weight;
//     }
// }
//
// const Kassy = new Cat (
//     "pet",
//     "male",
//     "darkBlue",
//     "myaaaau",
//     30,
//     7
// )
// console.log(Kassy)
//
// const Tomka =new Cat(
//     "хищник",
//     "female",
//     "white",
//     "э не на",
//     1.30,
//     50
// )
// console.log(Tomka)
// Tomka.woice()


class Home{
    constructor(height,length,roof, color, floor, door, room, home,frame, letterbox, closet, window) {
       this.height=height;
        this.length=length;
        this.roof = roof;
        this.color = color;
        this.door = door;
        this.room = room;
        this.home =home;
        this.frame= frame;
        this.letterbox = letterbox;
        this.closet = closet;
        this.window = window;
    }
}

const home2 = new Home(
   "15",
    "20",
    "good",
    "red",
    "laminate",
    "big",
    "big",
    "big",
    "square",
    "square",
    "little",
    "glass",
)
console.log(home2)

// class school{
//     constructor(height,length,book,color,teachers,bord,room,window,flowers,magazine) {
//     this.heigh =height;
//     this.lenght=length;
//     this.book=book;
//     this.color=color;
//     this.bord=bord;
//     this.room=room;
//     this.window=window;
//     this.flowers=flowers;
//     this.magazine=magazine;
//     }
// }
//
// const school2 = new school(
//     "15",
//     "20",
//     "big",
//     "yellow",
//     "good",
//     "very big",
//     "so so",
//     "glass",
//     "beautiful",
//     "small"
// )
// console.log(school2)