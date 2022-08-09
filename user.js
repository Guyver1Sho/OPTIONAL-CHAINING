const person1 = {
    name: 'Henry',
    class: { name: 'rouge',
    colour: 'black',
},
speak() {console.log ("yo");
    }
};
    ////cash: [1, 5, 10] 
//};

const person2 = {
    name: 'Chris',
    class: { name: 'Barbarian',
    colour: 'blue',
}
};
    //cash: [10, 50, 100] 
//};

const people = [person1, person2];

for (const person of people) {
    console.log(person.class?.colour);
}

for (const person of people) {
    console.log(person.class?.name);
}

///https://youtu.be/7jegF5jD4cU