import React, { Component } from 'react'

export default class Rate extends Component {
    state = {
      smiley : ""
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
// state = {
//     mood: 0
// };

// changeMood = () => {
//   this.setState({
//     mood: Math.round(10*(Math.random()-.5))
//   });
// }

// render() {
//   console.log('The mood is: ', this.state.mood); // check the console to see how mood is changing

//   if (this.state.mood < 0) {
//       return <span onClick={this.changeMood}> 😭</span>;
//   } else if (this.state.mood > 0) {
//       return <span onClick={this.changeMood}> 😄</span>;
//   } else {
//       return <span onClick={this.changeMood}> 😐</span>;
//   }
// }
// }