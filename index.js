$(function(){
    var next=$('.next');
    var pre=$('.pre');
    var yeshu=$('.yeshu');
    var container=$('.content .container .row .shanchu');
    var img=$('.neirong img');
    var imgs0=[
        'images/1.png!thumb',
        'images/2.jpg',
        'images/3.png!thumb',
        'images/4.png!thumb',
        'images/5.png!thumb',
        'images/6.png!thumb',
        'images/7.png!thumb',
        'images/8.png!thumb',
        'images/9.png!thumb',
        'images/10.png!thumb',
        'images/11.png!thumb',
        'images/12.png!thumb',
        'images/13.png!thumb',
        'images/14.png'
    ];
    var imgs1=[
        'images/111.png!thumb',
        'images/112.png!thumb',
        'images/113.png!thumb',
        'images/114.png!thumb',
        'images/115.png!thumb',
        'images/116.png!thumb',
        'images/117.png!thumb',
        'images/118.png!thumb',
        'images/119.png!thumb',
        'images/120.png!thumb'
    ];
    var imgs2=[
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb',
        'images/121.png!thumb'
    ];
    var num=0;
    next.on('click',function(){
        num++;
        if(num>2){
            num=2;
            return;
        }else{
        container.remove('.shanchu');
        pre.css({'display':'block'});
        img.attr('src',function(i){
            if(num==1){
                return imgs1[i];
            }else if(num==2){
                return imgs2[i];
            }

        })
        yeshu.html('第'+parseInt(num+1)+'页/共3页')
        }
    })


    pre.on('click',function(){
        num--;
        if(num<0){
            num=1;
            return;
        }else {
            img.attr('src', function (i) {
                if (num == 0) {
                    return imgs0[i];
                }
                else if (num == 1) {
                    return imgs1[i];
                } else if (num == 2) {
                    return imgs2[i];
                }

            })
            yeshu.html('第' + parseInt(num + 1) + '页/共3页');
        }
    })

    })

