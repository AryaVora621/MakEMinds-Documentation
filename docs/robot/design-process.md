---
sidebar_position: 1
---

# Engineering Design Process

Our team follows a systematic approach to robot development, focusing on reliability and efficiency.

## Robot Features

### Arm and Claw System
- **High-Torque Arm**: 28:1 worm gear system for precise lifting and placing
- **4-Stage Viper Slide**: Extends reach for high basket placement while allowing quick retraction
- **Advanced Claw Control**: 
  - Three dedicated servos for arm, wrist, and grip
  - Secure handling of game elements
  - Efficient pass-through design
  - 12 design iterations for improved reliability
- **Quick-Release Hanging**: Compact hook system for secure lower rung attachment

### Design Evolution
1. **Initial Prototypes**:
   - Design 1: Worm gear with 1-axis claw
   - Design 2: Multi-axis claw system
2. **Final Design**: Hybrid approach combining:
   - Multi-axis functionality
   - Worm gear efficiency
   - Simplified sample transfer

### Claw Iterations
Our claw went through 12 major redesigns focusing on:
- Increasing success rate
- Protecting servo mechanisms
- Implementing pass-through functionality
- Reducing cycle time (3 seconds average improvement)

## Game Strategy

### Autonomous Period
- Focus on maximizing point scoring
- Target: 
  - 5 specimens in high chamber (specimen side)
  - 4 samples in high basket (left side)

### Navigation Systems Evolution
1. **Initial System**:
   - Encoders only
   - Issues: wheel slippage and drift
   - 50% success rate

2. **Intermediate System**:
   - Two odometry pods
   - IMU integration
   - Roadrunner implementation
   - 80% success rate
   - Limitations: drift response and IMU veering

3. **Current System (PedroPathing)**:
   - Three odometry pods
   - Bezier curve path planning
   - Triple PID control:
     - Translational controller
     - Drive controller
     - Heading controller
   - Centripetal force correction
   - 95% success rate
   - Path adherence even under external forces

## Design Priorities
- **Reliability**: Consistent performance in matches
- **Efficiency**: Quick scoring and cycle times
- **Simplicity**: Minimize complexity where possible
- **Maintainability**: Easy access to components
- **Precision**: Accurate autonomous and teleop control 