# OOP Notes By Hamza Anwar

1. The size of an object of any class depends on number of properties in that class
2. The size of an empty class that doesnt have any property --> 1 byte
3. Properties in classes are also known as Data members
4. Access modifiers specify the places where we can access the class properties 
    1. Public --> can be accessed anywhere either using . property or using methods
    2. Private --> can be accesible only in the same class through methods/
    3. Protected --> can be used inside to class or only by child classes
5. By default the access modifier is set to be private
6. We can use getters and setter methods to manipulate the class properties
7. if we have two properties in class int a and char b the expected size is 5bytes but when we examine, it will be 8 bytes it is due to padding and greedy alignment
8. **Padding** is extra memory added by the compiler between data members to align them properly for efficient CPU access.
9. **Greedy alignment** is a strategy where the compiler aggressively aligns each field to its preferred boundary, often adding more padding to optimize performance.
###  **Static vs Dynamic Allocation **
- **Static Allocation**:
    - Memory allocated at **compile time**.
    - Object has a **fixed size and lifetime** (e.g., local variables).
    - Stored on **stack**.
    - **Auto-managed** — cleaned up when scope ends.
    - Syntax (C++): `ClassName obj;` 
- **Dynamic Allocation**:
    - Memory allocated at **runtime** using `new`  or similar.
    - Stored on **heap**.
    - Requires **manual deletion** (`delete` ) or garbage collection.
    - Useful for **flexible object creation**, e.g., unknown quantity or polymorphic behavior.
    - Syntax (C++): `ClassName* obj = new ClassName();` 
- **Purpose in OOP**:
    - Static: Simpler, faster, for predictable lifetime.
    - Dynamic: More control, flexibility, used in inheritance/polymorphism scenarios
### **Constructors**
1. Constructors are the first thing which is called when we create the object of any class
    1. **Default Constructors**
        1. Invoked at the time of object creation
        2. no return type 
        3. No input parameters
    2. **Non Parameterized Constructors**
        1. Invoked at the time of object creation
        2. no return type
        3. overrides the default constructor
    3. **Parameterized Constructors**
        1. A **parameterized constructor** is a constructor that **takes parameters** to initialize an object with specific values when it’s created.
        2. Unlike a default constructor (which takes no arguments), a parameterized constructor allows you to **set initial values** for object attributes at the time of creation.
        3. class Car {
    String model;
    int year;

    // Parameterized constructor
    Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}

// Creating object with initial values
Car myCar = new Car("Toyota", 2020);
    4. **Copy Constructors**
        1. A **copy constructor** creates a new object as a copy of an existing object.
        2. syntax in C++: `ClassName(const ClassName &obj);` 
        3. Used when passing objects by value, returning them from functions, or initializing from another object.
        4. C++ provides a **default copy constructor** that performs a **shallow copy** (copies members field by field).
        5. Shallow copy is fine for simple types like `int`  , `float`  , or `std::string`  .
        6. If the class uses **dynamic memory** (like `char*`   with `new`  ), shallow copy can cause shared memory, double deletes, or crashes.
        7. A **custom copy constructor** is needed to perform a **deep copy** (allocate new memory and copy content).
        8. Without dynamic memory, no custom copy constructor is required — the default is safe and sufficient.
        9. If `name`   is a `std::string` , copying objects creates independent copies — changing one won’t affect the other.
        10. If `name`  is a `char*`  (with `new` ), both objects may share the same memory unless a deep copy is implemented.
        11. Deep copy ensures each object has its own copy of resources, avoiding bugs and memory issues.
        12. Real-life use: safely duplicating objects like files, documents, or any object holding heap-allocated data
### This Keyword & Method Return Types in OOP
- **This **keyword refers to the **current object instance** inside class methods.
- Used to **distinguish** between instance variables and parameters with the same name:
 `this.name = name;` 
- Can **return **`**this**`  to enable **method chaining** (calling multiple methods on the same object in one line).
- In method declaration, the word before method name is the **return type** (e.g., `Builder setName(...)`  means `setName`  returns a `Builder`  object).
- **Constructors have no return type**; their name matches the class.
- **Builder pattern** uses `this`  and return
- class Builder {
    Builder setName(String name) {
        this.name = name;
        return this;
    }
}
    - basically the builder before setName is specifying return type of setName method which is nothing but this --> which is the reference to current object's instance of current class
### Destructors
1. A **destructor** is a special class function that is automatically called when an object is **destroyed**.
2. Syntax in C++: `~ClassName();`  
3. It is used to **free resources** like memory, file handles, or network connections.
4. Every class has **only one destructor**, and it **doesn’t take arguments** or return a value.
5. **Automatically called** when:
    - A statically allocated object goes out of scope.
    - A dynamically allocated object is deleted using `delete` 


### Static Keyword in OOP
- **Definition**: Declares members (fields, methods, or nested classes) that belong to the class itself, not to any specific object instance.
- **Scope**: Static members are shared across all instances of the class.
- **Memory Allocation**: Allocated once when the class is loaded, not per object creation.
- **Access**: Accessed using the class name (e.g., ClassName.staticMember), no need for an instance.
### Static Fields
- **Purpose**: Store data common to all instances (e.g., a counter for the number of objects created).
- **Behavior**: Single copy exists, shared by all objects; changes reflect globally.
- **Example**: static int count = 0; in a class to track instance count.
### Static Methods
- **Purpose**: Define utility or helper methods that don’t depend on instance-specific data.
- **Restrictions**: Can only access static fields or methods directly; cannot use this or instance variables unless an object is explicitly passed.
- **Example**: public static void utilityMethod() { ... } for operations like calculations or validations.
### Static Blocks
- **Purpose**: Initialize static fields when the class is loaded.
- **Execution**: Runs once, before any static member is accessed or instance is created.
- **Example**: static { count = 10; } to set initial values for
### Key Characteristics
- **No Instance Required**: Static members can be accessed without creating an object.
- **Thread Safety**: Static fields shared across threads may need synchronization to avoid race conditions.
- **Inheritance**: Static members are inherited but cannot be overridden (they can be hidden by redefining in a subclass).
- **This Keyword: **Static methods dont have reference to this keyword as this points to the reference of instance and static has nothing to do with instance
- **Use Cases**: 
    - Utility methods (e.g., Math.sqrt()).
    - Constants (e.g., static final int MAX_VALUE = 100;).
    - Singleton patterns (to ensure one instance of a class).




