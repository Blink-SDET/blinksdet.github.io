
/* Aria Singleton */
var Aria = {
	Listboxes: new Array(), // instances of Aria.Listbox Class
	isSelected: function(inNode){
		// legacy for Aria.Tree
		if(inNode.getAttribute('aria-selected') && inNode.getAttribute('aria-selected').toLowerCase()=='true') return true;
		else return false;
	},
	isOption: function(inNode){
		if(inNode.getAttribute('role') && inNode.getAttribute('role').toLowerCase()=='option') return true;
		else return false;
	}
};

Aria.Listbox = Class.create();
Aria.Listbox.prototype = {
	initialize: function(inNode){
		if(!$(inNode) && console.error) console.error('Error from aria.js: Aria.Listbox instance initialized with invalid element, '+ inNode);
		this.el = $(inNode);
		this.index = Aria.Listboxes.length; // each listbox should know its index in the Aria singleton's list, in order to concatenate id strings
		this.strActiveDescendant = this.el.getAttribute('aria-activedescendant');
		this.strDefaultActiveDescendant = 'listbox'+this.index+'_item0'; // default first item
		if(!$(this.strActiveDescendant)) this.strActiveDescendant = this.strDefaultActiveDescendant; // set to default if no existing activedescendant
		this.setActiveDescendant($(this.strActiveDescendant));
		
		// set up event delegation on the listbox node
		Event.observe(this.el, 'click', this.handleClick.bindAsEventListener(this));
		Event.observe(this.el, 'keydown', this.handleKeyPress.bindAsEventListener(this)); //webkit doesn't send keypress events for arrow keys, so use keydown instead
		
	},
	getActiveDescendant: function(inNode){
		if(inNode){ // if inNode (from event target), sets the activedescendant to nearest ancestor option
			var el = $(inNode);
			while(el != this.el){
				if(Aria.isOption(el)) break; // exit the loop; we have the option
				el = el.parentNode;
			}
			if(el == this.el) {
				this.setActiveDescendant(); // set to default activedescendant
			} else {
				this.setActiveDescendant(el);
				return el;
			}
		} else {
			return $(this.el.getAttribute('aria-activedescendant'));
		}
	},
	getNextOption: function(inNode){
		var el = $(inNode);
		var originalElm = $(inNode);
		if(el.next()){
			el = el.next();
		}
		return el;
	},
	getPreviousOption: function(inNode){
		var el = $(inNode);
		var originalElm = $(inNode);
		if(el.previous()){
			el = el.previous();
		}
		return el;
	},
	handleClick: function(inEvent){
		var target = inEvent.target; // get the click target
		var el = this.getActiveDescendant(target);
		if(Aria.isOption(target)){
			this.toggleSelected(el); // toggle the aria-selected attribute on activedescendant
			Event.stop(inEvent); // and stop the event
		}
	},
	handleKeyPress: function(inEvent){
		switch(inEvent.keyCode){
			// case Event.KEY_PAGEUP:   break;
			// case Event.KEY_PAGEDOWN: break;
			// case Event.KEY_END:      break;
			// case Event.KEY_HOME:     break;
			case Event.KEY_LEFT:  this.prev(); break;
			case Event.KEY_UP:    this.prev(); break;
			case Event.KEY_RIGHT: this.next(); break;
			case Event.KEY_DOWN:  this.next(); break;
			case 32: case 13:   this.toggleSelected(); break; // space bar, ok
			default: 
				//console.log(inEvent.keyCode);
				return;
		}
		Event.stop(inEvent);
	},
	prev: function(){
		var el = this.activeDescendant;
		this.setActiveDescendant(this.getPreviousOption(el));
	},
	next: function(){
		var el = this.activeDescendant;
		this.setActiveDescendant(this.getNextOption(el));
	},
	setActiveDescendant: function(inNode){
		if (this.activeDescendant) Element.removeClassName(this.activeDescendant,'activedescendant');
		if($(inNode)) this.activeDescendant = $(inNode);
		else this.activeDescendant = $(this.strDefaultActiveDescendant);
		Element.addClassName(this.activeDescendant,'activedescendant');
		this.strActiveDescendant = this.activeDescendant.id;
		this.el.setAttribute('aria-activedescendant', this.activeDescendant.id);
	},
	toggleSelected: function(inNode){
		var el = this.activeDescendant;
		if (inNode) {
			el = $(inNode);
		}
		if(Aria.isSelected(el)){
			el.setAttribute('aria-selected','false');
		} else {
			el.setAttribute('aria-selected','true');
		}
	}
};
