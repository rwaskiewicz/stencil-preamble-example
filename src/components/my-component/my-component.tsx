import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import {sum} from '../../my.worker';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  data: string;

  async componentWillLoad() {
    console.log(await sum(2, 4));
  }

  private getText(): string {
    return format(
      this.first,
      this.middle,
      this.last
    );
  }

  render() {
    return (
      <div>
        Hello, World! 
        I'm {this.getText()} 
        {this.data}
      </div>
    );
  }
}
