var Str = "Python, Java, JavaScript";
var languages = Str.split(", ");

var filteredLanguages = languages.filter(function(language) {
return language !== "Python";});

var result = filteredLanguages.join(", ");
console.log("Languages except Python:", result);

var Str = "Python, Java, JavaScript";

var updatedStr = Str.replace("Python", "TypeScript");
console.log("Changed String:", updatedStr);