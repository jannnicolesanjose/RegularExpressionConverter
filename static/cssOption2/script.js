
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
      { data: { id: 'a', label: '-' }, classes: 'initial', position: { x: 50, y: 310 } },

      { data: { id: 'b', label: ' ' }, position: { x: 200, y: 200 } },
      { data: { id: 'c', label: ' ' }, position: { x: 200, y: 420 } },

      { data: { id: 'd', label: ' ' }, position: { x: 325, y: 200 } },
      { data: { id: 'e', label: 'T', classes: 'trap' }, position: { x: 325, y: 310 } },
      { data: { id: 'f', label: ' ' }, position: { x: 325, y: 420 } },

      { data: { id: 'g', label: ' ' }, position: { x: 450, y: 310 } },

      { data: { id: 'h', label: ' ' }, position: { x: 575, y: 310 } },

      { data: { id: 'i', label: ' ' }, position: { x: 700, y: 200 } },
      { data: { id: 'j', label: ' ' }, position: { x: 700, y: 420 } },

      { data: { id: 'k', label: ' ' }, position: { x: 825, y: 200 } },
      { data: { id: 'l', label: ' ' }, position: { x: 825, y: 420 } },

      { data: { id: 'm', label: ' ' }, position: { x: 950, y: 200 } },
      { data: { id: 'n', label: ' ' }, position: { x: 950, y: 420 } },

      { data: { id: 'o', label: ' ' }, position: { x: 1075, y: 160 } },
      { data: { id: 'p', label: ' ' }, position: { x: 1075, y: 240 } },
      { data: { id: 'q', label: ' ' }, position: { x: 1075, y: 380 } },
      { data: { id: 'r', label: ' ' }, position: { x: 1075, y: 460 } },

      { data: { id: 's', label: '+' }, classes: 'final', position: { x: 1200, y: 200 } },
      { data: { id: 't', label: '+' }, classes: 'final', position: { x: 1200, y: 460 } },

      { data: { id: 'u', label: '+' }, classes: 'final', position: { x: 1325, y: 160 } },
      { data: { id: 'v', label: '+' }, classes: 'final', position: { x: 1325, y: 240 } },
      { data: { id: 'w', label: '+' }, classes: 'final', position: { x: 1325, y: 380 } },
      { data: { id: 'x', label: '+' }, classes: 'final', position: { x: 1325, y: 460 } },


   // Transition arrows (Edges)

   // initial
   { data: { source: 'a', target: 'b', label: '1' } },
   { data: { source: 'a', target: 'c', label: '0' } },

   // b
   { data: { source: 'b', target: 'd', label: '1', dist: -20 } },
   { data: { source: 'b', target: 'd', label: '0', dist: 20 } },

   // c
   { data: { source: 'c', target: 'f', label: '1' } },
   { data: { source: 'c', target: 'd', label: '0' } },

   // d
   { data: { source: 'd', target: 'g', label: '1' } },
   { data: { source: 'd', target: 'e', label: '0' } },

   // e
   { data: { source: 'e', target: 'e', label: '1, 0' } },

   // f
   { data: { source: 'f', target: 'e', label: '1' } },
   { data: { source: 'f', target: 'g', label: '0' } },

   // g
   { data: { source: 'g', target: 'h', label: '1', dist: -20 } },
   { data: { source: 'g', target: 'h', label: '0', dist: 20 } },

   // h
   { data: { source: 'h', target: 'i', label: '1' } },
   { data: { source: 'h', target: 'j', label: '0' } },

   // i
   { data: { source: 'i', target: 'k', label: '1' } },
   { data: { source: 'i', target: 'j', label: '0', dist: -20 } },

   // j
   { data: { source: 'j', target: 'i', label: '1', dist: -20 } },
   { data: { source: 'j', target: 'l', label: '0' } },

   // k
   { data: { source: 'k', target: 'm', label: '1' } },
   { data: { source: 'k', target: 'j', label: '0' } },

   // l
   { data: { source: 'l', target: 'i', label: '1' } },
   { data: { source: 'l', target: 'n', label: '0' } },

   // m
   { data: { source: 'm', target: 'o', label: '1' } },
   { data: { source: 'm', target: 'p', label: '0' } },

   // n
   { data: { source: 'n', target: 'q', label: '1' } },
   { data: { source: 'n', target: 'r', label: '0' } },

   // o
   { data: { source: 'o', target: 'o', label: '1' } },
   { data: { source: 'o', target: 'u', label: '0' } },

   // p
   { data: { source: 'p', target: 's', label: '1' } },
   { data: { source: 'p', target: 'v', label: '0' } },

   // q
   { data: { source: 'q', target: 'k', label: '1' } },
   { data: { source: 'q', target: 'w', label: '0' } },

   // r
   { data: { source: 'r', target: 'x', label: '1' } },
   { data: { source: 'r', target: 't', label: '0' } },

   // s
   { data: { source: 's', target: 'k', label: '1', dist: 200 } },
   { data: { source: 's', target: 'j', label: '0', dist: -50 } },

   // t
   { data: { source: 't', target: 'x', label: '1' } },
   { data: { source: 't', target: 't', label: '0' } },

   // u
   { data: { source: 'u', target: 's', label: '1' } },
   { data: { source: 'u', target: 'v', label: '0', dist: -100 } },
   
   // v
   { data: { source: 'v', target: 'i', label: '1', dist: 300 } },
   { data: { source: 'v', target: 'n', label: '0' } },

   // w
   { data: { source: 'w', target: 'i', label: '1', dist: 500 } },
   { data: { source: 'w', target: 'l', label: '0', dist: -275 } },

   // x
   { data: { source: 'x', target: 'k', label: '1' } },
   { data: { source: 'x', target: 'w', label: '0', dist: 100 } },
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
         'curve-style': 'unbundled-bezier',
         'control-point-distances': function(ele) {
            return ele.data('dist') || 0;  // Use `data(dist)` if present, else default to 30
         },
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
      selector: 'edge[source = "d"][target = "e"]',
      style: {
        'text-margin-x': 10
      }
    },
    {
      selector: 'edge[source = "f"][target = "e"]',
      style: {
        'text-margin-x': 10
      }
    },
     {
      selector: 'edge[source = "e"][target = "e"]',
      style: {
        'curve-style': 'loop',
        'target-arrow-shape': 'triangle',
        'loop-direction': '80deg',
        'loop-sweep': '70deg',
        'text-margin-y': 0,
        'text-margin-x': 10
      }
    },
    {
      selector: 'edge[source = "t"][target = "t"]',
      style: {
        'curve-style': 'loop',
        'target-arrow-shape': 'triangle',
        'loop-direction': '-30deg',
        'loop-sweep': '60deg',
      }
    },
    {
      selector: 'edge[source = "k"][target = "j"]',
      style: {
        'text-margin-x': 25,
        'text-margin-y': -40
      }
    },
    {
      selector: 'edge[source = "l"][target = "i"]',
      style: {
        'text-margin-x': 25,
        'text-margin-y': 40
      }
    },
    {
      selector: 'edge[source = "o"][target = "o"]',
      style: {
        'curve-style': 'loop',
        'target-arrow-shape': 'triangle',
        'loop-direction': '-45deg',
        'loop-sweep': '60deg',
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
   'a': { '1': 'b', '0': 'c' },
   'b': { '1': 'd', '0': 'd' },
   'c': { '1': 'f', '0': 'd' },
   'd': { '1': 'g', '0': 'e' },
   'e': { '1': 'e', '0': 'e' },
   'f': { '1': 'e', '0': 'g' },
   'g': { '1': 'h', '0': 'h' },
   'h': { '1': 'i', '0': 'j' },
   'i': { '1': 'k', '0': 'j' },
   'j': { '1': 'i', '0': 'l' },
   'k': { '1': 'm', '0': 'j' },
   'l': { '1': 'i', '0': 'n' },
   'm': { '1': 'o', '0': 'p' },
   'n': { '1': 'q', '0': 'r' },
   'o': { '1': 'o', '0': 'u' },
   'p': { '1': 's', '0': 'v' },
   'q': { '1': 'k', '0': 'w' },
   'r': { '1': 'x', '0': 't' },
   's': { '1': 'k', '0': 'j' },
   't': { '1': 'x', '0': 't' },
   'u': { '1': 's', '0': 'v' },
   'v': { '1': 'i', '0': 'n' },
   'w': { '1': 'i', '0': 'l' },
   'x': { '1': 'k', '0': 'w' },
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
    let currentState = 'a';
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