import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
selector: 'hello-world',
template: `
<ul>
    <li *ngFor="#name of names">Hello {{ name }}</li>
</ul>
`
})
class HelloWorld {
    names: string[]; // Array<string>

    constructor() {
        this.names = ['Bob', 'Marley', 'Tuppac', 'Amaru', 'Shakur'];
    }
}
bootstrap(HelloWorld)