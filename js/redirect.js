$(document).ready(function () {
    $('#redirMsg').css({
        'display': 'none',
        'marginTop' : '15px'
    });

    $('#btn').on('click', function () {
        $('#redirMsg').css({ 'display': 'block' });
        setTimeout(function () {
            $('#btn').attr('href', "signup.html");
            var e = new MouseEvent('click');
            var btn = document.getElementById('btn');

            btn.dispatchEvent(e); 
        }, 2000);
    }) 
})