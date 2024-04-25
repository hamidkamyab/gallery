import * as Vsc from "react-icons/vsc";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">

      <div className="main">
        <div className="header">
          <div className="container d-flex align-items-center py-3 gap-3 justify-content-center">
            <small className="text-muted">جستجو تصویر</small>
            <input className="w-50 form-control-sm" placeholder="انگلیسی جستجو کنید - مثال: cat" />
            <button className="btn btn-sm text-white px-3">جستجو کن!</button>
          </div>
        </div>
        <div className="container"></div>
      </div>

      <div class="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
