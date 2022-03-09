//An app, a practice one, to work with
//Strapi and JavaScript Promises in Fetch
import GetPostswithCats from './classes/getpostswithcats';


//const url = "https://strapi.tardisgallifrey.com/api/blogs/3";
const url2 = "https://strapi.tardisgallifrey.com/api/blogs";

export default function App() {
  return (
    <div className="grid grid-cols-1 text-2xl">
      <GetPostswithCats className="place-items-center" url={url2} category="JavaScript"/>
    </div>
  );
}

