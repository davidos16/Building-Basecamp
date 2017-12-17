
// Check if turbo links loaded

document.addEventListener('turbolinks:load', function () {
     console.log("Turbolinks Loaded");
  if (document.getElementById('new-project-form')) {
   // Assign the elements 
    const openProjectButton = document.getElementById('new-project-button');
    const projectPopover = document.getElementById('new-project-popover');
    const projectForm = document.getElementById('new-project-form');
    const projectName = document.getElementById('project-name-input');
       // Create and add our error helper
      var errorNode = document.createElement('div');
      var errorTextNode = document.createTextNode('Name must not be blank');

   // check to see if these elements exist before we add our listeners.
    if (openProjectButton && projectPopover) {
      // Attach event to new project
      openProjectButton.addEventListener('click', function () {
       // If the project popover  'is-hidden' class, remove it, otherwise return null
        return projectPopover.classList.contains('is-hidden') ? projectPopover.classList.remove('is-hidden') : null;
      }, false);

      // Attach an event listener to our cancel button
      const cancelProjectPopover = document.getElementById('cancel-project-popover');
      cancelProjectPopover.addEventListener('click', function () {
      // .is-hidden class is not part of the class list of project pop-over and we can add it.
        projectName.value = '';
      // clear error node if there
        if (errorNode) {
           projectName.classList.remove('is-invalid');
        }
        return projectPopover.classList.add('is-hidden');
      }, false);
    }

    // Handle errors from the project form submission
    projectForm.addEventListener('ajax:error', function (xhr, status, err) {
      // Have a good look at what's returned with a console.log()
      console.log(xhr);

      // Add an error class to the project name input
      projectName.classList.add('is-invalid');

      errorNode.classList.add('invalid-feedback');
      errorNode.appendChild(errorTextNode);
      // Add the error message node using this ugly line of code. Thanks StackOverflow!
      projectName.parentNode.insertBefore(errorNode, projectName.nextSibling);
    });
  }
});