var PacksList = React.createClass({
  propTypes: {
    title: React.PropTypes.string

  },

  getInitialState: function(){

        // The images array will be populated via AJAX, and
        // the one when the user clicks on an image:

        return { pchoice: 'packs', packs: [], selectedPack: 0, arbCount: 0 };
  },

  componentDidMount: function(){

      // When the component loads, send a jQuery AJAX request

      var self = this;

      // API endpoint for my packs

      var url = 'api/packs';

      $.getJSON(url, function(result) {

        if (!result || !result.packs || !result.packs.length){
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

      $.getJSON(url, {sort: 'title'}, function(result) {

        if (!result || !result.packs || !result.packs.length){
          return;
        }

        var titlepacks = result.packs.map(function(p){

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

        self.setState({ titlepacks: titlepacks });
      });

      $.getJSON(url, {sort: 'downloads'}, function(result) {

        if (!result || !result.packs || !result.packs.length){
          return;
        }

        var downloadspacks = result.packs.map(function(p){

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

        self.setState({ downloadspacks: downloadspacks });
      });

      $.getJSON(url, {sort: 'created'}, function(result) {

        if (!result || !result.packs || !result.packs.length){
          return;
        }

        var createdpacks = result.packs.map(function(p){

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

        self.setState({ createdpacks: createdpacks });
      });

      $.getJSON(url, {sort: 'updated'}, function(result) {

        if (!result || !result.packs || !result.packs.length){
          return;
        }

        var updatedpacks = result.packs.map(function(p){

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

        self.setState({ updatedpacks: updatedpacks });
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
    var packCol = '';
    if (this.state.pchoice === 'packs') {
      packCol = this.state.packs;
    } else if (this.state.pchoice === 'titlepacks') {
      packCol = this.state.titlepacks;
    } else if (this.state.pchoice === 'downloadspacks' ) {
      packCol = this.state.downloadspacks;
    } else if (this.state.pchoice === 'createdpacks' ) {
      packCol = this.state.createdpacks;
    } else if (this.state.pchoice === 'updatedpacks' ) {
      packCol = this.state.updatedpacks;
    }
    var packList = [];
    for (var i = 0; i < packCol.length; i++) {
      var pack = packCol[i];
      var itemStyle = {
        backgroundImage: 'url(' + pack.prev + ')'
      }
      packList.push(<div className={'als-item'} key={'packprev' + pack.id} onClick={this.imageClick}><div style={itemStyle} data-id={pack.id}></div></div> )
    }
    return (
      <AlsList arbCount={this.state.arbCount} packs={packList} />
    )
  },

  sortClick: function(id) {
    var sortType = id.target.textContent.toLowerCase();
    var titlepack = this.state.titlepack;
    var downloadspack = this.state.downloadspack;
    var createdpack = this.state.createdpack;
    var updatedpack = this.state.updatedpack;
    var arbCount = this.state.arbCount + 1;

    this.setState({ pchoice: sortType + 'packs', arbCount: arbCount });
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

    var thePacks = this.state.packs;

    if (this.state.selectedPack) {
      return (
        <div>
          <div className='packsindex-background' style={{backgroundImage: window.bg }} />
          <div className='sorts'>Sort by:
            <div>{this.renderSortsList()}</div>
          </div>
          {this.renderList()}
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
          {this.renderList()}
        </div>
      );
    }
  }
});
