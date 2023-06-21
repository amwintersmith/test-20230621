import { LightningElement } from 'lwc'


export default class errortest extends LightningElement {
    helloWorld() {
        console.log('Hello world');
    }

    connectedCallback() {
        this.helloWorld();
    }
}