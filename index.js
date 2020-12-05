/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/BlueLamantine/a-tiny-JS-world
   Web app: https://bluelamantine.github.io//a-tiny-JS-world/
   */

class Pets {

   constructor (props){
       this.species = props.species;
       this.name = props.name;
       this.gender = props.gender;
       this.paws = 4;
       this.friends =  Array.isArray(props.friends) ? props.friends : 'no friends';    
   }

   toSting () {
      return `This ${this.species} is a ${this.gender}, its name is ${this.name}. The ${this.species} has ${this.paws} paws. Makes a sound \'${this.saund}\'. Social with : ${this.friends}`
   }
}
class Cat extends Pets {

   static feed = {
       full : 'Purrrr Purrr',
       normal : 'Mur',
       hungry : 'Meoooow Meoooow'
   }

   constructor (props){
       super(props);
       this.saund = Cat.feed[props.type];
   }

}
class Dog extends Pets {

   static mood = {
       happy : 'Ayy-woof',
       outdoor : 'Woof woof',
       angry : 'Grrrrrr Grrrrrr'
   }

   constructor (props){
       super(props);
       this.saund = Dog.mood[props.type];
   }
}

const kitty = new Cat({ species : 'cat', name : 'Garfield', gender : 'male', type : 'full', friends : ['Dog', 'Dog2']});
const doggie = new Dog({ species : 'dog', name : 'Hachiko', gender : 'male', type: 'outdoor'});

const jsWorld = [kitty.toSting(),doggie.toSting()];
jsWorld.forEach( el => {
   print(el, 'p');
});
/*const man = {
   species: 'Human',
   name: 'Parker',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'What a wonderful world!',
   friends: ['Eva','Hachiko']
};
 const dog = {
   species: 'Dog',
   name: 'Hachiko',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Woof-woof',
   friends: ['Parker']
};
const woman = {
   species: 'Human',
   name: 'Eva',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Feminism in the air!',
   friends: ['Parker', 'Garfield']
};
const cat = {
   species: 'Cat',
   name: 'Garfield',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Meoooooow',
   friends: ['Eva','Parker']
};
const catWoman = {
   species: 'Supernatural',
   name: 'Mary',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: cat.saying,
   friends: 'No friends'
};
const jsWorld = [man,woman,dog,cat,catWoman];

jsWorld.forEach( el => {
   print(Object.values(el).join(';'));
});*/