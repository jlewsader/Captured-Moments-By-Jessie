(function (gallery_id,acess_token) {
var viewer = $('#viewer'),
thumbs = $('#thumbs');
access_token = ('AAAFDfooNRwUBAPgrrfqCTEAN7BYqJsOJLK5h1pf3rt058pKkF4kgjvr9vR0o9O0DbHUZASwT9e8aKISQlGlMyJdy3oOZCdm7eLmZBio5QZDZD'); //REF. LINE 23

// images
$.getJSON('https://graph.facebook.com/' + gallery_id + '/photos?access_token=' + access_token +'', function(json, status, xhr) {
var imgs = json.data;

viewer.attr('src', imgs[0].images[0].source)

for (var i = 0, l = imgs.length - 1; i < l; i++) {
$('<img src="' + imgs[i].images[3].source + '" data-fullsize="' + imgs[i].images[0].source + '">').appendTo(thumbs);
}

$('img', thumbs).bind('click', function(e) {
e.preventDefault();
viewer.attr('src', $(this).attr('data-fullsize'));
});
});
})('758282908393'); //  -- put the gallery ID here

// Access token instructions //
// - Login w/ photo owner's account
// - Use http://www.facebook.com/authorize.php?api_key=application_key&v=1.0&ext_perm=offline_access w/ app's api_key
// - Get access token at https://developers.facebook.com/tools/explorer/ 
// - Check offline_access with https://developers.facebook.com/tools/debug
// - Place token in script above