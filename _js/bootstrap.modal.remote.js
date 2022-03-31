$(document).on('show.bs.modal', '.modal', function (e) {
	if(!$(this).hasClass("inner")){
		var param = $(e.relatedTarget).data('param');
		var modalId = $(this).attr('id');
		var modalUrl = $(document).find("[data-target='#"+modalId+"']").attr('href');
		if(!param){	var param =""; }
		$("#"+modalId).find(".modal-content").load(modalUrl+param);

			// var modalId = $(this).attr('id');
			// var modalUrl = $(document).find("[data-target='#"+modalId+"']").attr('href');
			// console.log(modalId+"==="+modalUrl);
			// $("#"+modalId).find(".modal-content").load(modalUrl);
	}
	
});
$(document).on('hidden.bs.modal', '.modal', function () {
	if(!$(this).hasClass("inner")){
		$(this).find(".modal-content").empty();
	}
	$('.modal:visible').length && $(document.body).addClass('modal-open');
});




