# giphy
## by Eastern Lai

### Purose of this project is to provide the user with a website where a user can enter the name of a fruit and have images related to that fruit via Giphy API.  
### These images will turn into gif's when clicked and revert back to still frame images when clicked again.  

## Technologies used
1. HTML
2. CSS
3. Bootstrap
4. Javascript
5. API's
6. JQuery
7. github 
8. gitbash

## Code Example

```
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
```

## Snapshot

![alt text](https://github.com/easternlai/giphy/blob/master/demo.JPG?raw=true)

