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


    $(document).find("[data-tab-group='" + tabGroup + "']").hide();

    $(document).find("[data-tab-bg='" + targetTab + "']").addClass("active").siblings().removeClass("active");

    tab.show();
  });
}
