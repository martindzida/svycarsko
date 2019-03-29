$(function () {
    $('.hiddn').hide();
    $('h2').on('click', function() {
        $(this).nextUntil('h2').toggle(300);
        $(this).css({'color':'black'})
               .css({'background-color':'white'})
               .css({'font-weight':'400'})
    });
    $('.hiddn p').on('click',function(){
        $(this).css({'font-size':'1.2em'});
    });

    var a = 0;
    $('#li1').on('click',function(){
        if (a < 1) {
            $('#ul1').append('<li>o zákonech a ústavách,</li><li>o věcných záležitostech.</li>');
        }
        a +=1;
    });

    var b = 0;
    $('#li2').on('click',function(){
        if (b < 1) {
            $('#ul2').append('<li>referendum</li><li>iniciativa</li><li>petice</li>');
        }
        b +=1;
    });

    var c = 0;
    $('#li3').on('click',function(){
        if (c < 1) {
            $('#ul3').append('<li>aktivní - volit</li><li>pasivní - být kandidován a zvolen</li><li>hlasování - vyjádřit se k předkládanému návrhu</li>');
        }
        c +=1;
    });

    var d = 0;
    $('#li4').on('click',function(){
        if (d < 1) {
            $('#ul4').append('<li>hustá síť silnic a dálnic</li><li>městská a aglomerační doprava</li><li>železnice, lavnoky, horské dráhy</li><li>letecké společnosti</li>');
        }
        d +=1;
    });

    var i = 1;
    window.setInterval(function(){
        $('#flg img').attr('src','img/flag' + i + '.png');
        $('#flg').find('figcaption').text('Vlajka Švýcarska');
        if (i < 2){
            i += 1;
        }
        else{
            $('#flg').find('figcaption').text('Znak Švýcarska');
            i -= 1;
        }
    },3000);

    var p = 1;
    $('#btn1').on('click', function(){
        if (p > 1){
            p -= 1;
        }
        else{
            p = 16;
        }
        $('#photo img').attr('src','img/obr'+ p + '.jpg');
    });
    
    $('#btn2').on('click', function(){
        if (p < 16){
            p += 1;
        }
        else{
            p = 1;
        }
        $('#photo img').attr('src','img/obr'+ p + '.jpg');
    });
    
   
})