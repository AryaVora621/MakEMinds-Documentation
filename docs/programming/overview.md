---
id: overview
title: Programming Overview
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 💻 Programming Excellence

:::tip 🌟 Tech Stack
- **Language:** Java
- **SDK:** FTC SDK 9.0
- **Vision:** EasyOpenCV
- **Navigation:** RoadRunner
- **Build System:** Gradle
:::

## 🎯 Code Philosophy

> ### "Clean, Modular, and Reliable"
> *Building robust systems through structured programming*

## 💫 Core Systems

<Tabs>
<TabItem value="autonomous" label="🤖 Autonomous" default>

### Navigation Systems
- **🧭 Path Planning**
  - RoadRunner integration
  - Spline-based paths
  - Dynamic obstacle avoidance

- **📸 Computer Vision**
  - AprilTag detection
  - Team prop recognition
  - Position tracking

</TabItem>
<TabItem value="teleop" label="🎮 TeleOp">

### Driver Controls
- **🕹️ Control Systems**
  - Field-centric drive
  - Custom button mapping
  - State machine logic

- **🎯 Assisted Features**
  - Auto-alignment
  - Preset positions
  - Safety limits

</TabItem>
<TabItem value="testing" label="🧪 Testing">

### Quality Assurance
- **📊 Unit Testing**
  - Subsystem validation
  - Sensor calibration
  - Motor tuning

- **🔄 Integration Tests**
  - Full system checks
  - Performance metrics
  - Reliability testing

</TabItem>
</Tabs>

## 📊 Code Architecture

| Component | Purpose | Implementation |
|-----------|---------|----------------|
| Hardware | Device abstraction | Hardware maps |
| Subsystems | Modular control | State machines |
| Commands | Task execution | Command pattern |
| Utils | Common functions | Static helpers |

## 🛠️ Development Tools

:::note 💡 Development Environment
Our team uses industry-standard tools for efficient development:
:::

### 🔧 Primary Tools
- Android Studio
- Git version control
- GitHub Actions CI/CD
- Custom debug dashboard

### 📱 Testing Tools
- OnBot Java
- Telemetry logging
- Remote debugging
- Performance profiling

### 📊 Analysis Tools
- Code coverage
- Performance metrics
- Error tracking
- Log analysis

## 🔄 Development Cycle

1. **Plan** ➡️ Feature specification
2. **Code** ➡️ Implementation
3. **Test** ➡️ Validation
4. **Review** ➡️ Code review
5. **Deploy** ➡️ Robot deployment

## 🎓 Best Practices

:::info 📚 Coding Standards
We follow these key principles in our development:
:::

### 📝 Code Quality
- Clear documentation
- Consistent formatting
- Error handling
- Performance optimization

### 🤝 Collaboration
- Git workflow
- Code reviews
- Pair programming
- Knowledge sharing

### 🔒 Safety Features
- Fail-safes
- Emergency stops
- Voltage monitoring
- Motor protection

<style>
{`
  .code-banner {
    background: linear-gradient(45deg, #6C63FF, #FF6584);
    padding: 20px;
    border-radius: 10px;
    color: white;
    margin: 20px 0;
  }
`}
</style> 