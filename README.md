# AccordionPlugin

This plugin is still under development and should be use at your own risk ! More options and optimizions will come soon.
For now to use this create a DIV with the id "gal" and class "galeria".
After that you can init the plugin by doing,

	var accordion = new AccordionImages({

		image0: '01.jpg',
		text0: 'Sub text image',
		image1: '02.jpg',
		text1: 'texto2',
		image2: '03.jpg',
		text2: 'texto3',
		image3: '04.jpg',
		text3: 'texto4',
		image4: '05.jpg',
		text4: 'texto5'
		/* And so on */
		/* You must respect this structure but there is no limit for images or descriptions */
		/* Simply continue with image5 : 'path to images' , text5: 'ur text' */

	});

	accordion.init();

To customize the Accordion you need to change the Css. I will try to have options later so this step will not be necessary !

Have fun !
