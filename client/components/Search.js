var Search = (props) => (
  <div className="search-bar form-inline">
    <input onKeyDown={props.searchFn} className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

window.Search = Search;
