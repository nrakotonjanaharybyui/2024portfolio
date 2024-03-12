/* constructor.js
Author: Narindra Rakotonjanahary
Version: 1.0
*/
export function construct_nav(){
    let header = document.querySelector('#header');
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let menu = [{name:'Home', link:'index.html'}, {name:'About', link:'#'}, {name:'Projects', link:'projects.html'}, {name:'Contact', link:'#'}];
    menu.forEach(function(element){
        let link = new Anchor_link(element.name, element.link);
        ul.appendChild(link.place());
    });
    nav.appendChild(ul);
    header.appendChild(nav);
    
}


class Anchor_link {
    constructor(text, href){
        this.href = href;
        this.text = text;
    }
    place(){
        let item = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.innerHTML = this.text;
        anchor.href = this.href;
        item.appendChild(anchor);
        return item;
    }
}
