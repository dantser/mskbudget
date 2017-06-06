import $ from 'jquery';

export default function tabs() {
  $(document).on("click", "[data-tab-target]", function(e){
    e.preventDefault();

    var targetTab = $(this).data("tab-target"),
        tab = $(document).find("[data-tab='" + targetTab + "']"),
        tabGroup = tab.data("tab-group");

    $(document).find("[data-tab-group='" + tabGroup + "']").hide();

    $(document).find("[data-tab-bg='" + targetTab + "']").addClass("active").siblings().removeClass("active");

    tab.show();
  });
}
