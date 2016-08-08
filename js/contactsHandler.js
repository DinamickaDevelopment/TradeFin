$(document).ready(function () {
    function contactsHandler(e) {
        e.preventDefault();

        var dataadmin = JSON.stringify({
            "key": "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",
            "subject": "New message",
            "emailTo": "sales@tradefin.com",
            "emailFrom": "sales@tradefin.com",
            "html": '<h2> New message! </h2>' +
                '<h3>User details: </h3>' +
                '<p>Name: ' + $('#userName').val() +
                '</p><p>Job: ' + $('#jobTitle').val() +
                '</p><p>Email: ' + $('#userEmail').val() +
                '</p><p>Phone: ' + $('#userPhone').val() +
                '<h3> Message: </h3>' +
                '</p>' + $('#userMessage').val() + '</p>'
        });

        var data = encodeURI(dataadmin);
        var requestData = 'req=' + data;

        $.ajax({
            type: 'POST',
            url: 'http://dinamickamail.azurewebsites.net/mail.php',
            data: requestData,
            dataType: 'html',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'

        })

        function _clearVal() {
            $('#userName').val('');
            $('#jobTitle').val('');
            $('#userEmail').val('');
            $('#userPhone').val('');
            $('#userMessage').val('');
        }
        _clearVal()
    }

    $('#contactForm').on('submit', contactsHandler); 
})