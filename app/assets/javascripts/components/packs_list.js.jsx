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

            if(!result || !result.data || !result.data.length){
                return;
            }

            var packs = result.data.map(function(p){

                return {
                    id: p.id,
                    title: p.title,
                    url: p.url,
                    description: p.description,
                    createdAt: p.createdAt,
                    updatedAt: p.updatedAt,
                    author: p.author,
                    subpack: p.subpack,
                    images: p.images
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
        return <Image src={p.url} description={p.description} createdAt={p.createdAt} updatedAt={p.updatedAt} author={p.author} subpack={p.subpack} pack={p.pack} onClick={self.imageClick} />
    });

    if(!packs.length){
        packs = <i>Loading packs..</i>;
    }

    return (
      <div>
        <div>Title: {this.props.title}</div>
        <Pack title="hi" description="lalal" url="http://google.com/" author="doku" className={Pack}>

        </Pack>
      </div>
    );
  }
});
