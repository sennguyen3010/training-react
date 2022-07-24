//rfc: react function component
import React from 'react';

//nội dung của thẻ <DemoFunctionCom /> sẽ chứa trong lệnh return
// nội dung của giao diện phải đc bao phủ bởi 1 thẻ nào đó
export default function DemoFunctionCom() {
  return (
    <nav classname="navbar navbar-expand-sm navbar-dark bg-dark mt-2">
  <div classname="container">
    <a classname="navbar-brand" href="#">
      Navbar
    </a>
    <button classname="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon" />
    </button>
    <div classname="collapse navbar-collapse" id="collapsibleNavId">
      <ul classname="navbar-nav me-auto mt-2 mt-lg-0">
        <li classname="nav-item active">
          <a classname="nav-link" href="#">
            Home <span classname="visually-hidden">(current)</span>
          </a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">
            Link
          </a>
        </li>
        <li classname="nav-item dropdown">
          <a classname="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div classname="dropdown-menu" aria-labelledby="dropdownId">
            <a classname="dropdown-item" href="#">
              Action 1
            </a>
            <a classname="dropdown-item" href="#">
              Action 2
            </a>
          </div>
        </li>
      </ul>
      <form classname="d-flex my-2 my-lg-0">
        <input classname="form-control me-sm-2" type="text" placeholder="Search" />
        <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  );
}
