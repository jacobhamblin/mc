var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({

  render: function () {
    $('.menu-icon').click(function() {
      $(this).toggleClass('is-active');
    });

    return (
      <div>

        <RouteHandler />
      </div>
    )
  }
})
