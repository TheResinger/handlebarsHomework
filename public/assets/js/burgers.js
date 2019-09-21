$(document).ready(() => {
    $(".change-eaten").on("click", function () {
        var id = $(this).attr('id');
        let newEaten = $(this).attr("newvalue");
        console.log(id);
        console.log(newEaten);
        let newEatenState = {
            devoured: newEaten
        };
        console.log(newEatenState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(() => {
            console.log(`Changed Devoured to ${newEaten}`);
            location.reload();
        })
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#ba").val().trim(),
            devoured: 0
        };
        $("#ba").val("");
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Created new Burger");
            location.reload();
        });
    });
// ?????????
    $(".eatenItem").on("click", function(event) {
        var id = $(this).attr("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            () => {
                console.log("Deleted Burger : " + id);
                location.reload();
            }
        )
    });
})