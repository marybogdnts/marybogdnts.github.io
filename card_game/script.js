
var one;
var two;

$(document).ready(generate);
var timer = 0;
var time;
function generate() {

    function rand(val, min, max, length) {
        var obj = {}, arr = [val];
        obj[val] = true;
        length--;
        while (length) {
            var rnd = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!obj[rnd]) {
                obj[rnd] = true;
                length--;
                arr[Math.random() > .5 ? 'push' : 'unshift'](rnd)
            };
        }

        return arr
    }


    $('input[name=ra]').click(function () {

        var radio = this.value;

        $('input[name=dio]').click(function() {

        var radio2 = this.value;

        $('button[id=start]').click(function () {

            $(".tic").css("transform", "rotateY(360deg)");
            timer = new Date().getTime()

            var interval = setInterval(function () {
                if (timer == 0) return;
                time=document.getElementById('timer').innerHTML = (new Date().getTime() - timer) / 1000
            }, 100);

            document.getElementById('stop').onclick = function () {
                timer = 0
                alert("Молодец! Время выполнения: "+time+" секунд");
            }

            if (radio2 == "mal") {
                $("figure").css("width", "30%");
                //$(".container").css("width", "360px");


                var mass = rand(3, 1, 6, 6);

                var img = [ "1.jpg", "1.jpg",
                    "2.jpg", "2.jpg",
                    "3.jpg", "3.jpg"];

                var obj = { };

                for (var i = 0; i < 5; i = i + 2) {
                    obj[mass[i]] = img[i];
                    obj[mass[i + 1]] = img[i];
                }

            } else if (radio2=="bol") {

                $(".fig").css("width","30%");
                //$(".container").css("width", "660px");
                var mass = rand(3, 1, 12, 12);

                var img = [ "1.jpg", "1.jpg",
                    "2.jpg", "2.jpg",
                    "3.jpg", "3.jpg",
                    "4.jpg", "4.jpg",
                    "5.jpg", "5.jpg",
                    "6.jpg", "6.jpg"];

                var obj = { };

                for (var i = 0; i < 11; i = i + 2) {
                    obj[mass[i]] = img[i];
                    obj[mass[i + 1]] = img[i];
                }

            } else {
                var mass = rand(3, 1, 18, 18);

                var img = [ "1.jpg", "1.jpg",
                    "2.jpg", "2.jpg",
                    "3.jpg", "3.jpg",
                    "4.jpg", "4.jpg",
                    "5.jpg", "5.jpg",
                    "6.jpg", "6.jpg",
                    "7.jpg", "7.jpg",
                    "8.jpg", "8.jpg",
                    "9.jpg", "9.jpg"];

                var obj = { };

                for (var i = 0; i < 17; i = i + 2) {
                    obj[mass[i]] = img[i];
                    obj[mass[i + 1]] = img[i];
                }
            }

            $.each( obj, function() {

            var figure = $("<figure class='fig'></figure>")
            var front_side_card = $('<img class = "front_side_card" src="' + radio + this + '" />')
            var background_side_card = $('<img class = "background_side_card" src="back.jpg" />');

            $(figure).append(front_side_card);
            $(figure).append(background_side_card);

            $(".col-md-12").append(figure);

            start ();
        });


        $("div.lvl").empty()

           /* var interval = setInterval(function () {
                if (timer == 0) return;
                document.getElementById('timer').innerHTML = (new Date().getTime() - timer) / 1000
            }, 100);*/


    });
    });
    })
}

function start() {
    $("figure").on("click", game1);
}

function game1() {
    $("figure").unbind("click");

    card1 = this;

    one = $(this).find(".front_side_card").attr("src");

    $(this).find(".background_side_card").css("transform", "rotateY(180deg)");
    $(this).find(".front_side_card").css("transform", "rotateY(360deg)");
    $("figure").on("click", game2);
}

function game2() {
    $("figure").unbind("click");

    card2 = this;

    two = $(this).find(".front_side_card").attr("src");

    $(this).find(".background_side_card").css("transform", "rotateY(180deg)");
    $(this).find(".front_side_card").css("transform", "rotateY(360deg)");
    setTimeout(know, 1000);
}

function know() {

    if (one == two)
    {
        $(card1).css("visibility", "hidden");
        $(card2).css("visibility", "hidden");
        again ();
    }
    else
    {
        $(card1).find(".background_side_card").css("transform", "rotateY(0deg)");
        $(card2).find(".background_side_card").css("transform", "rotateY(0deg)");
        $(card1).find(".front_side_card").css("transform", "rotateY(180deg)");
        $(card2).find(".front_side_card").css("transform", "rotateY(180deg)");
        again ();
    }
}

function again() {
    card1 = "";
    card2 = "";
    $("figure").bind("click");


   /* if(
        $("container").css("visibility", "hidden")
    ){
        timer = 0
    }*/
     /* document.getElementById('stop').onclick = function () {
     timer = 0
     }*/
     start();
}

