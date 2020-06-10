import './index.css'
import './left.scss'
import './right.less'


{
    
    let a = 10;
    let [a1, b, c] = [1, 2, 3];
    console.log(`index`)

    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };


    let arr1 = Array.from(arrayLike);

    ['a', 'b', 'c'].fill(7)

    [1, 2, 3, 4, 5].copyWithin(0, 3, 4)


    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }


    [1, 2, 3].includes(2)
}





