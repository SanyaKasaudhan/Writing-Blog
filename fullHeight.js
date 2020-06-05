var t;
function fullheight(){
	t.css('height', jQuery(window).height());
}
window.onload = function(){
	t = jQuery('#full-height');
	fullheight();
};
window.onresize = function(){
	fullheight();
};