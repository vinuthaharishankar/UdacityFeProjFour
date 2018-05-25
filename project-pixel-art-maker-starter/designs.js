// Select color input
// Select size input

//Add a event listener to the submit button
// When size is submitted by the user, call makeGrid()

//Draw a table
//Draw the number of rows tr's should be the height table, td should be the columns number
//Add event listener to each cell so it is put the required color



/**
* @description Anonymous function call 
* so events registered once DOM loads	
*/
$(function(){

	/**
	* @description Listener for the grid creation
	*/
	$('#submitButton').on('click',function makeGrid(event) {	
		
		event.preventDefault();
		removeGrid();
		let heightTable, widthTable, grid
		heightTable = Number($('#inputHeight').val());
		widthTable = Number($('#inputWeight').val());		
		grid = $('#pixelCanvas');
 		
 		//Creating the grid
 		grid.append("<tbody>");
 		for(let rows = 0; rows<heightTable; rows++)
 		{
 			grid.append("<tr></tr>");
 		}
 		var trElement = grid.find('tr');
 		for(let cols = 0; cols<widthTable; cols++)
 		{
 			trElement.append("<td></td>");
 		}				

 		grid.append("</tbody>");
	});


	/**
	* @description Clears the grid of colors	
	*/
	function removeGrid(){
	
		const bodyTable = $('#pixelCanvas').find('tbody');		
		bodyTable.remove();
	}


	/**
	*@description Listener for the grid click
	*/
	$('table').on('click', 'tr td',  function(event){

		const colorPick = $('#colorPicker').val();			
		$(this).css("background-color",colorPick);

	});

});

