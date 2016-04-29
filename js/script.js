---
---

{% capture subjects %}
[
{% for post in site.posts %}
{% if post.subjectMain %}
{
"title"    : "{{ subject.title}}",
"link"      : "{{subject.link}}"
} {% endif %}{% if forloop.last %}{% else %},{% endif %}
{% endfor %}
]
{% endcapture %}
var subjects = {{subjects | strip_newlines}}


$(document).ready(function(){


  var arrsubj = subjects;
  var html = "";
  console.log(arrsubj);
  arrsubj.forEach(function(val){
    console.log(val.link);
    if(val.link){
      html+='<span class="subjects"><a href="'+val.link+'">'+ val.title +'</a></span>&nbsp;&nbsp;&nbsp;';

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
