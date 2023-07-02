for (let i = 1; i <= 100; i++ ){
    if (i%3 == 0 && i%5==0) { //jika i habis dibagi 3 dan 5 maka kita cetak "FizzBuzz"
        console.log("FizzBuzz")
    } else if (i%3 == 0) { //jika i habis dibagi 3 maka cetak "Fizz"
        console.log("Fizz")
    }  else if (i%5 == 0) { //jika i habis dibagi 5 maka cetak "Buzz"
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
