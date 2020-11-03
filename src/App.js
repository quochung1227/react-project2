import React, { Component } from 'react';
import './App.css';
import Taskform from './components/Taskform';
import Control from './components/Control';
class App extends Component {
  render() {
  return (
    <div className="container"> 
        <div className="text-center">
          <h1>Quản lý công việc</h1><hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/*Form*/}
          <Taskform /> 
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type='button' className="btn btn-primary">
            <span className="fa fa-plus mr-5"></span> Thêm công việc
          </button> 
          {/* Search -Sort */}
          <hr/>
          <div className="row mt-15">
            {/* Search */}
          <Control />  
          </div>
          <div className="row mt-15">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Trạng thái</th>
                  <th className="text-center">Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> </td>
                  <td>
                    <input type="text" className="form-control" name="filterName"/>
                  </td>
                  <td>
                  <select className="form-control" name="status">
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select><br/>
                  </td>
                  <td>
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      <span className="fa fa-edit mr-5"></span>Edit
                    </button>&nbsp;
                    <button type="submit" className="btn btn-danger">
                      <span className="fa fa-trash mr-5"></span>Delete
                    </button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hoc Angular</td>
                  <td className="text-center">
                    <span className="label label-danger">Kich hoat</span>
                  </td>
                  <td className="text-center">
                  <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span> Edit
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span> Delete
                  </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          </div>
        </div>
      </div>
  );
}
}
export default App;
