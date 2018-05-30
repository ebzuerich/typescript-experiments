namespace objects {
    interface Human {
        firstName: string;
        lastName: string;
        name?: Function;

        isLate?(time: Date): Function;
    }

    class Person implements Human {
        firstName: string;
        lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        name() {
            return `${this.firstName} ${this.lastName}`;
        }

        whoAreYou() {
            return `Hi I’m ${this.name()}`;
        }
    }

    class Student extends Person {
        course: string;

        constructor(firstName: string, lastName: string, course: string) {
            super(firstName, lastName);
            this.course = course;
        }

        whoAreYou() {
            return `${super.whoAreYou()} and I’m studying ${this.course}`;
        }
    }

    let robin = new Student('Robin', 'Bühler', 'JavaScript');
    console.log(robin.whoAreYou());
}