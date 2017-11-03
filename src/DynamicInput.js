import React from 'react'


export default class DocumentsFieldSet extends React.Component{
  constructor(props){
    super(props);
    
    this.state = { 
      documents: []
    }
    
    this.add = this.add.bind(this);
  }

  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });
  }
  
  render () {
    const input = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } />
    });
    
    return <div>
    <button onClick={ this.add }>Add</button>
    <br/>
    { input }
    </div>
  }
}

const DocumentInput=()=>
 <input type="text" />