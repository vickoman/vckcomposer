/**
 * AUTORESIZE TEXTAREA
 * https://github.com/jackmoore/autosize
 */
var ta = document.querySelectorAll('textarea')

/**
 * Right Sidebar
 */
var right_panel = document.querySelector('.panel'),
 	right_sidebar = document.querySelectorAll('.sidebar li'),
    right_indicators = document.querySelectorAll('.sidebar .indicator'),
    right_icons =  document.querySelectorAll('.sidebar svg'),
    right_sidebar_open = false;

    /* PANELS */
    settings_panel = document.querySelector('.panel-settings'),
    themes_panel = document.querySelector('.panel-themes'),
    metadata_panel = document.querySelector('.panel-metadata'),
    accessibility_panel = document.querySelector('.panel-accessibility');

    var right_panels = [settings_panel, themes_panel, metadata_panel, accessibility_panel];


/**
 * RIGHT PANEL
 */
[].forEach.call(right_sidebar, function(item) {
	item.addEventListener('click', function(e) {
		/* IF PANEL IS OPEN */
		if(right_sidebar_open && item.querySelector('.indicator').classList.contains('u-hide')) {
			resetSelectionState(right_indicators, right_icons);
			e.currentTarget.classList.add('u-selected');
			e.currentTarget.querySelector('.indicator').classList.add('u-hide');
			right_sidebar_open = false;
			showPanelContentRight(item);
		}
		/* CLOSE PANEL */
		if(right_sidebar_open) {
			closePanel(item, right_panel);
			resetSelectionState( right_indicators, right_icons);
			right_sidebar_open = false;
		}
		/* OPEN PANEL */
		else if(!right_sidebar_open) {
			resetSelectionState(right_indicators, right_icons);
			openPanel(item, right_panel)
			right_sidebar_open = true;
			showPanelContentRight(item);
			right_panel.classList.add('u-show-left-border');
		}
		e.stopPropagation();
	})
});

right_panel.addEventListener('transitionend', function(e) {
	if(right_panel.offsetWidth < 20) {
		right_panel.classList.remove('u-show-left-border');
	}
});

function showPanelContentRight(item) {
	right_panels.forEach(function(panel){
		panel.classList.add('u-hide');
	});

	if(item.classList.contains('btn-settings')) settings_panel.classList.remove('u-hide');
	//if(item.classList.contains('btn-themes')) themes_panel.classList.remove('u-hide');
	if(item.classList.contains('btn-metadata')) metadata_panel.classList.remove('u-hide');
	if(item.classList.contains('btn-accessibility')) accessibility_panel.classList.remove('u-hide');

}

/* PANEL ACTIONS */
function openPanel(item, panel, _width) {
	if(panel.classList.contains('panel')){
		panel.classList.add('u-panel-open-right');

	}

	item.querySelector('svg').classList.add('u-selected');
	item.querySelector('.indicator').classList.remove('u-hide');
}

function closePanel(item, panel) {
	if(panel.classList.contains('panel')){
		panel.classList.remove('u-panel-open-right')

	}

	item.classList.add('u-selected');
	item.querySelector('.indicator').classList.add('u-hide');
}

function resetSelectionState(indicators, icons) {
	[].forEach.call(indicators, function(item) {
		item.classList.add('u-hide');
	});
	[].forEach.call(icons, function(item) {
		item.classList.remove('u-selected');
	});
}

