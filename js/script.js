---
---

{% capture subjects %}
[
{% for post in site.posts %}
{% if post.layout == "subject" %}
{
"title"    : "{{ post.title}}",
"link"      : "{{post.url}}"
} {% if forloop.last %}{% else %},{% endif %}
{% endif %}
{% endfor %}
]
{% endcapture %}

{% capture toPrepend %}
["{{site.baseurl}}"]
{% endcapture %}
var subjects = {{subjects | strip_newlines}}
var toPrepend = {{toPrepend | strip_newlines}};
console.log(toPrepend);
$(document).ready(function(){


  var arrsubj = subjects;
  var html = "";
  console.log(arrsubj);
  arrsubj.forEach(function(val){
    console.log(val.link);
    if(val.link){
      html+='<span class="subjects"><a href="'+ toPrepend[0] + '/' + val.link+'">'+ val.title +'</a></span>&nbsp;&nbsp;&nbsp;';

    }
    else{
      html+='<span class="subjects">'+ val.title +'</span>&nbsp;&nbsp;&nbsp;';

    }
    console.log(html);
  });

  $('.list').html(html);


  $('#search').hideseek({
    highlight: true,
    nodata: 'No results found',
    hidden_mode: true,


  });




});
