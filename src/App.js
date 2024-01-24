import Loading from "./components/loading";
import NewsContainer from "./components/news-container";
import Navbar from "./navbar";
import { Fragment} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const categories=['About','Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  return (
<Fragment>
<Navbar categories={categories}/>
      <Routes>
        <Route path="/" element={<NewsContainer apikey={apiKey} key='General'  category={'General'}/>}/>
       {categories.map((category)=>{
        return  <Route path={`/${category}`}  element={<NewsContainer apiKey={apiKey} key={category} category={category}/>} />
       })}
      </Routes>
</Fragment>
  );
}
export default App;
