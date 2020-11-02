// showHideDirns():
//   Allows users to click on questions to get their answers.
//   window.onload will run the function on loading the website.
window.onload=function showHideDirns() {
		var faqList, answers, questionLinks, questions, currentNode, i, j;

		// Load answers from the "faq" main context
		faqList = document.getElementById("papers");
		answers = faqList.getElementsByTagName("dd");

		// Kill all the answers initially:
		for (i = 0; i < answers.length; i++) {
				answers[i].style.display = 'none';  // kill the display
		}

		// Load all of the questions
		questions = faqList.getElementsByTagName("dt");
		for (i = 0; i < questions.length; i++) {
				questions[i].onclick = function() { 
						currentNode = this.nextSibling;  
						while (currentNode) { // As long as you have notes.
								if (currentNode.nodeType == "1" && currentNode.tagName == "DD") {
										 // Switch from 'none' to 'block' and
										 //   vice-versa:
										 if (currentNode.style.display == 'none') {
												 currentNode.style.display = 'block';
										 } else {
												 currentNode.style.display = 'none';
										 }
										 break;
								}
								currentNode = currentNode.nextSibling;
						}
						return false;
				} // end of function definition
		} 
}

