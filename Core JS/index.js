let readJson = new Promise((resolve, reject) => {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType('application/json');
    rawFile.open('GET', '../skills_tree_example.json', true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == '200') {
            resolve(rawFile.responseText);
        }
    };
    rawFile.send(null);
});

readJson.then((json) => {
    let tree = JSON.parse(json);
    console.log(tree);
    let container = document.querySelector('.container');
    container.appendChild(createTreeElement(tree));

    document.querySelector('.hide-container').appendChild(createHideTreeElement(tree));

});

function createTreeElement(treeElem) {
    let div = document.createElement('div');
    div.className = 'tree-element';
    let label = document.createElement('div');
    label.className = 'tree-name';
    let isOpen = false;
    div.appendChild(label);
    label.innerHTML = treeElem.name;
    label.onclick = function() {
        if (isOpen) {
            let elems = div.children;
            let elemsCount = elems.length;
            for (let i = 1; i < elemsCount; i++) {
                div.removeChild(elems[1]);
            }
        } else {
            let array = treeElem.skills || [];
            for (let i = 0; i < array.length; i++) {
                let elem = createTreeElement(array[i]);
                div.appendChild(elem);
            }
        }
        isOpen = !isOpen;
    };
    return div;
}

function createHideTreeElement(treeElem) {
    let container = document.createElement('div');
    let div = document.createElement('div');
    div.className = 'tree-element';
    div.style.display = 'none';
    let label = document.createElement('div');
    let span = document.createElement('span');
    span.className = 'symbol';
    span.innerHTML = '>';
    let name = document.createElement('span');
    name.innerHTML = treeElem.name;
    !treeElem.skills || label.appendChild(span);
    label.appendChild(name);
    label.className = 'tree-name';
    let isOpen = false;
    label.onclick = function() {
        if (isOpen) {
            span.innerHTML = '>';
            div.style.display = 'none';
        } else {
            span.innerHTML = '\\/';
            div.style.display = 'block';
        }
        isOpen = !isOpen;
    };
    let array = treeElem.skills || [];
    for (let i = 0; i < array.length; i++) {
        let elem = createHideTreeElement(array[i]);
        div.appendChild(elem);
    }
    container.appendChild(label);
    container.appendChild(div);
    return container;
}