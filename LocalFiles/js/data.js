// Wait for page load
$(document).ready(function(){
// Load help item	
	$('.help').click(function (e) {
	    e.preventDefault();
	    $('#help').remove();
	    $('#new2').remove();
	    $('#new').remove();
	    $('.long').remove();
	    $('.brief').remove();
	    $('.price').remove();
	    $('.items').remove();
	    $('<p id="help">Touch Popular to load popular items, touch Newest to load new items, touch the icon in the upper right corner to open or close item descriptions.</p>').appendTo('#page-wrap');
	});	
	
$('.popular').click(function (e) 
		{
// Prevent default behavior
	    e.preventDefault();
// Remove old data on refresh
	    $('#help').remove();
	    $('#new2').remove();
	    $('#new').remove();
	    $('.long').remove();
	    $('.brief').remove();
	    $('.price').remove();
	    $('.items').remove();
// get XML data
				$.ajax({
				type: "GET",
				url: "data.xml",
				dataType: "xml",
				success: function(xml) {
				var iDiv = document.createElement('div');
				$('#page-wrap').append(iDiv);
				iDiv.setAttribute('id', 'new2');
// find products in XML
					$(xml).find('item').each(function(){
// create + append images and divs					
					
						var id = $(this).attr('id');
						var title = $(this).find('title').text();
						var pImg = document.createElement('img');
						var pDiv = document.createElement('div');
							iDiv.appendChild(pDiv);
							pDiv.appendChild(pImg);
// set div and img attributes
							pDiv.setAttribute('id', 'new');
							pDiv.setAttribute('src', id);
// replace space with dash to fix image URL
							pImg.setAttribute('src', 'http://tiwibzone.tiwib.netdna-cdn.com/images/' + title.replace(/\s+/g, '-').toLowerCase() + '.jpg');
						var url = $(this).find('url').text();
						var pDiv = document.createElement('div');
// find + append product data
						
						$('<div class="items" id="link_'+id+'"></div>').html('<a href="'+url+'">'+title+'</a>').appendTo('#data');
						$(this).find('description').each(function(){
						
						
							var brief = $(this).find('price').text();
							var long = $(this).find('price').text();
							var price = $(this).find('long').text();
							//$('<div class="brief"></div>').html(brief).appendTo('#link_'+id);
							$('<div class="long"></div>').html(long).appendTo('#link_'+id);
							$('<div class="brief">' + '<a href="'+url+'"><img src="images/shopping-cart.png"></img></a></div>').appendTo('#link_'+id);
							$('<div class="price">' + '<p>' +price+'</p>'+'</div>').appendTo('#link_'+id);
						});
					});
			}
	});
});	


$('.newest').click(function (e) 
		{
// Prevent default behavior
	    e.preventDefault();
// Remove old data on refresh
	    $('#help').remove();
	    $('#new2').remove();
	    $('#new').remove();
	    $('.long').remove();
	    $('.brief').remove();
	    $('.price').remove();
	    $('.items').remove();
// get XML data
				$.ajax({
				type: "GET",
				url: "data2.xml",
				dataType: "xml",
				success: function(xml) {
				var iDiv = document.createElement('div');
				$('#page-wrap').append(iDiv);
				iDiv.setAttribute('id', 'new2');
// find products in XML
					$(xml).find('item').each(function(){
// create + append images and divs					
					
						var id = $(this).attr('id');
						var title = $(this).find('title').text();
						var pImg = document.createElement('img');
						var pDiv = document.createElement('div');
							iDiv.appendChild(pDiv);
							pDiv.appendChild(pImg);
// set div and img attributes
							pDiv.setAttribute('id', 'new');
							pDiv.setAttribute('src', id);
// replace space with dash to fix image URL
							pImg.setAttribute('src', 'http://tiwibzone.tiwib.netdna-cdn.com/images/' + title.replace(/\s+/g, '-').toLowerCase() + '.jpg');
						var url = $(this).find('url').text();
						var pDiv = document.createElement('div');
// find + append product data
						
						$('<div class="items" id="link_'+id+'"></div>').html('<a href="'+url+'">'+title+'</a>').appendTo('#data');
						$(this).find('description').each(function(){
						
						
							var brief = $(this).find('price').text();
							var long = $(this).find('price').text();
							var price = $(this).find('long').text();
							//$('<div class="brief"></div>').html(brief).appendTo('#link_'+id);
							$('<div class="long"></div>').html(long).appendTo('#link_'+id);
							$('<div class="brief">' + '<a href="'+url+'"><img src="images/shopping-cart.png"></img></a></div>').appendTo('#link_'+id);
							$('<div class="price">' + '<p>' +price+'</p>'+'</div>').appendTo('#link_'+id);
						});
					});
			}
	});
});	

// hide/show descriptions
				
			$('#details').click(function () 
					{
					if ($('.price').is(":hidden")) 
					{
					$('.price').slideDown("slow");
					} 
					else 
					{
					$('.price').hide();
					}
					});
		
});
     