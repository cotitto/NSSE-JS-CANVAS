// UAH JS
//Modified by: xc0009 02/13/25

var NSSE = [
  // Canvas User ID's below
  '69001', // Xavier
  '6', // Mary
  '14451' // Michael
];

var userUrls = {
  // Canvas User ID and the corresponding unique NSSE Survey for each Canvas User ID
  '69001': 'https://xavier-url.com', // Xavier Cotto URL
  '6': 'https://mary-url.com', // Mary's URL
  '14451': 'https://michael-url3.com', // Michael Muller
  // Add more users and URLs as needed
};

if (NSSE.indexOf(ENV['current_user_id']) !== -1) {
  $(document).ready(function() {
      setTimeout(function() {
          var userId = ENV['current_user_id'];
          var userUrl = userUrls[userId]; // Get the specific URL from the var userUrls

          $(document.getElementById("DashboardCard_Container")).prepend(
              '<div class="ic-notification ic-notification--admin-created ic-notification--info">' +
              '    <div class="ic-notification__icon" role="presentation"><i class="icon-info"></i> <span class="screenreader-only"> Warning </span>' +
              '    </div>' +
              '    <div class="notification_account_content">' +
              '        <div class="ic-notification__content">' +
              '            <div class="ic-notification__message">' +
              '                <h3><strong>Your voice matters!</strong></h3>' +
              '                <p>' + ENV.current_user.display_name + ', UAH wants to hear from you.  Please take time to complete the National Survey of Student Engagement.  Your voice matters!  In appreciation, we will send you a $2 promo code for your next campus GrubHub order.</p>' +
              '                <p>To complete the survey, visit <a class="inline_disabled" href="' + userUrl + '" target="_blank">' + userUrl + '</a>.' +
              '            </div>' +
              '        </div>' +
              '    </div>' +
              '</div>'
          );
      }, 2050);

      console.log("Targeted Survey for NSSE Students");
  });
}