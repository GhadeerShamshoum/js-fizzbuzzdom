const scatola = document.getElementById('container');


for(let i=1; i<=100; i++){//numeri da 1 a 100
    console.log(i)
    
    if (i%3==0 && i%5==0 ){//valori che sono sia multipli di 3 che di 5
        scatola.innerHTML += '<div class="box colorR"> "FizzBuzz"</div>';

    }else if(i%5 == 0 ){//multipli di 5
        scatola.innerHTML += '<div class="box colorY">"Buzz"</div>';
    }
    else if (i%3 == 0 ){//multipli di 3
        scatola.innerHTML += '<div class="box colorB">"Fizz"</div>';
    }else{//numeri da 1 a 100 non multipli di 3 o 5
        scatola.innerHTML += '<div class="box">' + i + '</div>';       

    }
}


