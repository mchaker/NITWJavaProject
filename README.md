# JavaProject
## Time Keep Co. Location Score Calculator

NITW Project Data Engine Read.Me

## 1. Summary of the Project

The project involves building and expanding upon the data engine to create an 
app or tool. The goal is using open, public data sources to give a rank or 
score from 1...100 for a site for a manufacturing company. The data engine 
gives the basis or foundation on which to write the the software to create 
the app or tool.

## 2. The Data Engine

The data engine reads the external data files in Comma Separated Value (CSV), 
Excel, Javascript Object Notation, (JSON), and Extensible Markup Language 
(XML) into the internal data structures.

### A. internals

The internals are the data structures a list of map/records imported from the 
external data files. The data structures are the same structure and 
organization. Each data structure allows the various headers for each data 
value to be queried, and the headers listed. Each data structure can be 
accessed by an index into a list of the overall data structures, or by the 
name of the internal data structure.

The data structures are from the standard Java collections:

1. List - a list of records accessible by index
2. Map  - a record of data accessible by key or header

### B. operation

The operation of the data engine is to create an instance, load or import the 
data into the data structures. Then the internal data structures can be 
accessed or queried. A Java source code fragment to illustrate:

  DataEngine dEng = new DataEngine(); //create instance of data engine
  
  dEng.loadData(); //load data from external files
  
  After loading the data, through the data engine it can be accessed. 
  
  //get data set CountyUnemployment by name "CountyUnemployment" directly
  List< Map<String, String>> dataSet = dEng.getDataSetByName("CountyUnemployment");

  The names of the data sets in the data structures of the data engine 
  queried directly.
  
  //get data set list as a set of strings from the data engine
  Set<String> list = dEng.getDataSetNames();

  Once the data set has been accessed, it can be queried and manipulated with 
  the List or Map methods of the data structure.

## 3. Using the Source Code

The data engine source code in Java is available as "DataEngine.java" a class 
that defines the data engine, and contains the methods to access and query 
data, and the data structures that contain the datum.

###   A. Libraries

      1. Individual Library Files

There are 37-libraries as individual JAR (*.jar) files, used by the 
DataEngine.java class. The libraries are used for the import and loading of 
data from the external files. The individual library files are:

     1. SparseBitSet-1.2.jar
     2. activation-1.1.1.jar
     3. cglib-nodep-2.2.jar
     4. commons-codec-1.13.jar
     5. commons-collections4-4.4.jar
     6. commons-compress-1.19.jar
     7. commons-logging-1.2.jar
     8. commons-math3-3.6.1.jar
     9. curvesapi-1.06.jar
    10. dom4j-1.6.1.jar
    11. jackson-annotations-2.11.1.jar
    12. jackson-core-2.11.0.jar
    13. jackson-databind-2.11.1.jar
    14. jaxb-api-2.3.1.jar
    15. jaxb-core-2.3.0.1.jar
    16. jaxb-impl-2.3.2.jar
    17. jdom-1.1.3.jar
    18. jdom2-2.0.5.jar
    19. jettison-1.2.jar
    20. joda-time-1.6.jar
    21. junit-4.12.jar
    22. kxml2-min-2.3.0.jar
    23. log4j-1.2.17.jar
    24. poi-4.1.2.jar
    25. poi-excelant-4.1.2.jar
    26. poi-ooxml-4.1.2.jar
    27. poi-ooxml-schemas-4.1.2.jar
    28. poi-scratchpad-4.1.2.jar
    29. stax-1.2.0.jar
    30. stax-api-1.0.1.jar
    31. univocity-parsers-2.8.5.jar
    32. wstx-asl-3.2.7.jar
    33. xmlbeans-3.1.0.jar
    34. xmlpull-1.1.3.1.jar
    35. xom-1.1.jar
    36. xpp3_min-1.1.4c.jar
    37. xstream-1.4.12.jar

      2. Monolithic Library File

All of the thirty-seven individual library files, along with the 
DataEngine.class are packed into one large monolithic library JAR (*.jar) 
"DataEngine.jar" file. This library file is 27.9 Mb in size, and can be used 
either to work with the DataEngine.java or use the data engine itself. 

###   B. creating a project in Eclipse/IntelliJ/Netbeans

The Java source code is provided, but without any specific Integrated 
Development Environment (IDE) to use.

However the Java source code can be used in Eclipse, IntelliJ, and Netbeans. 

Creating, building, and running a project is straight forward: 

1. Create a Java project with a name such as "NITW Project" or another name.

2. Create or use a sub-directory for the source code "src" in the project 
   directory.

3. Copy the Java source code DataEngine.java, and DataEngineExamples.java 
   into the source directory.

4. Copy the Java libraries (*.jar) files into a directory "lib" in the 
   project directory.

5. Reference the libraries to include in the project settings.

6. Include the source code in the project, and then compile, build, and run.

### C. Running the Examples 

An example Java class "ExampleDataEngineQuery.java" containing 25-examples of 
methods that access and query the data to illustrate using the data engine.
 
The example methods are illustrative of accessing and querying data using the 
data engine once the external data files are loaded.

All of the methods are invoked in the "main" method of the 
ExampleDataEngineQuery.java class, which load, access, and query data in the 
internal data structures of the data engine.
