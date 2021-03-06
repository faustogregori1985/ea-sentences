import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSentence, removeSentence } from '../store/actions';


const mapStateToProps = state => {
  return {
    ...state
  };
};
function mapDispatchToProps(dispatch) {
    return {
        addSentence: sentence => dispatch(addSentence(sentence)),
        removeSentence: id => dispatch(removeSentence(id)),
    };
}

class Sentences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      sentence: '',
    };
  }
  handleChange(Sentence) {
    this.setState({ sentence: Sentence.target.value });
  }
  addNewSentence() {
    this.props.addSentence({
        id: Math.random().toString(36).substr(2, 9),
        text: this.state.sentence,
        parentId: this.state.parentId,
        eventParentId: this.state.eventParentId,
    });
    this.state.sentence = '';
  }
  removeSentence(id) {
    this.props.removeSentence({ id, parentId: this.props.parentId });
  }
  render() {
    return (
        <ul>
            {
                (this.props.sentences[this.props.parentId] ? this.props.sentences[this.props.parentId] : [])
                  .map((item, index) => {
                    const itemId = `sentence-${index}`;
                    return <li className={ itemId } key={itemId}>
                        {item.text}
                        <button data-testid={`remove-sentence-${index}`} onClick={ this.removeSentence.bind(this, item.id) }>Remove</button>
                    </li>;
                })
            }
                <li>
                    <input
                        aria-label={`sentence-input-${this.state.parentId}`}
                        type="text"
                        name="sentence"
                        value={this.state.sentence}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button onClick={this.addNewSentence.bind(this)}>add new sentence</button>
                </li>
        </ul>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sentences);
