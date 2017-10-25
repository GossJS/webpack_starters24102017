//сценарий, выводящий на экран JSON из URL
import  axios from 'axios';
import 'babel-polyfill';
const URL = 'http://kodaktor.ru/j/users';

class JSONReader {
  URL = 'http://kodaktor.ru/j/users';
  async readJSON(){
      const  {data:{users}} = await axios.get(this.URL);
      document.querySelector('h1').textContent = 'Hey!';
      document.querySelector('.cont').innerHTML=JSON.stringify(users)
  }
}

const myReader = new JSONReader();
myReader.readJSON();
