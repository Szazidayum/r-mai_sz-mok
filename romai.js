function romaiszamok(n) {
    const tomb = [];
    if (n > 0) {
        for (let index = 1; index <= n; index++) {
            tomb.push(ertek(index));
        }
        return tomb.join("., ");
    }
    return "";
}

function ertek(n) {
    let eredmeny = "";
    if (n >= 10) {
        if (n % 10===0) {
            eredmeny += "X";
        } else {
            eredmeny += "X";
            n = n - 10;
            if (n <= 3) {
                for (let i = 1; i <= n; i++) {
                    eredmeny += "I";
                }
            } else if (n === 4) {
                eredmeny = "IV"
            } else if (n >= 5 && n < 9) {
                eredmeny += "V";
                n = n - 5;
                //console.log(n);
                for (let i = 1; i <= n; i++) {
                    eredmeny += "I";
                }
            } else if (n === 9) {
                eredmeny += "IX";
            }
        }
    }else{
        if (n <= 3) {
            for (let i = 1; i <= n; i++) {
                eredmeny += "I";
            }
        } else if (n === 4) {
            eredmeny = "IV"
        } else if (n >= 5 && n < 9) {
            eredmeny += "V";
            n = n - 5;
            //console.log(n);
            for (let i = 1; i <= n; i++) {
                eredmeny += "I";
            }
        } else if (n === 9) {
            eredmeny += "IX";
        }
    }


    console.log(eredmeny);
    return eredmeny;

}

