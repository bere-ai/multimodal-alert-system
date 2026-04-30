const demoSteps = [
  {
    cycle: "01",
    oxygen: "100%",
    temperature: "70 F",
    priority: "Normal",
    statusClass: "status-normal",
    lines: [
      "Oxygen level: 100%",
      "Temperature: 70 F",
      "",
      "--- ALERT SYSTEM ---",
      "STATUS: NORMAL",
      "VISUAL: MONITOR STEADY",
      "MESSAGE: Conditions are within the normal operating range.",
      "VIBRATION: none",
    ],
  },
  {
    cycle: "03",
    oxygen: "80%",
    temperature: "80 F",
    priority: "Info",
    statusClass: "status-info",
    lines: [
      "Oxygen level: 80%",
      "Temperature: 80 F",
      "",
      "--- ALERT SYSTEM ---",
      "PRIORITY: INFO",
      "VISUAL: BLUE LIGHT",
      "MESSAGE: Temperature slightly elevated",
      "VIBRATION: LIGHT - buzz",
    ],
  },
  {
    cycle: "04",
    oxygen: "70%",
    temperature: "85 F",
    priority: "Info",
    statusClass: "status-info",
    lines: [
      "Oxygen level: 70%",
      "Temperature: 85 F",
      "",
      "--- ALERT SYSTEM ---",
      "PRIORITY: INFO",
      "VISUAL: BLUE LIGHT",
      "MESSAGE: Oxygen level slightly decreasing",
      "VIBRATION: LIGHT - buzz",
    ],
  },
  {
    cycle: "05",
    oxygen: "60%",
    temperature: "90 F",
    priority: "Warning",
    statusClass: "status-warning",
    lines: [
      "Oxygen level: 60%",
      "Temperature: 90 F",
      "",
      "--- ALERT SYSTEM ---",
      "PRIORITY: WARNING",
      "VISUAL: YELLOW FLASH",
      "MESSAGE: Temperature rising",
      "VIBRATION: MEDIUM - buzz buzz",
    ],
  },
  {
    cycle: "06",
    oxygen: "50%",
    temperature: "95 F",
    priority: "Warning",
    statusClass: "status-warning",
    lines: [
      "Oxygen level: 50%",
      "Temperature: 95 F",
      "",
      "--- ALERT SYSTEM ---",
      "PRIORITY: WARNING",
      "VISUAL: YELLOW FLASH",
      "MESSAGE: Oxygen level dropping",
      "VIBRATION: MEDIUM - buzz buzz",
    ],
  },
  {
    cycle: "07",
    oxygen: "40%",
    temperature: "100 F",
    priority: "Critical",
    statusClass: "status-critical",
    lines: [
      "Oxygen level: 40%",
      "Temperature: 100 F",
      "",
      "--- ALERT SYSTEM ---",
      "PRIORITY: CRITICAL",
      "VISUAL: RED FLASH",
      "MESSAGE: Temperature critically high",
      "VIBRATION: STRONG - buzz buzz buzz",
    ],
  },
  {
    cycle: "09",
    oxygen: "20%",
    temperature: "110 F",
    priority: "Critical",
    statusClass: "status-critical",
    lines: [
      "Oxygen level: 20%",
      "Temperature: 110 F",
      "",
      "--- ALERT SYSTEM ---",
      "PRIORITY: CRITICAL",
      "VISUAL: RED FLASH",
      "MESSAGE: Oxygen critically low",
      "VIBRATION: STRONG - buzz buzz buzz",
    ],
  },
];

const cycleValue = document.querySelector("#cycle-value");
const oxygenValue = document.querySelector("#oxygen-value");
const temperatureValue = document.querySelector("#temperature-value");
const priorityValue = document.querySelector("#priority-value");
const demoConsole = document.querySelector("#demo-console");
const replayButton = document.querySelector("#replay-demo");

let currentStep = 0;
let timerId = null;

function renderStep(step) {
  cycleValue.textContent = step.cycle;
  oxygenValue.textContent = step.oxygen;
  temperatureValue.textContent = step.temperature;
  priorityValue.textContent = step.priority;
  priorityValue.className = `summary-value ${step.statusClass}`;
  demoConsole.textContent = step.lines.join("\n");
}

function advanceStep() {
  currentStep = (currentStep + 1) % demoSteps.length;
  renderStep(demoSteps[currentStep]);
}

function startLoop(reset = false) {
  if (reset) {
    currentStep = 0;
    renderStep(demoSteps[currentStep]);
  }

  window.clearInterval(timerId);
  timerId = window.setInterval(advanceStep, 2400);
}

replayButton.addEventListener("click", () => {
  startLoop(true);
});

renderStep(demoSteps[currentStep]);
startLoop(false);
