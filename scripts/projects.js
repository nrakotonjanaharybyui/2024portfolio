/* projects.js
Author: Narindra Rakotonjanahary
Version: 1.0
Handles all extra behavior for the "projects" page
*/


// Get the projects list
async function getProjectsList(){
    const endpoint = new URL(`https://api.jsonbin.io/v3/b/65efa283266cfc3fde970deb`);
    endpoint.searchParams.set("X-Bin-Meta", "false");
    endpoint.searchParams.set("Meta", "false");
    const response = await fetch(endpoint);
    const data = await response.json();

    if(response.status == 200){
        let projectsList = data.record;
        construct_projects(projectsList);
    }
    else{
        alert("Error loading projects list, please try again later");
    }    
}

function construct_projects(list){
    let myList = document.querySelector('#projectList');
    list.forEach(project => {
        let name = project.name;
        let desc = project.description;
        let creation = project.creation;
        let author = project.author;
        let tags = project.tags;
        let img = project.img;
        let item = document.createElement('li');
        item.classList.add('projectItem');
        item.innerHTML = `<h2>${name}</h2>`;
        item.innerHTML += `<img src='${img}' alt='${name} picture'>`
        item.innerHTML += `<p>${desc}</p>`;
        myList.appendChild(item);
    });
}

getProjectsList();


