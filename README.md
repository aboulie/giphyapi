## GiphyAPI
This is the sixth assignment of the UCF Coding Bootcamp. This assignment utilizes the GIPHY API to create a dynamic web page presents the user with the gifs of their choice.

## This app displays buttons related to a certain topic and allows you to add search terms to generate additional buttons that when clicked, accesses the GIPHY API and generates 10 static GIPHY images. Click on an image to pause or play the GIF.

## Requirements
This app uses the terms from a user input box and pushes them into an array, which creates additional buttons in the HTML. When the button is clicked, additional non-animated, static gif images are retrieved via the GIPHY API and puts them on the page.
- When the user clicks on a still GIPHY image, the gif becomes animated. 
- If the user clicks the gif again, it becomes still again.
- Each gif displayed has a rating (PG, G, etc.). 

## Technologies Used
- HTML
- CSS Bootstrap
- JavaScript to create a dynamic page
- jQuery for DOM Manipulation
- AJAX for API GET requests

## Code Explanation
- A form was put in place to take the value from a user input box and add it into the `topics` array.
- CSS Bootstrap was utilized to display the page into columns and present the gifs in a gallery format.
- An AJAX Call to Giphy's API was created to access the images by the topic entered.
- Event listeners on "click" were used as follows:
	- To execute the function that adds topics to the array: $("#addShow").on("click", function(event)
	- To display the gifs to the page by clicking on the topic buttons: $(document).on("click", "#show", displayNetflixShow).
	- To pause and play the gifs by clicking on the Gifs: $(document).on("click", ".director", displayGifs).