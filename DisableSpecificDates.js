/** Days to be disabled as an array */
var disableddates = ["11-10-2015", "11-12-2015", "11-10-2016", "11-12-2016"];
 
  function DisableSpecificDates(date) {
   
     var m = date.getMonth();
     var d = date.getDate();
     var y = date.getFullYear();
     
     // First converting the date in to the mm-dd-yyyy format 
     // We will increment the month count by 1 
     var currentdate = (m + 1) + '-' + d + '-' + y ;
     
     // We will now check if the date belongs to disableddates array 
     for (var i = 0; i < disableddates.length; i++) {
     
         // Now check if the current date is in disabled dates array. 
         if ($.inArray(currentdate, disableddates) != -1 ) {
            return [false];
         }
      }
   
  }
   
   
   $(function() {
   $( "#datepicker" ).datepicker({
   //calling functioin before displaying dates
      beforeShowDay: DisableSpecificDates
   });
   
 });
