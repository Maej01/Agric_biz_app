$(function() {
    $.getJSON('api', updateFeedback); //getting the api

    $('.feedback-form').submit(function(e){
        e.preventDefault(); //preventing the page from reloading
 
        //if the request is a post
        $.post('api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        }, updateFeedback); //executing the update feedback
    });
    
    //updateFeedback fucntion
    function updateFeedback(data) {
        var output = '';
        $.each(data, function(key, item) {
            output += ' <div class="feedback-title"> '+ item.title +' by: '+ item.name+'</div>';
            output += ' <div class="feedback-message"> '+ item.message +'</div>';
            output += ' <hr>';
        
        });

        //locating the feedback-messages class and modifying the html with the output variable
        $('.feedback-messages').html(output);
    }
});