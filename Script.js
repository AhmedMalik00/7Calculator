let value = '';
    let operand = true;
    function adding(additionof){
        value += additionof;
        document.querySelector('.Data-Enter').innerText = value ;

        operand = false;

    }
    function operatorsadding(additionof){
        
        if(operand == false){
        value += additionof;
        document.querySelector('.Data-Enter').innerText = value ;
        document.querySelector('.storecenter').innerText = value ;
        operand = true;
        }else{
            value = value.slice(0, -1) + additionof;
            document.querySelector('.Data-Enter').innerText = value ;
            document.querySelector('.storecenter').innerText = value ;
            operand = true;
        }
    }
    function converting(){
        value = eval(value)
        document.querySelector('.Data-Enter').innerText = value;
        value = '';
        document.querySelector('.storecenter').innerText = '';
    }
    function cefunction(){
        value = '0';
        document.querySelector('.Data-Enter').innerText = value;
        value = ''
        document.querySelector('.storecenter').innerText = value;
    }
    function cfunction(){
            value = value.slice(0 , -1);
            document.querySelector('.Data-Enter').innerText = value;
        if(value === ''){
            document.querySelector('.Data-Enter').innerText = '0';
        }
    }