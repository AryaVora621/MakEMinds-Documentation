---
sidebar_position: 2
---

# Robot Subsystems

## Arm and Claw System

### High-Torque Arm Mechanism
The arm system is built around a precision-engineered 28:1 worm gear drive system:

#### Technical Specifications
- **Gear Ratio**: 28:1 worm gear
- **Motor**: goBILDA 5203 Series Yellow Jacket (435 RPM)
- **Torque Output**: 8.4 Nm at arm pivot
- **Angular Range**: 270 degrees
- **Position Control**: Magnetic encoder with 0.3° resolution

#### Design Features
```java
public class ArmConstants {
    // Physical constants
    public static final double ARM_LENGTH_MM = 450;
    public static final double ARM_MASS_KG = 1.2;
    public static final double MAX_ANGULAR_VELOCITY = Math.PI; // rad/s
    
    // Control constants
    public static final double HOLDING_POWER = 0.15;
    public static final double MAX_POWER = 0.85;
}
```

### 4-Stage Viper Slide
Our custom-designed Viper Slide system provides exceptional reach and stability:

#### Specifications
- **Extended Length**: 750mm
- **Retracted Length**: 200mm
- **Extension Stages**: 4
- **Drive System**: Continuous cable system
- **Position Feedback**: Magnetic encoder

#### Performance Metrics
| Metric | Value | Notes |
|--------|--------|-------|
| Extension Speed | 0.5 m/s | Under load |
| Retraction Speed | 0.7 m/s | Assisted by gravity |
| Position Accuracy | ±2mm | At full extension |
| Load Capacity | 2kg | At full extension |

### Advanced Claw System

#### Servo Configuration
```java
public class ClawConfiguration {
    // Servo specifications
    private static final double GRIP_SERVO_MAX = 0.8;
    private static final double WRIST_SERVO_RANGE = 270.0;
    private static final double ARM_SERVO_SPEED = 0.8;
    
    // Position presets
    public static final double[] PICKUP_POSITION = {0.2, 0.5, 0.3};
    public static final double[] SCORING_POSITION = {0.7, 0.8, 0.6};
}
```

#### Design Iterations
1. **Version 1.0**
   - Basic single-axis grip
   - Limited range of motion
   - 70% success rate

2. **Version 6.0**
   - Dual-axis articulation
   - Improved grip surface
   - 85% success rate

3. **Current Version (12.0)**
   - Triple-servo control
   - Pass-through capability
   - Pressure sensing
   - 95% success rate

## Drive System

### Mecanum Drive Configuration

#### Hardware Specifications
- **Motors**: 4x goBILDA 5203 Series (312 RPM)
- **Wheels**: 96mm Mecanum wheels
- **Gear Ratio**: 19.2:1
- **Maximum Speed**: 1.8 m/s

#### Control Implementation
```java
public class MecanumDrive {
    // Drive constants
    private static final double WHEEL_DIAMETER_MM = 96.0;
    private static final double TICKS_PER_REV = 537.7;
    private static final double DRIVE_GEAR_RATIO = 19.2;
    
    // Calculated constants
    private static final double MM_PER_TICK = 
        (WHEEL_DIAMETER_MM * Math.PI) / (TICKS_PER_REV * DRIVE_GEAR_RATIO);
        
    public void setDrivePowers(double forward, double strafe, double turn) {
        // Calculate individual wheel powers
        double[] powers = calculateWheelPowers(forward, strafe, turn);
        
        // Apply power scaling and acceleration control
        powers = applyPowerScaling(powers);
        powers = applyAccelerationControl(powers);
        
        // Set motor powers
        setMotorPowers(powers);
    }
}
```

### Odometry System

#### Hardware Configuration
- **Pods**: 3x REV Through-Bore Encoders
- **Pod Wheels**: 38mm OD rubber wheels
- **Resolution**: 8192 ticks/revolution

#### Implementation
```java
public class ThreeWheelOdometry {
    // Physical measurements
    private static final double LATERAL_DISTANCE = 320; // mm
    private static final double FORWARD_OFFSET = 165; // mm
    
    // Position tracking
    private double x = 0, y = 0, heading = 0;
    
    public void updatePosition(double leftDelta, double rightDelta, double auxDelta) {
        // Calculate position change
        double dTheta = (rightDelta - leftDelta) / LATERAL_DISTANCE;
        double dx = (leftDelta + rightDelta) / 2;
        double dy = auxDelta - (dTheta * FORWARD_OFFSET);
        
        // Update position
        heading += dTheta;
        x += dx * Math.cos(heading) - dy * Math.sin(heading);
        y += dx * Math.sin(heading) + dy * Math.cos(heading);
    }
}
```

## Hanging Mechanism

### Quick-Release System
- **Actuation**: Servo-driven latch mechanism
- **Hook Design**: Custom aluminum with reinforced mounting
- **Deployment Time**: <0.5 seconds

### Control Logic
```java
public class HangingSystem {
    private enum HangingState {
        STOWED,
        DEPLOYING,
        HANGING,
        RETRACTING
    }
    
    public void executeHangingSequence() {
        switch (currentState) {
            case STOWED:
                if (shouldDeploy()) {
                    deployHook();
                    currentState = HangingState.DEPLOYING;
                }
                break;
            case DEPLOYING:
                if (isHookDeployed()) {
                    startHanging();
                    currentState = HangingState.HANGING;
                }
                break;
            // ... other states
        }
    }
}
```

## Vision System

### Hardware
- **Camera**: Logitech C270 HD Webcam
- **Processing**: OpenCV on Control Hub
- **Resolution**: 640x480 @ 30fps

### Software Pipeline
```java
public class VisionPipeline extends OpenCvPipeline {
    // Vision processing constants
    private static final Scalar LOWER_BOUND = new Scalar(20, 100, 100);
    private static final Scalar UPPER_BOUND = new Scalar(30, 255, 255);
    
    @Override
    public Mat processFrame(Mat input) {
        // Convert to HSV color space
        Imgproc.cvtColor(input, hsv, Imgproc.COLOR_RGB2HSV);
        
        // Apply color thresholding
        Core.inRange(hsv, LOWER_BOUND, UPPER_BOUND, mask);
        
        // Find contours
        List<MatOfPoint> contours = new ArrayList<>();
        Imgproc.findContours(mask, contours, hierarchy, 
            Imgproc.RETR_EXTERNAL, Imgproc.CHAIN_APPROX_SIMPLE);
            
        // Process contours for game element detection
        return processContours(contours, input);
    }
}
```

## Future Development

### Planned Improvements
1. **Drive System**
   - Enhanced traction materials
   - Optimized gear ratios
   - Advanced motion profiling

2. **Arm System**
   - Carbon fiber construction
   - Dual motor synchronization
   - Advanced path planning

3. **Vision System**
   - Multi-camera integration
   - Neural network processing
   - Real-time 3D mapping 