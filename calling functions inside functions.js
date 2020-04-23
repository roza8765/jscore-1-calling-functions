function yearOfBirth(age) {
    const year = 2020;
    return year - age;
}
console.log(yearOfBirth(27));

function myInfo(name, age) {
    let yearBirth = yearOfBirth(age);
    const message =
        "My Name is " + name + " " + "and I was born in" + " " + yearBirth;
    return message;
}
console.log(myInfo("Masah", 10));