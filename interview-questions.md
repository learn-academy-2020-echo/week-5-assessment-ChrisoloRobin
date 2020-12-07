# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for model-view-controller. The model is the data structure the program uses. The view interacts with output for the user. And the controller processes data between the model and the view. 

  Researched answer:

  The Model View Controller principle divides the work of an application into three separate but closely cooperative subsystems.
  The model maintains the relationship between the objects and the database and handles validation, association, transactions, and more.
  The view is a presentation of data in a particular format, triggered by a controller's decision to present the data.
  The controller within the application directs traffic, on the one hand, querying the models for specific data, and on the other hand, organizing that data (searching, sorting, messaging it) into a form that fits the needs of a given view.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD is a basic function of data storage. CRUD stands for create, read, update, and delete.

  Researched answer:

  In computer programming, create, read, update, and delete(CRUD) are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete. CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information, often using computer-based forms and reports.


3. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database with information that has pre-defined relationship between the information. 

  Researched answer:

  Relational databases are categorized by a set of tables where data gets fit into a pre-defined category. The table consists of rows and columns where the column has an entry for data for a specific category and rows contains instance for that data defined according to the category. The Structured Query Language (SQL) is the standard user and application program interface for a relational database.
  There are various types of databases including: Centralized, Distributed, Personal, Commercial, NoSQL, Operational, Cloud, Object-Oriented, and Graph databases.


4. What are the 5 HTTP verbs? What are they important?

  Your answer: The 5 HTTP verbs are GET, POST, PUT, PATCH, and DELETE. These are important because they are how we interact with data on the internet.

  Researched answer:

  The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively.



5. What is object-relational mapping?

  Your answer: I'm not sure. I'll have to look into ORM.

  Researched answer: 
  
  Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".
  An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.



6. What is a gem?

  Your answer: A gem is a special install package that allows for running specific coding programs.

  Researched answer:

  Gems can be used to extend or modify functionality in Ruby applications. Commonly they're used to distribute reusable functionality that is shared with other Rubyists for use in their applications and libraries. Some gems provide command line utilities to help automate tasks and speed up your work.


7. What are primary keys? Why are they important?

  Your answer: I believe it has something to do with databases.

  Researched answer:

  A primary key is a field in a table which uniquely identifies each row/record in a database table. Primary keys must contain unique values. A primary key column cannot have NULL values.

  A table can have only one primary key, which may consist of single or multiple fields. When multiple fields are used as a primary key, they are called a composite key.

  If a table has a primary key defined on any field(s), then you cannot have two records having the same value of that field(s).


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: conventional pattern to follow when structuring different routes for interacting with the server whenever an HTTP request is made
- JSON: is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types
- Endpoints: UNSURE
- Strong params: is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It has its own DSL (Domain Specific Language, or in other words, a predefined syntax it understands), that allows you to indicate what parameters should be allowed. It also lets you indicate if each parameter should be a hash, array or scalar (i.e. integer, string, etc.), as well as some other functionality that is not relevant for this post.
- Validations: are used to ensure that only valid data is saved into your database. 
