/**
 * Created by Administrator on 2016/10/9.
 */
$(document).ready(function() {
    $(".buy").hover(
        function () {
            $(this).removeClass("button-buy").addClass("button-buy-new");
        },
        function () {
            $(this).removeClass("button-buy-new").addClass("button-buy");
        }
    ),
        $(".realize").hover(
            function () {
                $(this).removeClass("button-info").addClass("button-info-new");
            },
            function () {
                $(this).removeClass("button-info-new").addClass("button-info");
            })
    $(".more-product").hover(
        function () {
            $(this).removeClass("button1").addClass("button1-hover");
            $(".more-span").removeClass("more-old").addClass("more-new");
        },
        function () {
            $(this).removeClass("button1-hover").addClass("button1");
            $(".more-span").removeClass("more-new").addClass("more-old");
        }
    ),
        $(".more").hover(
            function () {
                $(this).removeClass("button2").addClass("button2-hover");
                $(".more-span").removeClass("more-old").addClass("more-new");
            },
            function () {
                $(this).removeClass("button2-hover").addClass("button2");
                $(".more-span").removeClass("more-new").addClass("more-old");
            }
        )
});
$(document).ready(function() {
    var num;
    $('.content2-ul>li[id]').hover(function(){
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).show();
        $('#p-hide-'+num).hide();

    },function(){
            $('#box-'+num).hide();
            $('#p-hide-'+num).show();
        })
});
$(document).ready(function() {
        var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //�Ƿ��Ѿ���ʼ�ֲ�
        t = 2000; //�ֲ�ʱ����
    length = $('.slider-panel').length;
    $('.slider-panel:not(:first)').hide();
    //����һ��slider-item��Ϊ����״̬
    $('.slider-item:first').addClass('slider-item-selected');
    //�������ʱ��ʾ��ǰ����󷭰�ť,ֹͣ����������뿪ʱ������ǰ����󷭰�ť����ʼ����
    $('.slider-panel').hover(function() {
        stop();
    }, function() {
        start();
    });
    $('.slider-item').hover(function(e) {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    /**
     * ��ǰ��ҳ
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * ���ҳ
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * ��preIndexҳ����currentIndexҳ
     * preIndex ��������ҳ����ʼҳ
     * currentIndex ��������������ҳ
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).hide()
            .parent().children().eq(currentIndex).show();
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //��ʼ�ֲ�
    start();
});
