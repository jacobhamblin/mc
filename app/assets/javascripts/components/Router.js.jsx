$(function () {
  ReactRouter = window.ReactRouter;
  var DefaultRoute = ReactRouter.DefaultRoute;
  var HistoryLocation = ReactRouter.HistoryLocation;
  var Route = ReactRouter.Route;
  this.routes = (
    <Route handler={PacksIndex} path='/'>
      <DefaultRoute handler={PacksIndex} />
      <Route name="packs" handler={PacksIndex} />
    </Route>
  );

  ReactRouter.run(this.routes, HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('content'));
  });
});
