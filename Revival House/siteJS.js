
let selectedId;

function switchToImage(id) {
    // Nothing to do if we have already select this section.
    if (id == selectedId)
        return;

    // Get a reference to the section we want to select next
    // and exit early if it's not valid.
    const newSection = document.getElementById(id);
    if (!newSection)
        return;

    // Given we have a valid new section, we can remove the previous
    // section, if it exists. It's perfectly valid that it may not
    // exist in the event that we're selecting a section for the
    // first time.
    const previousSection = document.getElementById(selectedId);
    if (previousSection)
        previousSection.removeAttribute("class");

    // Now make the new section visible.
    newSection.className = "visible";

    // Finally, we must keep track of the id for the newly-selected section.
    selectedId = id;
}

// Main function called upon site load

function main() {
    switchToImage('BS1img');
}
