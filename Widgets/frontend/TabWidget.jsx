import React from 'react';

class TabWidget extends React.Component {
  constructor (props) {
    super(props);
    this.state = {tabIndex: 0};

  }

  render () {
    return (
      <div className="cheese">
      <ul>
        this.props.map ((el, idx) => {
          <h1 key="1">
            {el.title}
          </h1>
        });
      </ul> 
      <br />
      <article>
        {el.content}
      </article>
    </div>
    )
  }
}

export default TabWidget;