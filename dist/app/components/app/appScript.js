$(document).on('click', '#savePDF', function() {
        var form = $(this);

        $('.error', form).html('');
        $(':submit', form).button('loading');

        $.ajax({
            url: '/pdf',
            method: 'POST',
            data: {"hhtml": "<img src='http://ravkovskiy.github.io/image/kot3.jpg'"},
            complete: function() {
                $(':submit', form).button('reset');
            },
            statusCode: {
                200: function() {
                    window.location.href = '/pdf';
                },
                403: function(jqXHR) {
                    var error = JSON.parse(jqXHR.responseText);
                    $('.error', form).html(error.message);
                }
            }
        });
        return false;
    });