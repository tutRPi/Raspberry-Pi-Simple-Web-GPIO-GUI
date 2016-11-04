$(function(){				
    $('.gpio-checkbox').on('change', function(e){        
        var data = {};
        data.action = "write";
        data.gpio = $(this).data("gpio");
        data.status = this.checked;
        console.log(data);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/ajax',						
            error: function(data) {
                alert("Error");
            }
        });
    });				
});