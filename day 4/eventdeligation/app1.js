let table = document.querySelector("table");

let selectedTd;

table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; //  ager TD nhi h to koi action nhi hoga

  highlight(target); // highlight me show hoga
};

function highlight(td) { // yha pe ager td pe click kiya then yah handel hoga 
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}


