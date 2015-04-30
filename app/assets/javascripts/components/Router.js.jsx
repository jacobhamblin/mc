$(function () {
  ReactRouter = window.ReactRouter;
  var DefaultRoute = ReactRouter.DefaultRoute;
  var HistoryLocation = ReactRouter.HistoryLocation;
  var Route = ReactRouter.Route;
  this.routes = (
    <Route handler={PacksList} path='/'>
      <DefaultRoute handler={PacksList} />
      <Route name="packs" handler={PacksList} />
    </Route>
  );

  ReactRouter.run(this.routes, HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('content'));
  });
});
