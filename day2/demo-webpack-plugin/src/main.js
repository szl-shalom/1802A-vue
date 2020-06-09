let arr = [1, 2, 3, 4, 5];
let ul = document.createElement("ul");
ul.innerHTML = arr.map(item => `<li>${item}</li>`).join("");
document.body.append(ul)



