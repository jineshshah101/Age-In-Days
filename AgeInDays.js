// Trying to get an Age in terms of Days

// The first button for getting the age and converting it to days

function AgeInDay(){
    
    // To get age in terms of days first we need the birth year

    var birthyear = prompt("What year were you born?")

    // We take the current year and subtract it by the year given then multiply by 365 since its
    // how many days there are in a year

    var ageDay = (2020 - birthyear) * 365;

    // We are creating an h2 element in javascript

    var h2 = document.createElement('h2');

    // We are creating a text string
    // In this case it will give the result of how old someone is in terms of days

    var text = document.createTextNode('You are ' + ageDay + ' days old!');

    // We are setting the attribute of h2 and giving it a new id called ageDay

    h2.setAttribute('id', 'ageDay');

    // We take that attribute information and append it to the the text that was created earlier

    h2.appendChild(text);

    // We place that text information from the child and place it in the div container id called Flex

    document.getElementById('Flex').appendChild(h2);
}

// The second button to reset the result and start again

function Reset(){

    // We place the information from the h2 attribute id we gave it earlier which is ageDay
    // Note must be id created not the id in html file since it's been created
    
    document.getElementById('ageDay').remove();
}