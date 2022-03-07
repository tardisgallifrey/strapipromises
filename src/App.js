//An app, a practice one, to work with
//Strapi and JavaScript Promises in Fetch

//Will be doing some in functional form and some in class form
import { ReadOne } from './functions/readone';
import { GetIds } from './functions/getids';
import GetPostCats from './classes/getpostcats';
import GetOne from './classes/getone';
import GetPostIds from './classes/getpostids';

const url = "https://strapi.tardisgallifrey.com/api/blogs/3";
const url2 = "https://strapi.tardisgallifrey.com/api/blogs";

export default function App() {
  return (
    <div className="text-2xl">
      <h1>TardisGallifrey posts by chosen category</h1>
      <GetPostCats url={url2} category="JavaScript"/>
    </div>
  );
}

