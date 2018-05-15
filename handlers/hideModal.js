geodash.handlers.hideModal = function($scope, $interpolate, $http, $q, event, args)
{
  var id = args["id_hide"] || args["id"];

  try { $("#"+id).modal('hide'); } catch(err){ console.log(err); };

  try {
    
    var that = $("#"+id);
    $("body").removeClass("modal-open");
    $("body").css({"padding-right": "0"});
    that.removeClass("show");
    that.css({"display": "none"});
    $(".modal-backdrop").remove();
    var bsModal = that.data('bs.modal');
    bsModal["_isShown"] = false;
    bsModal["_isTransitioning"] = false;
    that.data('bs.modal', bsModal);

  } catch(err){ console.log(err); };

  try {
    var modal_scope = geodash.util.getScope(id);
    var aClear = args["clear"];
    if("clear" in args && args["clear"] != undefined)
    {
      modal_scope.$apply(function () {
        $.each(aClear,function(i, x){
          modal_scope[x] = undefined;
        });
      });
    }
  } catch(err) {
    console.log(err);
  }

};
