function addExpandAllLink() { 
	var expandAllDiv, expandAllLink, faq;           // variables without types needed

	expandAllDiv = document.createElement("div");   // <div> ... </div>
	expandAllDiv.setAttribute("id", "expandAll");   // <div id="expandAll">
	expandAllLink = document.createElement("a");    // <a ..> link using "a"
	expandAllLink.setAttribute("href", "#");        // <a id="expandAllLink"> 
	expandAllLink.setAttribute("id", "expandAllLink");   
	expandAllLink.appendChild(document.createTextNode("Expand All")); // Expand All text
	expandAllDiv.appendChild(expandAllLink);        // add the link for the actions.

	expandAllLink.onclick = function() {   // onclick action for expandAllLink
		var faqList, answers; 
		faqList = document.getElementById("faq");        // faqList built from "faq" id
		answers = faqList.getElementsByTagName("dd");    // All answers by "dd" tag
		if (this.innerHTML == "Expand All") {            // Pressed on "Expand All"
			for (i = 0; i < answers.length; i++) {
				answers[i].style.display = 'block';      // Display all of the answers
			} 
			this.innerHTML = "Collapse All";             // Switch to opposite state.
		} 
		else {
			for (i = 0; i < answers.length; i++) { 
				answers[i].style.display = 'none';       // Do not display anything 
			} 
			this.innerHTML = "Expand All";               // Switch to opposite state.
		}
		return false; 
	};
	
	faq = document.getElementById("faq");               // Get everything
	faq.insertBefore(expandAllDiv, faq.firstChild);     // Insert button first
}
