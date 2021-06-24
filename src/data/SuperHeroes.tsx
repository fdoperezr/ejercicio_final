import { SuperHero } from '../interfaces/SuperHero'
import { Guid } from "guid-typescript"; 

export const SuperHeroes:SuperHero[] =
    [
        {
            "id": Guid.create().toString(),
            "name": "Batman",
            "publisher": "DC Comics",
            "alter_ego": "Bruce Wayne",
            "first_appearance": "Detective Comics #27",
            "characters": "Bruce Wayne"
        },
        {
            "id": Guid.create().toString(),
            "name": "Superman",
            "publisher": "DC Comics",
            "alter_ego": "Kal-El",
            "first_appearance": "Action Comics #1",
            "characters": "Kal-El"
        },
        {
            "id": Guid.create().toString(),
            "name": "Flash",
            "publisher": "DC Comics",
            "alter_ego": "Jay Garrick",
            "first_appearance": "Flash Comics #1",
            "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"
        },
        {
            "id": Guid.create().toString(),
            "name": "Green Lantern",
            "publisher": "DC Comics",
            "alter_ego": "Alan Scott",
            "first_appearance": "All-American Comics #16",
            "characters": "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
        },
        {
            "id": Guid.create().toString(),
            "name": "Green Arrow",
            "publisher": "DC Comics",
            "alter_ego": "Oliver Queen",
            "first_appearance": "More Fun Comics #73",
            "characters": "Oliver Queen"
        },
        {
            "id": Guid.create().toString(),
            "name": "Wonder Woman",
            "publisher": "DC Comics",
            "alter_ego": "Princess Diana",
            "first_appearance": "All Star Comics #8",
            "characters": "Princess Diana"
        },
        {
            "id": Guid.create().toString(),
            "name": "Martian Manhunter",
            "publisher": "DC Comics",
            "alter_ego": "J'onn J'onzz",
            "first_appearance": "Detective Comics #225",
            "characters": "Martian Manhunter"
        },
        {
            "id": Guid.create().toString(),
            "name": "Robin/Nightwing",
            "publisher": "DC Comics",
            "alter_ego": "Dick Grayson",
            "first_appearance": "Detective Comics #38",
            "characters": "Dick Grayson"
        },
        {
            "id": Guid.create().toString(),
            "name": "Blue Beetle",
            "publisher": "DC Comics",
            "alter_ego": "Dan Garret",
            "first_appearance": "Mystery Men Comics #1",
            "characters": "Dan Garret, Ted Kord, Jaime Reyes"
        },
        {
            "id": Guid.create().toString(),
            "name": "Black Canary",
            "publisher": "DC Comics",
            "alter_ego": "Dinah Drake",
            "first_appearance": "Flash Comics #86",
            "characters": "Dinah Drake, Dinah Lance"
        },
        {
            "id": Guid.create().toString(),
            "name": "Spider Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Peter Parker",
            "first_appearance": "Amazing Fantasy #15",
            "characters": "Peter Parker"
        },
        {
            "id": Guid.create().toString(),
            "name": "Captain America",
            "publisher": "Marvel Comics",
            "alter_ego": "Steve Rogers",
            "first_appearance": "Captain America Comics #1",
            "characters": "Steve Rogers"
        },
        {
            "id": Guid.create().toString(),
            "name": "Iron Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Tony Stark",
            "first_appearance": "Tales of Suspense #39",
            "characters": "Tony Stark"
        },
        {
            "id": Guid.create().toString(),
            "name": "Thor",
            "publisher": "Marvel Comics",
            "alter_ego": "Thor Odinson",
            "first_appearance": "Journey into Myster #83",
            "characters": "Thor Odinson"
        },
        {
            "id": Guid.create().toString(),
            "name": "Hulk",
            "publisher": "Marvel Comics",
            "alter_ego": "Bruce Banner",
            "first_appearance": "The Incredible Hulk #1",
            "characters": "Bruce Banner"
        },
        {
            "id": Guid.create().toString(),
            "name": "Wolverine",
            "publisher": "Marvel Comics",
            "alter_ego": "James Howlett",
            "first_appearance": "The Incredible Hulk #180",
            "characters": "James Howlett"
        },
        {
            "id": Guid.create().toString(),
            "name": "Daredevil",
            "publisher": "Marvel Comics",
            "alter_ego": "Matthew Michael Murdock",
            "first_appearance": "Daredevil #1",
            "characters": "Matthew Michael Murdock"
        },
        {
            "id": Guid.create().toString(),
            "name": "Hawkeye",
            "publisher": "Marvel Comics",
            "alter_ego": "Clinton Francis Barton",
            "first_appearance": "Tales of Suspense #57",
            "characters": "Clinton Francis Barton"
        },
        {
            "id": Guid.create().toString(),
            "name": "Cyclops",
            "publisher": "Marvel Comics",
            "alter_ego": "Scott Summers",
            "first_appearance": "X-Men #1",
            "characters": "Scott Summers"
        },
        {
            "id": Guid.create().toString(),
            "name": "Silver Surfer",
            "publisher": "Marvel Comics",
            "alter_ego": "Norrin Radd",
            "first_appearance": "The Fantastic Four #48",
            "characters": "Norrin Radd"
        }
    ]
