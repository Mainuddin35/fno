jQuery(document).ready(function(){

	jQuery.noConflict();
//	jQuery('#user-login, #user-registration, #user-password').validate();
	jQuery('form').each(function () {
        jQuery(this).validate({
            submitHandler: function (form) { // for demo
                return false;
            }
        });
    });

	jQuery('#btn-registration').on('click', function(e){
		e.preventDefault();
		jQuery("#form-register").transition({ x: '0px', opacity:'1' }, 400, 'ease');
		jQuery("#form-login").transition({ x: '-'+jQuery(window).width()+'px', opacity:'0' }, 400, 'ease');
		jQuery("#form-password").transition({ x: jQuery(window).width()+'px', opacity:'0' }, 400, 'ease');
	});
	
	jQuery('#btn-password').on('click', function(e){
		e.preventDefault();
/*		jQuery("#labelErrorResetPassword").hide();
		jQuery("#resetPasswordEmail").val(jQuery("#loginEmail").val());*/
		jQuery("#form-login").transition({ x: '-'+jQuery(window).width()+'px', opacity:'0' }, 400, 'ease');
		jQuery("#form-register").transition({ x: '-'+jQuery(window).width()+'px', opacity:'0' }, 400, 'ease');
		jQuery("#form-password").transition({ x: '0px', opacity:'1' }, 400, 'ease');
	});
	
	jQuery('.loginForm').on('click', function(e){
		e.preventDefault();
		jQuery("#form-login").transition({ x: '0px', opacity:'1' }, 400, 'ease');
		jQuery("#form-register").transition({ x: '-'+jQuery(window).width()+'px', opacity:'0' }, 400, 'ease');
		jQuery("#form-password").transition({ x: jQuery(window).width()+'px', opacity:'0' }, 400, 'ease');
	});

	/*	toggle menu	*/
	jQuery('.jPushMenuBtn').on('click',function() {
		if(jQuery(this).parent().hasClass('nav-closed')){
			jQuery('.slidemenu').animate({
				left: "0px"
			}, 200);
			jQuery(this).text('Close');
			jQuery(this).parent().addClass('nav-opened');
			jQuery(this).parent().removeClass('nav-closed');
		} else {
			jQuery('.slidemenu').animate({
				left: "-265px"
			}, 200);
			jQuery(this).text('Menu');
			jQuery(this).parent().removeClass('nav-opened');
			jQuery(this).parent().addClass('nav-closed');
		}
	  });

	/* date picker french days */
	jQuery(function() {
		jQuery.datepicker.setDefaults(jQuery.datepicker.regional['fr']);
		jQuery('.datepicker').datepicker({
			dayNamesMin: ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"]
		});
  	});
	/* customized checkbox*/

	// fno-table-cbox only
	jQuery('.fno-checkbox').on('click', function(){
		if(jQuery(this).is(':checked') ){
  			jQuery(this).addClass('input-checked');

  			jQuery('#noOfItem strong').text(jQuery('.fno-table-cbox .fno-checkbox:checked').length);
  			jQuery('#noOfItem').css('display', 'inline-block');
  		} else {
  			jQuery(this).removeClass('input-checked');

  			var checked_itm = jQuery('.fno-table-cbox .fno-checkbox:checked').length;
  			if(checked_itm > 0){
  				jQuery('#noOfItem strong').text(jQuery('.fno-table-cbox .fno-checkbox:checked').length);
  				jQuery('#noOfItem').css('display', 'inline-block');
  			} else {
  				jQuery('#noOfItem').css('display', 'none');
  			}
  		}
	});

	// fno-table-cbox2 only
	jQuery('.check-box').on('click', function(){
		if(jQuery(this).is(':checked') ){
  			jQuery(this).addClass('input-checked');

  			jQuery('#noOfItemRT strong').text(jQuery('.fno-table-cbox2 .check-box:checked').length);
  			jQuery('#noOfItemRT').css('display', 'inline-block');
  		} else {
  			jQuery(this).removeClass('input-checked');

  			var checked_itm = jQuery('.fno-table-cbox2 .check-box:checked').length;
  			if(checked_itm > 0){
  				jQuery('#noOfItemRT strong').text(jQuery('.fno-table-cbox2 .check-box:checked').length);
  				jQuery('#noOfItemRT').css('display', 'inline-block');
  			} else {
  				jQuery('#noOfItemRT').css('display', 'none');
  			}
  		}
	});

  	jQuery('.checkall, .checkAll').on('click', function(){
  		if(jQuery(this).is(':checked') ){
  			jQuery(this).addClass('input-checked');
  			jQuery('input.fno-checkbox').each(function(){
  				jQuery('input.fno-checkbox').addClass('input-checked');
  				jQuery('input.fno-checkbox').prop('checked', 'checked');

  				jQuery('#noOfItem strong').text('tout');
  				jQuery('#noOfItem').css('display', 'inline-block');
  			});
  		} else {
  			jQuery(this).removeClass('input-checked');
  			jQuery('input.fno-checkbox').each(function(){
  				jQuery('input.fno-checkbox').removeClass('input-checked');
  				jQuery('input.fno-checkbox').prop('checked', false);

  				jQuery('#noOfItem').css('display', 'none');
  			});
  		}
  	})

  	jQuery('.check-all').on('click', function(){
  		if(jQuery(this).is(':checked') ){
  			jQuery(this).addClass('input-checked');
  			jQuery('input.check-box').each(function(){
  				jQuery('input.check-box').addClass('input-checked');
  				jQuery('input.check-box').prop('checked', 'checked');

  				jQuery('#noOfItemRT strong').text('tout');
  				jQuery('#noOfItemRT').css('display', 'inline-block');
  			});
  		} else {
  			jQuery(this).removeClass('input-checked');
  			jQuery('input.check-box').each(function(){
  				jQuery('input.check-box').removeClass('input-checked');
  				jQuery('input.check-box').prop('checked', false);

  				jQuery('#noOfItemRT').css('display', 'none');
  			});
  		}
  	})


	/* customized radio	*/
	/*jQuery('.radio-wrapper').radiosToSlider({
	    animation: true,
	});*/
	jQuery('.tumbler').on('click', function(e){
		e.preventDefault();
		if(jQuery(this).hasClass('enabled')){
			jQuery(this).removeClass('enabled');
		} else {
			jQuery(this).addClass('enabled');
		}
	});

	jQuery('.scrollbar-inner').scrollbar();
  	jQuery('.fno-select').selectOrDie();

  	// catalog page ul tree
  	/*jQuery('ul.rubric-tree.sub-ul > li > a').on('click', function(e){
  		e.preventDefault();
  		if( jQuery(this).parent().find('ul').length > 0){
  			if( jQuery(this).parent().hasClass('active') ) {
  				jQuery(this).parent().removeClass('active')
  				jQuery(this).parent().find('li').removeClass('active')
	  			jQuery(this).parent().find('ul').removeClass('expanded');
	  			jQuery(this).parent().children('ul').fadeOut(300);
	  		}
	  		else {
	  			jQuery(this).parent().addClass('active');
	  			jQuery(this).parent().children('ul').fadeIn(500);
	  			jQuery(this).parent().children('ul').addClass('expanded');
	  		}
  		}
  	})*/

  	jQuery('.fno-magnific').magnificPopup({
		type: 'inline',
		preloader: false
	});

	jQuery('.fno-magnific-help').magnificPopup({
		type: 'inline',
		preloader: false, 

		callbacks: {
			open: function() {
				jQuery('.mfp-content').addClass('mfp-help-content');
			},
			afterClose: function() {
				jQuery('.mfp-content').removeClass('mfp-help-content');
			}
		}

	});

	jQuery('.add-btn, .modify-btn').magnificPopup({
		closeBtnInside:true
	});

	jQuery('.nav-header span.sod_label').append('<span class="">20 rue de paradis</span>');

	jQuery('.datepicker-input').datepicker();

	jQuery('.ui.dropdown').dropdown();

	/*function flip() {
	    jQuery('.form-register-wrapper').toggleClass('flipped');
	}*/

	jQuery('#terms-btn, #close-flip').on('click', function(){
		jQuery('.form-register-wrapper').toggleClass('flipped');
	})

	jQuery('.back-card > ul > li > a').on('click', function(){
		var _id = jQuery(this).attr('id');
		jQuery('.back-card ul li a').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.back-card > div').hide();
		jQuery('#'+_id+'-content').fadeIn();
	});

	/*jQuery('#add-language #select-lang').on('change', function(){
		var _val = jQuery(this).val();

		if(_val == 'en'){
			jQuery('#add-language span.sod_label::before').css('background', 'url('../img/icons/gb.png')');
		} else if (_val == 'por'){
			jQuery('#add-language span.sod_label::before').css('background', 'url('../img/icons/portugal.png')');
		} else if (_val == 'sp'){
			jQuery('#add-language span.sod_label::before').css('background', 'url('../img/icons/spain.png')');
		} else if (_val == 'fr'){
			jQuery('#add-language span.sod_label::before').css('background', 'url('../img/icons/france.png')');
		}
	});*/

	jQuery('.fno-help-slider').owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true, 
		autoPlay:false
	});

	jQuery('.chosen-select').chosen({
	    width: "100%"
	});

	jQuery('.info-chosen-select').chosen({
	    width: "100%",
	    disable_search_threshold: 10
	});

	jQuery('#select-category').chosen({
	    width: "100%"
	});
	jQuery(document).on('click', '#btn-select-expand', function(e){
		e.preventDefault();
		jQuery('#select-category').trigger('chosen:open');
		e.stopPropagation();
	});

	jQuery('.color-expander').on('click', function(){
		jQuery(this).addClass('light-grey');
		jQuery(this).parent().find('.color-wrapper').show();
	});

	jQuery('.size-expander').on('click', function(){
		jQuery(this).addClass('light-grey');
		jQuery(this).parent().find('.size-wrapper').show();
	});

	jQuery('.color-expander, .size-expander').on('blur', function(){
		jQuery(this).removeClass('light-grey');
	});

	jQuery(document).on('click', '.schedule-close', function(e){
		e.preventDefault();
		jQuery(this).parent().remove();
	});

	jQuery('.add-schedule').on('click', function(e){
		e.preventDefault();
		var _html = '<div class="schedule-single"><div class="schedule-row clearfix"><input type="text" name="" value="10:30" class="schedule-input schedule-start"><span class="seperator">|</span><input type="text" name="" value="16:00" class="schedule-input schedule-end"></div><a href="#" class="schedule-close margin-33"></a></div>';
		jQuery(this).prev().append(_html);

	});
	jQuery('.photo-close').on('click', function(e){
		e.preventDefault();
		jQuery(this).parent().remove();
	});
	jQuery('#select_category_chosen .chosen-search input').attr('placeholder', 'Rechercher...');

	jQuery('#select_category_chosen').on('click', '.li.active-result.group-option', function(e){
		e.preventDefault();
		e.stopPropagation();
	});
	jQuery('.bootstrap-select .bs-searchbox input.form-control').attr('placeholder', 'Rechercher...');
});