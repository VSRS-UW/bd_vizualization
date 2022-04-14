/* Functions for building controls: makeControls() gets called in sketch.js */
// Settings for the controls we'll build
const controlSettings = [
    {
        label: "Minimum Radius", id: "minRadius", minVal: 2, maxVal: 200, value: 100, step: 1, update: () => { 
            resetCanvas();
        }
    },
    {
        label: "Maximum Radius", id: "maxRadius", minVal: 200, maxVal: 500, value: 350, step: 1, update: () => { 
            resetCanvas();
        }
    },
    {
        label: "Radius Divisions", id: "radiusDivisions", minVal: 3, maxVal: 2000, value: 100, step: 1, update: () => {
            resetCanvas();
        }
    },
    {
        label: "Perlin Variablility", id: "perlinVariability", minVal: 1, maxVal: 100, value: 25, step: 1, update: () => {
            resetCanvas();
        }
    },
    {
        label: "Number of Cells", id: "numberOfCells", minVal: 1, maxVal: 400, value: 100, step: 1, update: () => {
            resetCells();
        }
    },
    {
        label: "Distrubtion of Cells", id: "cellDistribution", minVal: 1, maxVal: 25, value: 5, step: 1, update: () => {
            resetCells();
        }
    },
    {
        label: "Horizontal Bias", id: "hBias", minVal: -100, maxVal: 100, value: 0, step: 10, update: () => {
            resetCells();
        }
    },
    {
        label: "Vertical Bias", id: "vBias", minVal: -100, maxVal: 100, value: 0, step: 10, update: () => {
            resetCells();
        }
    }
];


// Function to make a slider
function makeSlider(options = { label: "Label", minVal: 0, maxVal: 50, value: 10, step: 1, parent: createDiv(), update: () => {} }) {
    let wrapper = createDiv(options.label);
    wrapper.parent(options.parent);
    wrapper.class("slider");
    let slider = createSlider(options.minVal, options.maxVal, options.value, options.step);
    slider.input(options.update); // function to do on update
    slider.class("form-control-range")
    slider.parent(wrapper);
    return (slider);
}

// Function to make all of the controls (e.g., sliders)
function makeControls() {
    let controlWrapper = createDiv().id("control-wrapper");
    let controlHeader = createDiv("<h2>Controls</h2>");
    controlHeader.parent(controlWrapper);
    return controlSettings.map(d => {
        d.parent = controlWrapper;
        return {
            id: d.id,
            control: makeSlider(d)
        }
    })
}