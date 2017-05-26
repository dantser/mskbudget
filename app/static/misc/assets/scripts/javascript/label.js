
  function initOverLabels () {
  if (!document.getElementById) return; 
 var labels, id, field;
 labels = document.getElementsByTagName('label');
  for (var i = 0; i < labels.length; i++) {
 if (labels[i].className == 'overlabel') {
 id = labels[i].htmlFor || labels[i].getAttribute('for');
  if (!id || !(field = document.getElementById(id))) {
  continue;
  } 
 labels[i].className = 'overlabel-apply';
 if (field.value !== '') {
  hideLabel(field.getAttribute('id'), true);
  }
 field.onfocus = function () {
  hideLabel(this.getAttribute('id'), true);
  };
  field.onblur = function () {
  if (this.value === '') {
  hideLabel(this.getAttribute('id'), false);
  }
  };
 labels[i].onclick = function () {
  var id, field;
  id = this.getAttribute('for');
  if (id && (field = document.getElementById(id))) {
  field.focus();
  }
  };
 }
  }
  };
function hideLabel (field_id, hide) {
  var field_for;
  var labels = document.getElementsByTagName('label');
  for (var i = 0; i < labels.length; i++) {
  field_for = labels[i].htmlFor || labels[i].getAttribute('for');
  if (field_for == field_id) {
  labels[i].style.textIndent = (hide) ? '-4000px' : '0px';
  labels[i].style.border = (hide) ? 'none' : '';
  return true;
  }
  }
}  