$(document).on('show.bs.modal', '.modal', function (e) {
	var param = $(e.relatedTarget).data('param');
	var modalId = $(this).attr('id');
	var modalUrl = $(document).find("[data-target='#"+modalId+"']").attr('href');
	if(!param){	var param =""; }
	$("#"+modalId).find(".modal-content").load(modalUrl+param);

		// var modalId = $(this).attr('id');
		// var modalUrl = $(document).find("[data-target='#"+modalId+"']").attr('href');
		// console.log(modalId+"==="+modalUrl);
		// $("#"+modalId).find(".modal-content").load(modalUrl);
});
$(document).on('hidden.bs.modal', '.modal', function () {
    $(this).find(".modal-content").empty();
});
