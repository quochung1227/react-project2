import React, { Component } from 'react';
class Control extends Component {
  render() {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">   
    <div className="input-group">
      <input name="keyword" type="text" className="form-control" placeholder="nhập từ khóa" />
      <span className="input-group-btn">
        <button className="btn btn-primary" type="button">
          <span className="fa fa-search mr-5"></span> Tìm 
        </button>
      </span>
    </div>
    <div className="dropdownMenu1">
    <button className="btn btn-primary dropdown-toggle" 
    type="button" 
    id="dropdownMenu1" 
    datatoggle="dropdown"
    aria-haspopup="true"
    aria-expanded="true"
    >
      Sắp xếp <span className="fa fa-caret-square-o-down ml-5"></span> 
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
      <li>
        <a role="button" className="sort_selected">
          <span className="fa fa-sort-alpha-asc pr-5">
            Tên A-Z
          </span>
        </a>
      </li>
      <li>
        <a role="button" className="sort_selected">
          <span className="fa fa-sort-alpha-asc pr-5">
            Tên Z-A
          </span>
        </a>
      </li>
      <li>
        <a role="button">
          Trạng thái kích hoạt
        </a>
      </li>
      <li>
        <a role="button">
          Trạn thái ẩn
        </a>
      </li>
    </ul>
    </div> 
    </div>
  );
}
}
export default Control;

