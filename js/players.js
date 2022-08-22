// function myFunction() {

//     // Create an "li" node:
//     const li = document.createElement("li");

//     // Create a text node:
//     const textnode = document.createTextNode(document.getElementById('p').innerText);
//     // Append the text node to the "li" node:
//     li.appendChild(textnode);

//     // Append the "li" node to the list:
//     document.getElementById("list").appendChild(li);
// }




document.getElementById('messi-btn').addEventListener('click', function () {
    const messiList = document.getElementById('ordered-list');
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    messiList.appendChild(li);
})