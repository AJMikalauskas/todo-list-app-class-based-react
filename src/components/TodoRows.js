import React, {Component} from "react";
export class TodoRows extends Component {
        // Is there a way to destructure props in Class Based Components?
    // constructor(props) {
    //     super(props);
    //    // const {key, item} = this.props;
    // }
    render = () => (
      <tr key={this.props.item.action}>
        <td>{this.props.item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={() =>  
                // interesting that it can call this a callback, calls function of this.toggleCompletion
                // in App.js , passes in props to while also calling the function, very interesting and different from functional components 
              this.props.callback(this.props.item)
            }
          />
        </td>
      </tr>
    )
}