//api key: TjZHvXe4jU4oDqHaGeSL2iB71sKmbBbI

var fruits = ["kiwi","mango","pear", "blueberries"];

$(document).on("click", "new-button", post_results);

// function that displays buttons in array

function display_buttons (){
    for (i = 0; i < fruits.length; i++){
        var newButton = $("<div>");
        newButton.attr("type","submit");
        newButton.attr("value", "subject button");
        newButton.attr("data-name", fruits[i]);
        newButton.addClass("subject-button");
        newButton.text(fruits[i]);
        console.log(fruits[i]);
        $("#button-view").append(newButton);
    }
}

// function that displays information of each button clicked
function post_results (){
    var subject = 
}

display_buttons();
//"on click" function that adds to the existing array