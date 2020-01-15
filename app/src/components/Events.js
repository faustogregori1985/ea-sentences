import React, { Component } from 'react'
import { connect } from 'react-redux';
import Sentences from './Sentences';

const mapStateToProps = state => {
  return {
    ...state
  };
};

function NoEventsAvailable() {
    return (<p>No Events available</p>);
}

function EventList(props) {
    if (!props.events) {
      return null;
    }
    return (
        <ul>
            {
                props.events.map(item => {
                    const itemId = `event-${item.id}`;
                    return <li className={ itemId } key={itemId}>
                        {item.text}
                        <Sentences parentId={item.id} eventParentId={item.parentId}></Sentences>
                    </li>;
                })
            }
        </ul>
    );
  }

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    const events = this.props.events[this.props.parentId] ? this.props.events[this.props.parentId] : []; // this.props.contexts[this.props.parentId];

    return events.length > 0
        ? <EventList events={events} parentId={this.state.parentId} />
        : <NoEventsAvailable/>;
  }
}


export default connect(mapStateToProps)(Events);
