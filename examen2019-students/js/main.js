$(function(){
    for (let p = 1; p <= 4; p++)
    {
        $.ajax({
            url: 'enquete.php',
            type: 'POST',
            data: {
              page: p  
            },
            dataType: 'json',
            success: function(data)
            {
                var counter = 1;
                switch(p)
                {
                    case 1:
                        $("#next").attr("disabled", true);
                        $('.container h3').append(data.title+p+'/4');
                        let table = '<table id="'+data.title+'">'+
                                    '<thead><tr><th>Questions</th><th>Yes</th><th>No</th></tr></thead>'+
                                    '<tbody></tbody>'+
                                    '</table>';
                        $('#questions').append(table);
                        for (let k in data.questions)
                        {
                            $('#questions #'+data.title+' tbody').append(
                                       '<tr>'+
                                       '<td>'+data.questions[k]+'</td>'+
                                       '<td><input type="radio" id="ch1-'+k+'" name="prepare-'+k+'" value="yes"></td>'+
                                       '<td><input type="radio" id="ch1-'+k+'" name="prepare-'+k+'" value="no"></td>'+
                                       '</tr>'
                                        );
                        }
                     
                        $('.container').on('click', '#confirm', function(){
                            //let a1 = $(':radio[name="prepare-1.1"]:checked').val();
                            //let a2 = $(':radio[name="prepare-1.2"]:checked').val();
                            //console.log(a1+' '+a2);
                            let a1 = $(':radio[name="prepare-1.1"]');
                            let a2 = $(':radio[name="prepare-1.2"]');
                            
                          
                                if(a1.prop("checked") === false)
                                {
                                    $('#message').show();
                                    a1.closest('tr').css('background-color', '#f99');
                                }if(a2.prop("checked") === false)
                                {
                                    $('#message').show();
                                    a2.closest('tr').css('background-color', '#f99');
                                }if (a1.prop("checked") === true && a2.prop("checked") === true)
                                {
                                    $("#next").attr("disabled", false);
                                }
                        });
  
                        break;
                    case 2:
                        counter++;
                        if (counter === 2)
                        {
                            $('.container').on('click', '#next', function(){
                                $("#next").attr("disabled", true);
                                $('.container h3, #questions > *').remove();
                                $('#message').after('<h3>'+data.title+p+'/4</h3>');
                                let table = '<table id="'+data.title+'">'+
                                            '<thead><tr><th>Questions</th><th>Very Bad</th><th>Bad</th><th>Good</th><th>Very Good</th><th>Exellent</th></tr></thead>'+
                                            '<tbody></tbody>'+
                                            '</table>';
                                $('#questions').append(table);
                                for (let k in data.questions)
                                {
                                    $('#questions #'+data.title+' tbody').append(
                                                                '<tr>'+
                                                                '<td>'+data.questions[k]+'</td>'+
                                                                '<td><input type="radio" id="ch1-'+k+'" name="material-'+k+'" value="vbad"></td>'+
                                                                '<td><input type="radio" id="ch1-'+k+'" name="material-'+k+'" value="bad"></td>'+
                                                                '<td><input type="radio" id="ch1-'+k+'" name="material-'+k+'" value="good"></td>'+
                                                                '<td><input type="radio" id="ch1-'+k+'" name="material-'+k+'" value="vgood"></td>'+
                                                                '<td><input type="radio" id="ch1-'+k+'" name="material-'+k+'" value="exellent"></td>'+
                                                                '</tr>'
                                                            );
                                }
                                
                                $('.container').on('click', '#confirm', function(){
                                    let a1 = $(':radio[name="material-2.1"]');
                                    let a2 = $(':radio[name="material-2.2"]');
                                    let a3 = $(':radio[name="material-2.3"]');
                                    let a4 = $(':radio[name="material-2.4"]');
                                    let a5 = $(':radio[name="material-2.5"]');

                                    if(a1.prop("checked") === false)
                                    {
                                        $('#message').show();
                                        a1.closest('tr').css('background-color', '#f99');
                                    }if(a2.prop("checked") === false)
                                    {
                                        $('#message').show();
                                        a2.closest('tr').css('background-color', '#f99');
                                    }if(a3.prop("checked") === false)
                                    {
                                        $('#message').show();
                                        a3.closest('tr').css('background-color', '#f99');
                                    }if(a4.prop("checked") === false)
                                    {
                                        $('#message').show();
                                        a4.closest('tr').css('background-color', '#f99');
                                    }if(a5.prop("checked") === false)
                                    {
                                        $('#message').show();
                                        a5.closest('tr').css('background-color', '#f99');
                                    }if (a1.prop("checked") === true && a2.prop("checked") === true && a3.prop("checked") === true && a4.prop("checked") === true && a5.prop("checked") === true)
                                    {
                                        $("#next").attr("disabled", false);
                                    }
                                });
                            });
                        }
                        
                        break;
                    case 3:
                        counter++;
                        if (counter === 3)
                        {
                            $('.container').on('click', '#next', function(){
                                console.log(p);
                            });
                        }
                        
                        break;
                    case 4:
                        counter++;
                        if (counter === 4)
                        {
                            $('.container').on('click', '#next', function(){
                                console.log(p);
                            });
                        }
                        
                        break;
                }
            },
            error: function()
            {
                alert('Ajax Error :-(');
            }
        });
    }
    $('#message').hide();
});