  var ReactRouter = ReactRouter;
  var DefaultRoute = ReactRouter.DefaultRoute;
  var HistoryLocation = ReactRouter.HistoryLocation;
  var Route = ReactRouter.Route;
  this.routes = (
    <Route handler={PacksList} path='/'>
      <DefaultRoute name='packs' handler={PacksList} />
      <Route name='new' handler={PackNew} />
    </Route>
  );

  ReactRouter.run(this.routes, HistoryLocation, function(Handler) {
    $(function() {React.render(<Handler/>, document.getElementById('content'))});
  });
