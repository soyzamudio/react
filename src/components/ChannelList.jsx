import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

var { Card, List } = mui;

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        'Dogs',
        'Cats'
      ]
    };
  }

  render() {
    var channelsNodes = this.state.channels.map( (channel, index) => {
      return (
        <Channel channel={channel} key={index} />
      );
    });

    return (
      <Card style={{
          flexGrow: 1
        }}>
        <List>
          {channelsNodes}
        </List>
      </Card>
    );
  }
}

export default ChannelList;
