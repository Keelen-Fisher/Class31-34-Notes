import React from "react";

// create our instance of CreateContext
// this exists so we can use it to consume provided content
export const ModeContext = React.createContext();

class ModeProvider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'dark'
    }
  }

  render(){
    return(
      <ModeContext.Provider value={this.state}>
        {this.props.children}
      </ModeContext.Provider>

    )
  }
}


export default ModeProvider
