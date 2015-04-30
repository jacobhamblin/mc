var Image = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    description: React.PropTypes.string,
    createdAt: React.PropTypes.string,
    updatedAt: React.PropTypes.string,
    author: React.PropTypes.instanceOf(User),
    subpack: React.PropTypes.instanceOf(Subpack),
    pack: React.PropTypes.instanceOf(Pack)
  },

  render: function() {
    return (
      <div>
        <div>Url: {this.props.url}</div>
        <div>Description: {this.props.description}</div>
        <div>Created At: {this.props.createdAt}</div>
        <div>Updated At: {this.props.updatedAt}</div>
        <div>Author: {this.props.author}</div>
        <div>Subpack: {this.props.subpack}</div>
        <div>Pack: {this.props.pack}</div>
      </div>
    );
  }
});
