window.PackShow = React.createClass({
  propTypes: {
    pack: React.PropTypes.object,
    selectedThumbnail: React.PropTypes.object
  },

  getInitialState: function() {
    if (this.state) {
      return (
        { selectedThumbnail: this.state.pack.images[0] }
      )
    } else {
      return (
        { pack: this.props.pack, selectedThumbnail: 0 }
      )
    }
  },

  renderThumbnails: function() {
    if (this.props.pack) {
      var theImages = [];
      for (var i = 0; i  < this.props.pack.images.all_images.length; i++) {
        var image = this.props.pack.images.all_images[i];
        theImages.push(
          <div className='thumbnail' data-id={image.id} style={{backgroundImage: 'url(' + image.url + ')'}} onClick={this.thumbnailClick}></div>
        );
      };

      return (
        <div className='thumbnails'>
          {theImages}
        </div>
      )
    }
  },

  thumbnailClick: function(id) {
    var images = this.props.pack.images.all_images;
    var selectedThumbnail = 0;

    for(var i = 0; i < images.length; i++) {
      if (images[i].id == parseInt(id.target.getAttribute('data-id')) ) {
        theSelectedThumbnail = images[i];
      }
    }

    this.setState({ selectedThumbnail: theSelectedThumbnail })
  },

  componentWillUpdate: function(nextProps, nextState) {
    if (nextProps.pack != this.props.pack) {
      this.state.selectedThumbnail = 0;
    }

  },

  render: function() {
    if (!this.props.pack) {
      return (
        <div className='pack-show' />
      )
    }

    if (this.state.selectedThumbnail) {
      return (
        <div className='pack-show'>

          <div className='big-image' style={{backgroundImage: 'url(' + this.state.selectedThumbnail.url + ')'}} />
          <div className='right'>
            <div className='title'>
              {this.props.pack.title}
            </div>
            <div className='description'>
              {this.props.pack.description}
            </div>
            <div className='url'>
              <a href={this.props.pack.url}>Download</a>
            </div>

            {this.renderThumbnails()}

          </div>

        </div>
      )
    } else if ( this.props.pack) {
      return (
        <div className='pack-show'>

          <div className='big-image' style={{backgroundImage: 'url(' + this.props.pack.images.all_images[0].url + ')'}} />
          <div className='right'>
            <div className='title'>
              {this.props.pack.title}
            </div>
            <div className='description'>
              {this.props.pack.description}
            </div>
            <div className='url'>
              <a href={this.props.pack.url}>Download</a>
            </div>

            {this.renderThumbnails()}

          </div>

        </div>
      )
    }
  }
})
