$( document ).ready(function() {

    // my array
    var topic = ["Andrei Tarkovsky", "Akira Kurosawa", "Billy Wilder", "Federico Fellini", "David Lynch", "Charlie Chaplin", "Jean Renoir","Hayao Miyazaki"];
    
    //function that displays the gif buttons
    
    function displayGifButtons() {
        $("#gifButtonsView").empty();
        for (var i = 0; i < topic.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("director");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", topic[i]);
            gifButton.text(topic[i]);
            $("#gifButtonsView").append(gifButton);
        }
    }
    
    //function to add new button
    
    function addNewButton() {
        $("#addGif").on("click", function() {
            var director = $("#topicInput").val().trim();
            if (director == ""){
                return false;
            }
            topic.push(director);
    
            displayGifButtons();
            return false;
            });
    }
    
    //Removes last button
    function removeLastButton() {
        $("removeGif").on("click", function() {
            topic.pop(director);
            displayGifButtons();
            return false;
        });
    
    }
    
    //Function for display gifs
    
    function displayGifs() {
        var director = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + director + "&api_key=B3lTsccRMTx05v4xSB3BdTVETRXnCNkC";
        
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
    
        .done(function(response) {
            $("#gifsView").empty();
            //Display results of the gifs
            var results = response.data;
            if (results == ""){
                alert("There is no Giphy for this!");	
            }
            for (var i = 0; i<results.length; i++){
                //Puts the gifs in a div
                var gifDiv = $("<div1>");
                // Rating of gif
                var gifRating = $("<p>").text("Rating " + results[i].rating);
                gifDiv.append(gifRating);
    
                // Pull the gif
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                // Pause the gif
                gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
                // Animating the images
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
                //The images come in paused already
                gifImage.attr("data-state", "still");
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                //Adding a new div
                $("#gifsView").prepend(gifDiv);
            }
        });
    }
    
    
    //The list of already created directors
    displayGifButtons();
    addNewButton();
    removeLastButton();
    
    
    
    //The Event listeners
    $(document).on("click", ".director", displayGifs);
    $(document).on("click", ".image", function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    
        });
    
    });