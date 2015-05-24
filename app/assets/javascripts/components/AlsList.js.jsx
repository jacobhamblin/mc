var AlsList = React.createClass({
  getInitialState: function () {
    return { arbCount: this.props.arbCount };
  },

  componentDidUpdate: function() {
    var packsIndex = $(React.findDOMNode(this.refs.packsIndex));
    var viewport = $(React.findDOMNode(this.refs.viewport));

    var wide = (Math.floor(( window.innerWidth * 0.9 ) / 180 ) - 1);

    if (viewport.css('display') == 'none') {
      viewport.css('display', 'block');
      packsIndex.als({
        visible_items: wide, scrolling_items: wide, circular: 'yes', orientation: 'horizontal'
      });
    }
  },

  render: function () {

    if (this.state.arbCount > -1) {
      return (
        <div>
          <div className='als-container' id='packs-index' ref='packsIndex'>
            <span className='als-prev arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

            <div className='als-viewport' ref="viewport" style={{display: 'none'}}>
              <div className='als-wrapper'>
                <ReactCSSTransitionGroup transitionName='pack-list'>
                  {this.props.packs}
                </ReactCSSTransitionGroup>
              </div>
            </div>
            <span className='als-next arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>


          </div>
        </div>
      )
    }
  },
})
