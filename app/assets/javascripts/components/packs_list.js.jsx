window.PacksList = React.createClass({
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
                  titleJoined: p.title.replace(/\s+/g, '')
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
      packList.push(<div className={'als-item'} onClick={this.imageClick}><div style={itemStyle} data-id={pack.id}></div></div> )
    }
    return (
      packList
    )
  },

  render: function() {
    var self = this;

    var packs = this.state.packs.map(function(p){
        return <ul><li>'url='{p.url}</li> <li>'description='{p.description}</li> <li>'createdAt='{p.createdAt}</li> <li>'updatedAt='{p.updatedAt}</li> <li>'author='{p.author}</li> <li>'subpacks='{p.subpacks}</li>
        <li>'images='{p.images}</li>
        <li>'prev='{p.prev}</li>
        </ul>
    });

5
    if(!packs.length){
        packs = <i>Loading packs..</i>;
    }

    var thePacks = this.state.packs
    return (
      <div>
        <div className='packsindex-background' />
        <div>
          <div className='als-container' id='packs-index'>
            <span className='als-prev arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

            <div className='als-viewport' style={{display: 'none'}}>
              <div className='als-wrapper'>
                {this.renderList()}
              </div>
            </div>

            <span className='als-next arrow'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

          </div>
        </div>
        <PackShow pack={ this.state.selectedPack } />
      </div>
    );
  }
});

var wide = (Math.floor(( window.innerWidth * 0.9 ) / 210 ) - 1);
console.log(wide)

$(setTimeout(function(){
  $(".als-viewport").css('display', 'block');
  $("#packs-index").als({
    visible_items: wide, scrolling_items: wide, circular: 'yes', orientation: 'horizontal'
  });
}, 700));
