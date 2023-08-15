
function order_sandwich(...items: string[]){
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected.");
    } else {
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("--------");
}

order_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
order_sandwich("Ham", "Cheese");
order_sandwich("Veggie", "Hummus", "Cucumber", "Sprouts", "Mustard");
