document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('nav1').addEventListener('click', function () {
        document.getElementById('tab1').classList.remove('hidden');
        document.getElementById('tab2').classList.add('hidden');
        document.getElementById('tab3').classList.add('hidden');
        document.getElementById('tab4').classList.add('hidden');
    });

    document.getElementById('nav2').addEventListener('click', function () {
        document.getElementById('tab1').classList.add('hidden');
        document.getElementById('tab2').classList.remove('hidden');
        document.getElementById('tab3').classList.add('hidden');
        document.getElementById('tab4').classList.add('hidden');
        document.getElementById('nav1').classList.add('text-gray-400');
    });

    document.getElementById('nav3').addEventListener('click', function () {
        document.getElementById('tab1').classList.add('hidden');
        document.getElementById('tab2').classList.add('hidden');
        document.getElementById('tab3').classList.remove('hidden');
        document.getElementById('tab4').classList.add('hidden');
    });

    document.getElementById('nav4').addEventListener('click', function () {
        document.getElementById('tab1').classList.add('hidden');
        document.getElementById('tab2').classList.add('hidden');
        document.getElementById('tab3').classList.add('hidden');
        document.getElementById('tab4').classList.remove('hidden');
    });

    document.getElementById('btn').addEventListener('click',function(){
        document.getElementById('information').classList.remove('hidden');
        document.getElementById('danhsachkhachhang').classList.add('hidden');
    })

    document.getElementById('back').addEventListener('click',function(){
        document.getElementById('information').classList.add('hidden');
        document.getElementById('danhsachkhachhang').classList.remove('hidden');
    })

    document.getElementById('xemlichkham').addEventListener('click', function () {
        document.getElementById('bang').classList.add('hidden');
        document.getElementById('lichkham').classList.remove('hidden');
    });

    document.getElementById('back2').addEventListener('click', function () {
        document.getElementById('bang').classList.remove('hidden');
        document.getElementById('lichkham').classList.add('hidden');
    });

});

