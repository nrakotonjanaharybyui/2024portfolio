/* constructor.js
Author: Narindra Rakotonjanahary
Version: 1.0
*/

export function construct_header(){
    let header = document.querySelector('#header');
    let main = document.createElement('div');
    let menu = [{name:'Home', link:'index.html'}, {name:'About', link:'#'}, {name:'Projects', link:'projects.html'}, {name:'Contact', link:'#'}];
    menu.forEach(function(element){
        let link = new Anchor_link(element.name, element.link);
        main.appendChild(link.place());
    });
    header.appendChild(main);
    
}

class Anchor_link {
    constructor(text, href){
        this.href = href;
        this.text = text;
    }
    place(){
        let item = document.createElement('a');
        item.innerHTML = this.text;
        item.href = this.href;
        return item;
    }
}
