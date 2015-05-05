window.PacksList = React.createClass({
  propTypes: {
    title: React.PropTypes.string

  },

  getInitialState: function(){

        // The images array will be populated via AJAX, and
        // the one when the user clicks on an image:

        return { packs: [] };
  },

  componentDidMount: function(){

      // When the component loads, send a jQuery AJAX request

      var self = this;

      // API endpoint for Instagram's popular images for the day

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
                  prev: p.prev
              };

          });

          // Update the component's state. This will trigger a render.
          // Note that this only updates the images property, and does
          // not remove the array.

          self.setState({ packs: packs });

      });

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

    return (
      <div>
        <div className='als-container' id='packs-index'>
          <span className='als-prev'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

          <div className='als-viewport'>
            <div className='als-wrapper'>
              { this.state.packs.map(function(p){
                return <div className={'als-item ' + p.id}></div>
              }) }
            </div>
          </div>

          <span className='als-next'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/Arrow.svg' alt='prev' title='previous' /></span>

        </div>
      </div>
    );

    this.state.packs.map(function(p) {
      $('.{p.id}').css('background-image: url("{p.prev}")')
    })
  }
});

$(function(){
  $("#packs-index").als({
    visible_items: 2, scrolling_items: 2, circular: 'yes'
  });
});
