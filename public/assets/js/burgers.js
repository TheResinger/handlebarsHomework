$(() => {
    $(".change-eaten").on("click", (e) => {
        let id = $(this).data("id");
        let newEaten = $(this).data("neweaten");
        console.log(newEaten);
        let newEatenState = {
            eaten: newEaten
        };
        console.log("Line 9");
        console.log(newEatenState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(() => {
            console.log(`Changed Eaten to ${newEaten}`);
            location.reload();
        })
    });

    $(".create-form").on("submit", (e) => {
        e.preventDefault();

        let newBurger = {
            name: $("#ba").val().trim(),
            eaten: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Created new Burger");
            location.reload();
        });
    });
});
