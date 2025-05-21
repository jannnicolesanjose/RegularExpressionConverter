
let currentSimulationId = 0;
let isSimulating = false;

const cy = cytoscape({
container: document.getElementById('cy'),
panningEnabled: false,
userPanningEnabled: false,
boxSelectionEnabled: false,
autoungrabify: true,


elements: [
// States (nodes)
  { data: { id: 'initial', label: '-' }, classes: 'initial', position: { x: 100, y: 300 } },

  { data: { id: 'top1', label: ' ' }, position: { x: 300, y: 150 } },
  { data: { id: 'top2', label: ' ' }, position: { x: 450, y: 150 } },
  { data: { id: 'trap1', label: 'T', classes: 'trap' }, position: { x: 600, y: 150 } },

  { data: { id: 'bottom1', label: ' ' }, position: { x: 300, y: 450 } },

  { data: { id: 'middle1', label: ' ' }, position: { x: 600, y: 300 } },

  { data: { id: 'top3', label: ' ' }, position: { x: 750, y: 150 } },
  { data: { id: 'top4', label: ' ' }, position: { x: 900, y: 150 } },

  { data: { id: 'bottom2', label: ' ' }, position: { x: 750, y: 450 } },
  { data: { id: 'bottom3', label: ' ' }, position: { x: 900, y: 450 } },

  { data: { id: 'trap2', label: 'T', classes: 'trap' }, position: { x: 825, y: 300 } },

  { data: { id: 'middle2', label: ' ' }, position: { x: 1050, y: 300 } },

  { data: { id: 'final1', label: '+' }, classes: 'final', position: { x: 1200, y: 300 } },
  { data: { id: 'final2', label: '+' }, classes: 'final', position: { x: 1350, y: 150 } },
  { data: { id: 'final3', label: '+' }, classes: 'final', position: { x: 1350, y: 450 } },

   // Transition arrows (Edges)
   { data: { source: 'initial', target: 'top1', label: 'a' } },
   { data: { source: 'initial', target: 'bottom1', label: 'b' } },


   { data: { source: 'top1', target: 'top2', label: 'b' } },
   { data: { source: 'top1', target: 'middle1', label: 'a' } },


   { data: { source: 'top2', target: 'middle1', label: 'a' } },
   { data: { source: 'top2', target: 'trap1', label: 'b' } },


   { data: { source: 'trap1', target: 'trap1', label: 'a, b' } },


   { data: { source: 'bottom1', target: 'middle1', label: 'a' } },
   { data: { source: 'bottom1', target: 'middle1', label: 'b' } },


   { data: { source: 'middle1', target: 'top3', label: 'a' } },
   { data: { source: 'middle1', target: 'bottom2', label: 'b' } },


   { data: { source: 'top3', target: 'trap2', label: 'a' } },
   { data: { source: 'top3', target: 'top4', label: 'b' } },


   { data: { source: 'top4', target: 'middle2', label: 'a' } },
   { data: { source: 'top4', target: 'trap2', label: 'b' } },


   { data: { source: 'trap2', target: 'trap2', label: 'a, b' } },


   { data: { source: 'bottom2', target: 'bottom3', label: 'a' } },
   { data: { source: 'bottom2', target: 'bottom3', label: 'b' } },


   { data: { source: 'bottom3', target: 'trap2', label: 'a' } },
   { data: { source: 'bottom3', target: 'middle2', label: 'b' } },


   { data: { source: 'middle2', target: 'final1', label: 'a' } },
   { data: { source: 'middle2', target: 'final1', label: 'b' } },


   { data: { source: 'final1', target: 'final2', label: 'a' } },
   { data: { source: 'final1', target: 'final3', label: 'b' } },


   { data: { source: 'final2', target: 'final1', label: 'a' } },
   { data: { source: 'final2', target: 'final3', label: 'b' } },


   { data: { source: 'final3', target: 'final2', label: 'a' } },
   { data: { source: 'final3', target: 'final1', label: 'b' } }
 ],


style: [
 {
   selector: 'node',
   style: {
     'shape': 'ellipse',
     'width': 60,
     'height': 60,
     'background-color': '#fcfcfd',
     'border-color': '#bbe4ec',
     'border-width': 5,
     'color': '#36395a',
     'font-size': 18,
     'font-family': 'Fredoka, sans-serif',
     'font-weight': 'bold',
     'text-valign': 'center',
     'text-halign': 'center',
     'label': 'data(label)',
     'overlay-opacity': 0,
     'background-blacken': -0.03,
     'transition-property': 'shadow-blur, shadow-color, background-color, border-color',
     'transition-duration': '0.3s'
   }
 },
 {
   selector: 'node.active',
   style: {
     'background-color': '#05eef1',
     'background-blacken': -0.1,
     'border-color': '#80e0e1',
     'border-width': 6,
     'width': 65,
     'height': 65,
     'overlay-opacity': 0,
     'shadow-blur': 10,
     'shadow-color': '#20b3b5',
     'shadow-opacity': 0.6,
     'shadow-offset-x': 0,
     'shadow-offset-y': 0,
     'transition-property': 'shadow-blur, shadow-color, background-color, border-color',
     'transition-duration': '0.4s'
   }
 },
 {
   selector: 'edge',
   style: {
     'curve-style': 'bezier',
     'target-arrow-shape': 'triangle',
     'target-arrow-color': '#92b8bf',
     'line-color': '#92b8bf',
     'width': 4,
     'label': 'data(label)',
     'font-size': 18,
     'font-family': 'Fredoka, sans-serif',
     'font-weight': 'bold',
     'color': '#414343',
     'text-background-color': '#ffffff',
     'text-background-opacity': 1,
     'text-background-padding': '3px',
     'transition-property': 'line-color, width',
     'transition-duration': '0.6s'
   }
 },
 {
   selector: 'edge.active',
   style: {
     'target-arrow-color': '#82f6f8',
     'line-color': '#82f6f8',
     'width': 6,
     'font-size': 21,
     'color': '#414343',
     'text-outline-color': '#82f6f8',
     'text-outline-width': 5,
     'transition-property': 'line-color, width',
     'transition-duration': '0.7s',
     'shadow-color': '#82f6f8',
     'shadow-blur': 30,
     'shadow-offset-x': 10,
     'shadow-offset-y': 10
   }
 },
 {
  selector: 'edge[source = "trap1"][target = "trap1"]',
  style: {
    'curve-style': 'loop',
    'loop-direction': '45deg',
    'loop-sweep': '60deg',
    'target-arrow-shape': 'triangle',
    'text-margin-y': -25,
  }
},
{
  selector: 'edge[source = "trap2"][target = "trap2"]',
  style: {
    'curve-style': 'loop',
    'loop-direction': '-95deg',
    'loop-sweep': '60deg',
    'target-arrow-shape': 'triangle',
    'text-margin-y': 35,
  }
},
{
   selector: 'node.trap-active',
   style: {
     'background-color': '#fb473c',
     'background-blacken': -0.3,
     'border-color': '#99c4c5',
     'shadow-color': '#fca5a5',
     'shadow-blur': 12,
     'width': 65,
     'height': 65,
     'border-width': 6,
     'shadow-opacity': 0.7,
     'transition-property': 'background-color, border-color, shadow-blur',
     'transition-duration': '0.6s'
   }
 },
  {
    selector: 'node.last-final',
    style: {
      'background-color': '#30da56',
      'background-blacken': -0.3,
      'border-color': '#99c4c5',
      'border-width': 6,
      'width': 65,
      'height': 65,
      'overlay-opacity': 0,
      'shadow-blur': 10,
      'shadow-color': '#20b3b5',
      'shadow-opacity': 0.6,
      'shadow-offset-x': 0,
      'shadow-offset-y': 0,
      'transition-property': 'shadow-blur, shadow-color, background-color, border-color',
      'transition-duration': '0.6s'
    }
  },
  {
    selector: 'node.last-rejected',
    style: {
      'background-color': '#fb473c',
      'background-blacken': -0.3,
      'border-color': '#99c4c5',
      'border-width': 6,
      'width': 65,
      'height': 65,
      'overlay-opacity': 0,
      'shadow-blur': 10,
      'shadow-color': '#20b3b5',
      'shadow-opacity': 0.6,
      'shadow-offset-x': 0,
      'shadow-offset-y': 0,
      'transition-property': 'shadow-blur, shadow-color, background-color, border-color',
      'transition-duration': '0.6s'
    }
  }
],


layout: {
 name: 'preset',
}
});


const transitions = {
'initial': { 'a': 'top1', 'b': 'bottom1' },
'top1': { 'b': 'top2', 'a': 'middle1' },
'top2': { 'a': 'middle1', 'b': 'trap1' },
'trap1': { 'a': 'trap1', 'b': 'trap1' },
'bottom1': { 'a': 'middle1', 'b': 'middle1' },
'middle1': { 'a': 'top3', 'b': 'bottom2' },
'top3': { 'a': 'trap2', 'b': 'top4' },
'top4': { 'a': 'middle2', 'b': 'trap2' },
'trap2': { 'a': 'trap2', 'b': 'trap2' },
'bottom2': { 'a': 'bottom3', 'b': 'bottom3' },
'bottom3': { 'a': 'trap2', 'b': 'middle2' },
'middle2': { 'a': 'final1', 'b': 'final1' },
'final1': { 'a': 'final2', 'b': 'final3' },
'final2': { 'a': 'final1', 'b': 'final3' },
'final3': { 'a': 'final2', 'b': 'final1' }
};


async function simulateDFA(inputIndex) {
    // Cancel any ongoing simulation
    currentSimulationId++;
    const mySimId = currentSimulationId;

    // Reset visual DFA state
    isSimulating = false;
    cy.nodes().removeClass('active last-final last-rejected trap-active');
    cy.edges().removeClass('active');

    const inputElement = document.getElementById(`inputString${inputIndex}`);
    const resultElement = document.getElementById(`result${inputIndex}`);
    const input = inputElement.value.trim().toLowerCase();

    // Reset result box to default
    resultElement.innerText = "Result";
    resultElement.className = "result-box"; // Ensures default style

    if (!input) {
    resultElement.innerText = "Please enter a string!";
    resultElement.classList.add('invalid');
    resultElement.classList.remove('valid');
    return;
    }

    // Show "Simulating..." message
    resultElement.innerText = "Simulating in DFA below...";
    resultElement.classList.add('simulating');
    resultElement.classList.remove('valid', 'invalid');

    isSimulating = true;
    let currentState = 'initial';
    let isValid = true;
    let enteredTrap = false;

    for (let i = 0; i < input.length; i++) {
    if (mySimId !== currentSimulationId) {
      cleanupResult(resultElement);
      return;
    }

    const char = input[i];

    if (enteredTrap) {
      const trapNode = cy.getElementById(currentState);
      const loopEdge = cy.edges().filter(edge =>
        edge.source().id() === currentState &&
        edge.target().id() === currentState &&
        edge.data('label').includes(char)
      );

      trapNode.removeClass('trap-active');
      await waitIfNotCancelled(20, mySimId);
      trapNode.addClass('trap-active');
      loopEdge.addClass('active');
      await waitIfNotCancelled(60, mySimId);
      continue;
    }

    const nextState = transitions[currentState]?.[char];
    if (!nextState) {
      isValid = false;
      break;
    }

    const currentNode = cy.getElementById(currentState);
    currentNode.removeClass('active');
    await waitIfNotCancelled(20, mySimId);
    currentNode.addClass('active');

    const edge = cy.edges().filter(edge =>
      edge.source().id() === currentState &&
      edge.target().id() === nextState &&
      edge.data('label').includes(char)
    );
    edge.addClass('active');
    await waitIfNotCancelled(20, mySimId);

    const nextNode = cy.getElementById(nextState);
    nextNode.removeClass('active');
    await waitIfNotCancelled(20, mySimId);

    if (nextNode.hasClass('trap')) {
      enteredTrap = true;
      nextNode.addClass('trap-active');
    } else {
      nextNode.addClass('active');
    }

    await waitIfNotCancelled(600, mySimId);
    currentState = nextState;
    }

    // Cancelled midway
    if (mySimId !== currentSimulationId) {
    cleanupResult(resultElement);
    return;
    }

    // Remove simulating style
    resultElement.classList.remove('simulating');

    // Show final result
    const finalNode = cy.getElementById(currentState);
    if (finalNode.hasClass('final') && isValid && !enteredTrap) {
    finalNode.addClass('last-final');
    resultElement.innerText = "VALID STRING!";
    resultElement.classList.add('valid');
    resultElement.classList.remove('invalid');
    } else {
    finalNode.addClass('last-rejected');
    resultElement.innerText = "INVALID STRING!";
    resultElement.classList.add('invalid');
    resultElement.classList.remove('valid');
    }

    isSimulating = false;
    }

    // Helper delay function with cancellation support
    async function waitIfNotCancelled(ms, simId) {
    return new Promise(resolve => {
    setTimeout(() => {
      if (simId === currentSimulationId) resolve();
    }, ms);
    });
}

// Reset result box when simulation is cancelled
function cleanupResult(resultElement) {
    resultElement.innerText = "Result";
    resultElement.className = "result-box";
}


function clearAll() {
    // Stop ongoing simulation
    isSimulating = false;

    // Reset input and result display for all 5 boxes
    for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(`inputString${i}`);
    const result = document.getElementById(`result${i}`);
    input.value = '';
    result.innerText = 'Result';
    result.classList.remove('valid', 'invalid', 'simulating');
    }

    // Reset all node and edge styles
    cy.nodes().removeClass('active last-final last-rejected trap-active');
    cy.edges().removeClass('active');
}

