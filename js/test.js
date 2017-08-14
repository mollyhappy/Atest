$(document).on("pageinit","#page1",pageone_init);
	function pageone_init(){
		$.post("http://news.baidu.com/n?cmd=1&class=civilnews&tn=rss",
		{},
		function(data){
			alert(data);
			alert(1);

		},"xml");
	}