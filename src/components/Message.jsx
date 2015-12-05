import React from 'react';
import mui from 'material-ui'

var { ListItem, Avatar } = mui;

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/0b4/2c4/3e7a565.jpg"/ > }
        >{this.props.message}
      </ListItem>
    )
  }
}

export default Message;
