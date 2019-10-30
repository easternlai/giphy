//api key: TjZHvXe4jU4oDqHaGeSL2iB71sKmbBbI

var fruits = ["kiwi","mango","pear", "blueberries"];
display_buttons();

$(document).on("click", ".new-button", postResults);

$(document).on("click", ".gif", gifChanger);
$("#submit-subject").on("click", getSubject);


// function that displays buttons in array

function display_buttons (){
    $("#button-view").text("");
    for (i = 0; i < fruits.length; i++){
        var newButton = $("<div>");
        newButton.addClass("new-button");
        newButton.attr("type","submit");
        newButton.attr("value", "subject button");
        newButton.attr("data-name", fruits[i]);
        newButton.attr("data-state", "animate");
        newButton.addClass("subject-button");
        newButton.text(fruits[i]);
        console.log(fruits[i]);
        $("#button-view").append(newButton);
    }
}

// function that displays information of each button clicked
function postResults (){
    var subject = $(this).attr("data-name");
    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + subject + "&limit=1&api_key=TjZHvXe4jU4oDqHaGeSL2iB71sKmbBbI";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&limit=10&api_key=TjZHvXe4jU4oDqHaGeSL2iB71sKmbBbI";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var giphy = response.data;
        for (i = 0; i < 10; i++){
            var rating = giphy[i].rating;
            var stillHolder = giphy[i].images.fixed_width_still.url;
            var animatedHolder = giphy[i].images.fixed_width.url;
            console.log(stillHolder);
            var img = $("<img>");
            $(img).attr("data-still", stillHolder);
            $(img).addClass("gif");
            $(img).attr("data-state", "still");
            $(img).attr("data-animate", animatedHolder);
            $(img).attr("data-rating", rating);
            $(img).attr("src", stillHolder);
            $(".photos-div").prepend(img);
        }
        });
}

function gifChanger (){
    if($(this).attr("data-state") === "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        console.log($(this).attr("data-state"));
    } else if($(this).attr("data-state") === "animate"){
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        console.log($(this).attr("data-state"));
    }
}

function getSubject (){
    var newSubject = $("#input-subject").val();
    fruits.push(newSubject);
    display_buttons();
}