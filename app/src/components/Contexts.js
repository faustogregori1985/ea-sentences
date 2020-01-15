import React, { Component } from 'react'
import { connect } from 'react-redux';
import Events from './Events';

const mapStateToProps = state => {
  return {
    ...state
  };
};

function NoContextsAvailable() {
    return (<p>No contexts available</p>);
}

function ContextList(props) {
    if (!props.contexts) {
      return null;
    }
    return (
        <ul>
            {
                props.contexts.map(item => {
                    const itemId = `context-${item.id}`;
                    return <li className={ itemId } key={itemId}>
                        {item.text}
                        {   
                            item.children.length > 0 &&
                            <Events parentId={item.id}></Events>
                        }
                    </li>;
                })
            }
        </ul>
    );
  }

class Contexts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    const contexts = this.props.contexts[this.props.parentId] ? this.props.contexts[this.props.parentId] : []; // this.props.contexts[this.props.parentId];
    return contexts.length > 0
        ? <ContextList contexts={contexts} parentId={this.state.parentId}/>
        : <NoContextsAvailable/>;
  }
}


export default connect(mapStateToProps)(Contexts);
