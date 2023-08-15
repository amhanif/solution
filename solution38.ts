function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for different cities
describe_city("Paris", "France");
describe_city("New York", "USA");
describe_city("Lahore"); // Will use the default country