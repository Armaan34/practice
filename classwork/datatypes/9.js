/*var a = "" 
        for(var i = 1; i < 10; i++){
            a += i;
            console.log(`${a} x 8 + ${i} = ${a*8+i}`);
        }
*/

        // or


        var str1 = "";
        var str2 = "";
        for (var i = 1; i < 10; i++) {
            str1 += i;
            str2 = str2 + (10 - i);
            console.log(`${str1} x 8 + ${i} = ${str2}`);
        }