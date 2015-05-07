window.PackShow = React.createClass({
  propTypes: {
    pack: React.PropTypes.object
  },

  getInitialState: function() {
    return { pack: this.props.pack, selectedThumbnail: 0 }
  },

  renderThumbnails: function() {
    // if (this.props.pack) {
    //   var theImages = [];
    //   var images = this.props.pack.images;
    //   for (var i = 0; i  < this.props.pack.images.length; i++) {
    //     var imageStyle = {
    //       backgroundImage: 'url(' + images[i].url + ')'
    //     }
    //     theImages.push(
    //       <div className='thumbnail' data-id={images[i].id} style={imageStyle} onClick={this.thumbnailClick} \>
    //     )
    //   };
      return (
        <div className='thumbnails'>
          // {theImages}
        </div>
      )
    // }
  },

  thumbnailClick: function(id) {
    var images = this.state.pack.images;
    var selectedThumbnail = 0;

    for(var i = 0; i < images.length; i++) {
      if (images[i].id == parseInt(id.target.getAttribute('data-id')) ) {
        theSelectedThumbnail = images[i];
      }
    }

    this.setState({ selectedThumbnail: theSelectedThumbnail })
  },

  render: function() {
    if (!this.props.pack) {
      return (
        <div className='pack-show' />
      )
    }

    return (
      <div className='pack-show'>
        <div className='right'>
          <div className='description'>
            {this.props.pack.description}
          </div>

          {this.renderThumbnails()}

        </div>

        <div className='big-image' style={{backgroundImage: 'url(' + this.state.selectedThumbnail.url + ')'}}>

        </div>

      </div>
    )
  }
})
