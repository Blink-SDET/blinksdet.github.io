function myLoad(){
	$$('[role="listbox"]').each(function(elm){
		// for each node where [role="tree"], create a new Aria.Listbox instance and append it to array Aria.Listboxes
		Aria.Listboxes.push(new Aria.Listbox(elm));
	});
	$('list0').focus();
	
}
Event.observe(window, 'load', myLoad); // will probably use onDOMContentLoaded instead of onLoad

