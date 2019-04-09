var editorCollection = document.getElementsByClassName("CodeMirror-code");
Array.from(editorCollection).forEach((item)  => {
  var currentGithubSpellcheckStatus = item.getAttribute("spellcheck");
  var newGithubSpellcheckStatus = (currentGithubSpellcheckStatus == "true") ? "false" : "true";
  item.setAttribute("spellcheck", newGithubSpellcheckStatus); 
});
