---
sidebar_position: 1
---

# Autonomous Programming

## Overview
Our autonomous program has evolved significantly throughout the season, achieving a remarkable 95% success rate through iterative development and sophisticated control systems.

## Navigation System Evolution

### Phase 1: Basic Encoder-Based Navigation
Our initial approach used basic encoder-based navigation:
```java
// Example of our initial encoder-based movement
public void driveForward(double inches) {
    int targetPosition = (int)(inches * COUNTS_PER_INCH);
    leftDrive.setTargetPosition(targetPosition);
    rightDrive.setTargetPosition(targetPosition);
    // ... rest of implementation
}
```

**Challenges Faced:**
- Wheel slippage causing position drift
- Inconsistent turning accuracy
- ~50% success rate in competition
- Limited ability to correct course mid-path

### Phase 2: Roadrunner Implementation
We upgraded to Roadrunner with two odometry pods:
```java
// Example trajectory using Roadrunner
Trajectory myTrajectory = drive.trajectoryBuilder(new Pose2d())
    .splineTo(new Vector2d(30, 30), Math.toRadians(90))
    .build();
```

**Improvements:**
- IMU integration for better heading control
- Two-wheel odometry for position tracking
- Spline-based path planning
- ~80% success rate

**Remaining Issues:**
- IMU drift in long trajectories
- Limited ability to handle external disturbances
- Complex tuning process

### Phase 3: PedroPathing Implementation
Our current system uses custom PedroPathing with three odometry pods:

```java
// Example of PedroPathing implementation
public class PedroPath {
    private final List<Vector2D> controlPoints;
    private final PIDController translationalController;
    private final PIDController headingController;
    private final PIDController driveController;

    public PedroPath(List<Vector2D> points) {
        this.controlPoints = points;
        this.translationalController = new PIDController(0.05, 0.001, 0.01);
        this.headingController = new PIDController(0.03, 0.001, 0.005);
        this.driveController = new PIDController(0.04, 0.001, 0.008);
    }
    // ... implementation details
}
```

**Key Features:**
1. **Triple PID Control System**
   - Translational Controller: Manages linear movement
   - Heading Controller: Maintains robot orientation
   - Drive Controller: Handles wheel power distribution

2. **Bezier Curve Path Planning**
   ```java
   public Vector2D calculateBezierPoint(double t) {
       // Cubic Bezier curve implementation
       double x = Math.pow(1-t, 3) * p0.x + 
                 3 * Math.pow(1-t, 2) * t * p1.x + 
                 3 * (1-t) * Math.pow(t, 2) * p2.x + 
                 Math.pow(t, 3) * p3.x;
       // ... y calculation
       return new Vector2D(x, y);
   }
   ```

3. **Centripetal Force Correction**
   ```java
   private double calculateCentripetalCorrection(double velocity, double curvature) {
       return K_CENTRIPETAL * velocity * velocity * curvature;
   }
   ```

## Autonomous Strategies

### Specimen Side (5-Specimen Auto)
```java
public void specimenSideAuto() {
    // Initial setup and calibration
    initializeRobot();
    
    // Stage 1: Collect and place first two specimens
    collectSpecimen(STARTING_STACK);
    navigateToHighChamber();
    placeSpecimens(2);
    
    // Stage 2: Return for additional specimens
    navigateToStack(SECOND_STACK);
    collectSpecimens(3);
    
    // Stage 3: Final placement
    navigateToHighChamber();
    placeSpecimens(3);
}
```

### Sample Side (4-Sample Auto)
```java
public void sampleSideAuto() {
    // Similar structure to specimen side
    // but optimized for sample handling
}
```

## Performance Metrics

### Success Rate Analysis
- **Competition Performance**: 95% success rate
- **Practice Runs**: 98% success rate
- **Error Recovery**: 90% successful recovery from interference

### Timing Analysis
| Action | Average Time | Standard Deviation |
|--------|--------------|-------------------|
| Specimen Pickup | 1.2s | ±0.1s |
| High Chamber Placement | 1.8s | ±0.2s |
| Full Path Execution | 12.5s | ±0.5s |

## Future Improvements

1. **Machine Learning Integration**
   - Implement computer vision for better game element detection
   - Use ML for path optimization based on match data

2. **Advanced Path Planning**
   - Dynamic path recalculation
   - Obstacle avoidance system
   - Multi-robot coordination capabilities

3. **Performance Optimization**
   - Reduce CPU usage in path calculations
   - Implement more efficient motion profiling
   - Add predictive correction for common failure modes 