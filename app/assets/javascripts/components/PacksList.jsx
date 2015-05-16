var PacksList = React.createClass({
  propTypes: {
    title: React.PropTypes.string

  },

  getInitialState: function(){

        // The images array will be populated via AJAX, and
        // the one when the user clicks on an image:

        return { packs: [], selectedPack: 0 };
  },

  componentDidMount: function(){

      // When the component loads, send a jQuery AJAX request

      var self = this;

      // API endpoint for my packs

      var url = 'api/packs';

      $.getJSON(url, function(result){

          if(!result || !result.packs || !result.packs.length){
              return;
          }

          var packs = result.packs.map(function(p){

              return {
                  id: p.id,
                  title: p.title,
                  url: p.url,
                  description: p.description,
                  createdAt: p.createdAt,
                  updatedAt: p.updatedAt,
                  author: p.author,
                  subpacks: p.subpacks,
                  images: p.all_images,
                  prev: p.prev,
                  titleJoined: p.title.replace(/\s+/g, ''),
                  downloads: p.downloads,
                  tags: p.tags,
                  all_tags: p.all_tags
              };

          });

          // Update the component's state. This will trigger a render.
          // Note that this only updates the images property, and does
          // not remove the array.

          self.setState({ packs: packs });

      });

  },

  imageClick: function(id) {
    var packs = this.state.packs;
    var theSelectedPack = 0;

    for(var i = 0; i < packs.length; i++) {
      if (packs[i].id == parseInt(id.target.getAttribute('data-id')) ) {
        theSelectedPack = packs[i];
      }
    }

    this.setState({ selectedPack: theSelectedPack })
  },

  renderList: function() {
    var packList = [];
    for (var i = 0; i < this.state.packs.length; i++) {
      var pack = this.state.packs[i];
      var itemStyle = {
        backgroundImage: 'url(' + pack.prev + ')'
      }
      packList.push(<div className={'als-item'} key={'packprev' + pack.id} onClick={this.imageClick}><div style={itemStyle} data-id={pack.id}></div></div> )
    }
    return (
      packList
    )
  },

  sortClick: function(id) {
    var sortType = id.target.textContent.toLowerCase();

    var self = this;

    // API endpoint for my packs

    var url = 'api/packs';

    $.getJSON(url, {sort: sortType}, function(result){

        if(!result || !result.packs || !result.packs.length){
            return;
        }

        var packs = result.packs.map(function(p){

            return {
                id: p.id,
                title: p.title,
                url: p.url,
                description: p.description,
                createdAt: p.createdAt,
                updatedAt: p.updatedAt,
                author: p.author,
                subpacks: p.subpacks,
                images: p.all_images,
                prev: p.prev,
                titleJoined: p.title.replace(/\s+/g, ''),
                downloads: p.downloads,
                tags: p.tags,
                all_tags: p.all_tags
            };

        });

        // Update the component's state. This will trigger a render.
        // Note that this only updates the images property, and does
        // not remove the array.

        self.setState({ packs: packs });

    });

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

  renderSortsList: function () {
    var sorts = ['Title', 'Downloads', 'Created', 'Updated'];
    sortOptions = [];
    for (var i = 0; i < sorts.length; i++) {
      sortOptions.push(<div onClick={this.sortClick}>{sorts[i]}</div>);
    }

    return sortOptions;
  },

  render: function() {

    var self = this;

    var packs = this.state.packs.map(function(p){
        return <ul><li>'url='{p.url}</li> <li>'description='{p.description}</li> <li>'createdAt='{p.createdAt}</li> <li>'updatedAt='{p.updatedAt}</li> <li>'author='{p.author}</li> <li>'subpacks='{p.subpacks}</li>
        <li>'images='{p.images}</li>
        <li>'prev='{p.prev}</li>
        </ul>
    });

    if(!packs.length){
        packs = <i>Loading packs..</i>;
    }

    var thePacks = this.state.packs

    if (this.state.selectedPack) {
      return (
        <div>
          <div className='packsindex-background' style={{backgroundImage: window.bg }} />
          <div className='sorts'>Sort by:
            <div>{this.renderSortsList()}</div>
          </div>
          <div>
            <div className='als-container' id='packs-index' ref='packsIndex'>
              <span className='als-prev arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

              <div className='als-viewport' ref="viewport" style={{display: 'none'}}>
                <div className='als-wrapper'>
                  <ReactCSSTransitionGroup transitionName='pack-list'>
                    {this.renderList()}
                  </ReactCSSTransitionGroup>
                </div>
              </div>

              <span className='als-next arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

            </div>
          </div>
          <div className='packshow-container'>
            <PackShow pack={ this.state.selectedPack } />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='packsindex-background' style={{backgroundImage: window.bg}} />
          <div className='sorts'>Sort by:
            <div>{this.renderSortsList()}</div>
          </div>
          <div>
            <div className='als-container' id='packs-index' ref='packsIndex'>
              <span className='als-prev arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

              <div className='als-viewport' ref="viewport" style={{display: 'none'}}>
                <div className='als-wrapper'>
                  <ReactCSSTransitionGroup transitionName='pack-list'>
                    {this.renderList()}
                  </ReactCSSTransitionGroup>
                </div>
              </div>

              <span className='als-next arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

            </div>
          </div>
        </div>
      );
    }
  }
});