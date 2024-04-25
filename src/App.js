import { useState } from "react";

function App() {
  const [value,setValue] = useState('');
  const [items,setItems] = useState(null);

  const fetchGallery = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=P2RicIP8Rsb9uIpFTFRUlWVW-B99Gdg49-M9NntSPGs&query=${value}`)
    .then(res=>res.json())
    .then((data)=>{
      setItems(data.results)
    })
  }

  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">

      <div className="main">
        <div className="header py-2">
          <div className="container d-flex align-items-center gap-3 justify-content-center">
            <small className="text-muted d-none d-md-block">جستجو تصویر</small>
            <input className="w-75 w-md-50 form-control-sm" onChange={(e)=>setValue(e.target.value)} placeholder="انگلیسی جستجو کنید - مثال: cat" />
            <button className="btn btn-sm text-white px-md-3" onClick={fetchGallery}>
                <span className="me-1">جستجو</span>
                <span className="d-none d-md-inline-block">کن!</span>
            </button>
          </div>
          <div className="alert p-0 m-0"><small className="text-danger">این پروژه به فیلترشکن نیاز دارد!</small></div>
        </div>
        <div className="gallery">
          <ul className="m-0 p-0 row">
            {
              items && items.map((item, index)=>{
                return (
                  <li key={index} className="col-6 col-md-4 col-lg-3"><img src={item.urls.regular} alt="" /></li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
