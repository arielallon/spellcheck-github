javascript:(function()%7Bvar%20editorCollection%20%3D%20document.getElementsByClassName(%22CodeMirror-code%22)%3BArray.from(editorCollection).forEach((item)%20%20%3D%3E%20%7Bvar%20currentGithubSpellcheckStatus%20%3D%20item.getAttribute(%22spellcheck%22)%3Bvar%20newGithubSpellcheckStatus%20%3D%20(currentGithubSpellcheckStatus%20%3D%3D%20%22true%22)%20%3F%20%22false%22%20%3A%20%22true%22%3Bitem.setAttribute(%22spellcheck%22%2C%20newGithubSpellcheckStatus)%3B%7D)%7D)()
