# Multimodal-Alert-System (Sound-Free Safety System)
## What this is
I built this as a sound-free alert system for environments where traditional audio alarm don't work well.

Instead of relying on sound, it uses visual signals and vibration patterns to communicate important information clearly-especially for Deaf users or in high-noise environments. 

## Why it matters
Most alert systems depend on sound.

That creates real gaps:
  - Deaf individuals can't access audio alarms
  - Loud environments can override sound
  - Important warnings can be missed

I wanted to explore how systems can communicate clearly WITHOUT SOUND, while still being effective in high-risk situations.

## How it works
The system monitors simulated conditions:
  - Oxygen levels
  - Temperature

It evaluates them using a priority-based system:
  - Info → low priority
  - Warning → medium priority
  - Critical → high priority

Each alert triggers:
  - A visual signal (color-based output)
  - A vibration pattern (light/medium/strong)
  - A clear message

If multiple conditions occur at once, the system prioritizes the most critical one.

## Example scenario
In a high-risk environment (like a spacecraft or industrial setting)

If oxygen levels drop:
  - A RED VISUAL ALERT activates
  - A STRONG VIBRATION PATTERN is triggered
  - A clear warning message is displayed

## Demo

Below is a live terminal simulation of the system responding

### Normal state
![Normal](screenshots/normal.png)

### Warning state
![Warning](screenshots/warning.png)

### Critical state
![Critical](screenshots/critical.png)

No sound is required.

## How to run

```bash
python3 main.py
```

Optional:

```bash
python3 main.py --delay 0
python3 main.py --cycles 5
```

## Project structure
  - main.py → entry point
  - alert_system/engine.py → core logic
  - alert_system/models.py → data structures
  - alert_system/console.py → output formatting
  - alert_system/simulator.py → environment simulation

## Future direction
  - Connect to real sensors
  - Add wearable vibration devices
  - Expand to multi-user alert systems
  - Explore predictive alerting with AI

## Author
Berenice Alvarez-Caballero (Bere)
Interested in accessibility, systems design, and human-centered AI
