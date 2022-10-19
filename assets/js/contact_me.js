---
---
$(function() {

  // Validation
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({});

  // Form submission
  $("#contactForm").submit(function(e){
      e.preventDefault();
      var $button = $("#sendMessageButton");
      var action = $(this).attr("action");
      $button.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
          "Accept": "application/json"
        }
      }).done(function() {
         $('#success').html("<div class='alert alert-success'>");
         $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
           .append("</button>");
         $('#success > .alert-success')
           .append("<strong>Your message has been sent. </strong>");
         $('#success > .alert-success')
           .append('</div>');
         //clear all fields
         $('#contactForm').trigger("reset");
      }).fail(function() {
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry, it seems our mail server is not responding. Please try again later or send an email to {{ site.email }}"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
      }).always(function(){
          setTimeout(function() {
            $button.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
      });
  });

  // $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
  //   preventSubmit: true,
  //   submitError: function($form, event, errors) {
  //     // additional error messages or events
  //     console.log("submitError", event, errors)
  //   },
  //   submitSuccess: function($form, event) {
  //     event.preventDefault(); // prevent default submit behaviour
  //     // get values from FORM
	//     var url = "{{ site.form_post_url }}";
  //     var name = $("input#name").val();
  //     var email = $("input#email").val();
  //     var phone = $("input#phone").val();
  //     var message = $("textarea#message").val();
  //     var firstName = name; // For Success/Failure Message
  //     // Check for white space in name for Success/Fail message
  //     if (firstName.indexOf(' ') >= 0) {
  //       firstName = name.split(' ').slice(0, -1).join(' ');
  //     }
  //     $this = $("#sendMessageButton");
  //     $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
  //     console.log("Sending to " + url)
  //     $.ajax({
  //       type: "POST",
  //       url: url,
  //       crossDomain: true,
  //       data: {
  //         name: name,
  //         phone: phone,
  //         email: email,
  //         message: message
  //       },
  //       // data: new FormData($form),
  //       dataType: "json",
  //       processData: false,
  //       cache: false,
  //       contentType: false,
  //       headers: {
  //         "Accept": "application/json"
  //       },
  //
	// 	    // success: function() {
  //       //   // Success message
  //       //   console.log("SUCCESS")
  //       //   $('#success').html("<div class='alert alert-success'>");
  //       //   $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
  //       //     .append("</button>");
  //       //   $('#success > .alert-success')
  //       //     .append("<strong>Your message has been sent. </strong>");
  //       //   $('#success > .alert-success')
  //       //     .append('</div>');
  //       //   //clear all fields
  //       //   $('#contactForm').trigger("reset");
  //       // },
  //
  //       // error: function() {
  //       //   console.log("ERROR")
  //       //   // Fail message
          // $('#success').html("<div class='alert alert-danger'>");
          // $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          //   .append("</button>");
          // $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          // $('#success > .alert-danger').append('</div>');
          // //clear all fields
          // $('#contactForm').trigger("reset");
  //       // },
  //
  //       // complete: function() {
  //       //   setTimeout(function() {
  //       //     $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
  //       //   }, 1000);
  //       // }
  //     }).done(function() {
  //        alert('success')
  //     }).fail(function() {
  //        alert('error: '+url)
  //     });
  //   },
  //   filter: function() {
  //     return $(this).is(":visible");
  //   },
  // });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
