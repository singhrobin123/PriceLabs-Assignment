<h1 align="center">
   <b>
        PriceLabs Assignment<br>
    </b>
</h1>


###### 

  ## How it works?
+ **For this assignment, I have used Node.js to create the script. The main.js file contains the controller function, which is the starting point of the script. This function takes two arguments, namely address and pageSize, which are dynamic. From the controller, we call the fetchData function, which takes two arguments - the request body data and the URL. In this function, we fetch data using axios by hitting a POST request.**

+ **After fetching the data, I have used the searchObjectForKey function to get the listings key. This function takes two parameters - the object and the key we are looking for. Once we get the listings, we retrieve the maxEnddates from the array. Next, we create an array of objects that contain listingId, headline, and rate summary.**

+ **Finally, I call the generateCsv function, passing in the csvData array and maxDate. This function generates all the required columns for the CSV file, such as Unit ID, name, and all the dates starting from today to maxEndDate. It then creates a CSV file named data.csv.**

  ## How to start?
  
+ **Clone the repository to your local machine.**
+ ```git clone https://github.com/singhrobin123/PriceLabs-Assignment.git```
+ ```npm install```
+ ```npm start```

## Author
 + **Robin Singh**
    
## License
  
###### This project is licensed under the MIT License - see the LICENSE.md file for details.

    
    
