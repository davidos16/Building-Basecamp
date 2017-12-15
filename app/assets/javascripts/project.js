
// We have to make sure turbolinks is loaded 
document.addEventListener('turbolinks:load', function () {
     console.log("Turbolinks Loaded");
  // Assign the elements we're intrerested in to variables
  var openProjectButton = document.getElementById('new-project-button');
  var projectPopover = document.getElementById('new-project-popover');

  // check to see if these elements exist before we add our listeners.
  if (openProjectButton && projectPopover) {
    // Attach click event
    openProjectButton.addEventListener('click', function () {
      // If the project popover  'is-hidden' class, remove it, otherwise return null
      return projectPopover.classList.contains('is-hidden') ? projectPopover.classList.remove('is-hidden') : null;
    }, false);

    // Attach a click event listener to our cancel button
    var cancelProjectPopover = document.getElementById('cancel-project-popover');
    cancelProjectPopover.addEventListener('click', function () {
      // .is-hidden class is not part of the class list of project pop-over and we can add it.
      return projectPopover.classList.add('is-hidden');
    }, false);
  }
});