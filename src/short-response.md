# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. A `car` and an `engine` have a composition relationship because a car can only have one engine.
2. A `dog` and an `animal` is an inheritance relationship because a dog is a type of animal
3. A `classroom` and a `student` is a composition relationship
4. A `rectangle` is a type of `shape` making it an inheritance relationship
5. A `computer` has a `cpu` making it a composition relationship
6. A `manager` is a type of `employee` making it an inhertiance relationship

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

Polymorphism is when two different classes contain a method with the same name but have different functionality. This could be shown through `Song` and `Podcast` where the method `play()` would tell you the song that's playing with the artist and song name vs the method `play()` in the `Podcast` class that would show you the podcast name and the episode you're on.

---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) The difference between an instance property and a static property is that a static property will be the same for every instance. It is used as a default value for every new instance created vs an instance property which saves unique data used for each individual instance.

b) An example of when to use a static property would be when you want every instance to have the same thing, if you were making a bank system you would want a static empty array that holds every bank account in it if you have a class that manages bank accounts. For an instance property you would have the users names
