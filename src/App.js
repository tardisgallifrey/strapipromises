//An app, a practice one, to work with
//Strapi and JavaScript Promises in Fetch

//Will be doing some in functional form and some in class form
import { ReadOne } from './functions/readone';
import GetOne from './classes/getone';

const url = "https://strapi.tardisgallifrey.com/api/blogs/3";

export default function App() {
  return (
    <div className="text-3xl">
      <h1>Hello World!</h1>
      <ReadOne url={url} />
      <GetOne url={url} />
    </div>
  );
}

