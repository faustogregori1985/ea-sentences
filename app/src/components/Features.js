import React, { Component } from 'react'
import { connect } from 'react-redux';
import Contexts from './Contexts';

const mapStateToProps = state => {
  return {
    ...state
  };
};

function NoFeaturesAvailable() {
    return (<p>No features available</p>);
}

function FeatureList(props) {
    if (!props.features) {
      return null;
    }
    return (
        <ul>
            {
                props.features.map(item => {
                    const itemId = `feature-${item.id}`;
                    return <li className={ itemId } key={itemId}>
                        {item.text}
                        <Contexts 
                            parentId={item.id}
                        />
                    </li>;
                })
            }
        </ul>
    );
  }

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    const featureList = Object.values(this.props.features);
    return featureList.length > 0
        ? <FeatureList features={featureList}/>
        : <NoFeaturesAvailable/>;
  }
}


export default connect(mapStateToProps)(Features);
