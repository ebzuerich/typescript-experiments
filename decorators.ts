namespace decorators {
    function Student(course: string) {
        return function (target: Function) {
            target.prototype.course = course;
        }
    }

    @Student('angular')
    class Person {
        firstName: string;
        lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    let robin = new Person('Robin', 'Bühler');

    console.log(robin.course);
}