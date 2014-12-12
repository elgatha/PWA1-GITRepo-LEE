/*
- Elgatha Lee
- Debug III
- December 11, 2014
 */

// Create privatized scope using a self-executing function
(function(){ // automatically starts the function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), 
	// creates three variables and defines them accordingly
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
    // fixed spelling of validate
	var validate = function(query){
		 // stores value of function
		
		// Trim whitespace from start and end of search query
        // changed assignment to comparison operators
		while(query.charAt(0) === " "){ 
		// check index of search query 
			query = query.substring(1, query.length);
			 // deleted space
		};
		while(query.charAt(query.length-1) === "") { 
		// end character space
            query = query.substring(0, query.length - 1); 
      // deleted space
        };// bracket
		// Check search length, must have 3 characters
		if(query.length < 3){ // if the query length is less than 3 characters...
            // added end "
			alert("Your search query is too small, try again."); 
			// tell user query is too small
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); 
			// focuses on the search box
			return;
		};
		
		search(query); 
		// search function
	};
	
	// Finds search matches
    // added opening bracket
	var search = function(query){ 
	// search variable then define as the value of the function
		
		// split the user's search query string into an array
		var queryArray = query.split(" "); 
		// split the words/store in variable queryArray

		// array to store matched results from database.js
		var results = []; 
		// create results variable

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) { 
		// create for loop to check length of database add increments

            var dbTitleEnd = db[i].indexOf('|'); 
			// each db[i] is a single video item & ends with a "|"
           
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);
		
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) { 
			// loop through query
                // fixed to LowerCase
                var qitem = queryArray[ii].toLowerCase(); 
				
				var compare = dbitem.indexOf(qitem); 
                if (compare !== -1) {
					 // If a match is found, push db[i] into results
                    results.push(db[i]);
                };
            // bracket
            };
        // bracket
        };
		
		results.sort(); 
		// sort elements
		
		// Check that matches were found, and run output functions
		if(results.length == 0){ 
		// check length
			noMatch(); 
			//noMatch
		}else{ 
			showMatches(results); 
			// showMatches function
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ 
	// create variable noMatch | define as function
		var html = ''+ 
		// html | concatenated string
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html; 
		// html DOM
	};
	
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ 
	// var showMatches, defined as the value
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
		// 3 variables
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			var titleEnd = results[i].indexOf('|');
            // fixedsubString
			title = results[i].substring(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
		// view html string to DOM
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() { 
	// check for duplicates
        var query = searchInput.value;
        validate(query); // call function argument query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    }; // bracket

})();