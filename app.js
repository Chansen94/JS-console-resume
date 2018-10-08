



// Brute force method to output the resume intro
function displayPosition(name, title, description) {
    name = name.toUpperCase()
    console.log("Name: " + name)
    console.log("Title: " + title)
    console.log("Description: " + description)
};

displayPosition('connor hansen', 'Data Analytics Consultant', 'Analyze data and create visualizations to provide key insights for directing the business.');

// Using loops to print out the properties and values to create resume
let me = {
    'Name:': "connor hansen",
    'Title:' : "Data Analytics Consultant",
    'Description:' : "Analyze data and create visualizations to provide key insights for directing the business."
}

function objectPosition(person) {
    // person.Name = person.Name.toUpperCase();
    for (let i in person) {
        if (i == 'Name:') {
            person[i] = person[i].toUpperCase();
        }
        console.log(i + ' ' + person[i]);
    }
};

objectPosition(me);


console.log('------------------------------------------------------')
// Creating a list (JS array) of skills and whether they are cool or not
let skills = [
    ["Data Cleaning", false],
    ["Data Analysis", false],
    ["Data Visualization", true],
    ["WordPress", true]
];


// Creating a function to print to the console 'BAM:' before the skill if it is cool
function displaySkills(skilllist) {

    console.log("My skills:")

        for (let p in skilllist) {
            if (skilllist[p][1] == false) {
                console.log('* ' + skilllist[p][0]);
            } else {
                console.log('* '+ "BAM: " + skilllist[p][0]);
            }
        }
};
displaySkills(skills);

console.log('------------------------------------------------------')

// Using an object instead of a list
console.log("Second Try:")

let skillz = {
    "Data Cleaning" : false,
    "Data Analysis" : false,
    "Data Visualization" : true,
    "WordPress" : true
};

function whatskills(theseones) {
console.log("My skills:")
    for (let q in theseones) {

        if (theseones[q] == true) {
            console.log('* ' + "BAM: " + q);
        } else {
            console.log('* ' + q);
        }
    };
};

whatskills(skillz);


