import $ from 'jquery';

export default function tabs() {
  $(document).on("click", "[data-tab-target]", function(e){
    e.preventDefault();

    var targetTab = $(this).data("tab-target"),
        tab = $(document).find("[data-tab='" + targetTab + "']"),
        tabGroup = tab.data("tab-group");

		$(document).find('.error').remove();

		if (targetTab == 'profile-edit') {
			$(document).find('.profile_edit input[type=password]').val('');
			$(document).find('.profile_edit .profile__field').addClass('disabled');
		}
    if (targetTab == 'AIPfinData') {
			$(document).find('.analityc-control-group_classify').show();
			$(document).find('.analityc-control-group_gp').hide();
      $(document).find('.analityc-widgethead__row_extra .analityc-control-switcher').show();
		}
    if (targetTab == 'AIPresults') {
			$(document).find('.analityc-control-group_classify').hide();
			$(document).find('.analityc-control-group_gp').css('display', 'inline-block');
      $(document).find('.analityc-widgethead__row_extra .analityc-control-switcher').hide();

		}


    $(document).find("[data-tab-group='" + tabGroup + "']").hide();

    $(document).find("[data-tab-bg='" + targetTab + "']").addClass("active").siblings().removeClass("active");

    tab.show();
  });
}
