import { customElement } from 'aurelia-framework';

@customElement('foo')
export class Foo {

  constructor() {
    console.log('Foo');
  }
}