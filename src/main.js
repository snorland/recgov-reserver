$(function () {
    console.log('ready!');
    $('#go').on('click',function () {
        var _url = 'http://www.recreation.gov/campsiteDetails.do?'; //?siteId=206524&contractCode=NRSO&parkId=70950&arvdate=10/21/2016&lengthOfStay=4';
        $.each($('input'),function () {
            _url += '&'+$(this).attr('id')+'='+$(this).val();
        });
        chrome.tabs.create({'url':_url}, function () {
            var error = $('#errorMessages .msg').html();
            if (error != '') {
                alert (error);
            } else {
                $('#btnbookdates').click();
            }
        });
    });
});


//document.addEventListener('DOMContentLoaded', function() {
//
//
//    getCurrentTabUrl(function(url) {
//        // Put the image URL in Google search.
//        renderStatus('Performing Google Image search for ' + url);
//
//        getImageUrl(url, function(imageUrl, width, height) {
//
//            renderStatus('Search term: ' + url + '\n' +
//                'Google image search result: ' + imageUrl);
//            var imageResult = document.getElementById('image-result');
//            // Explicitly set the width/height to minimize the number of reflows. For
//            // a single image, this does not matter, but if you're going to embed
//            // multiple external images in your page, then the absence of width/height
//            // attributes causes the popup to resize multiple times.
//            imageResult.width = width;
//            imageResult.height = height;
//            imageResult.src = imageUrl;
//            imageResult.hidden = false;
//
//        }, function(errorMessage) {
//            renderStatus('Cannot display image. ' + errorMessage);
//        });
//    });
//});



