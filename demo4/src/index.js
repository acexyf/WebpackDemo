import './index.css'
import './left.scss'
import './right.less'

var img=new Image(); 
img.src=require('./bg.png')
img.onload = function(){

}

{
    
    let a = 10;
    let [a1, b, c] = [1, 2, 3];
    console.log(`
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    `)
    for (let codePoint of 'foo') {
        console.log(codePoint)
    }
    function Point(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    const p = new Point();
    class Points {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        toString() {
          return '(' + this.x + ', ' + this.y + ')';
        }
    }
}





