function Robot() {
    let self = this;

    self.work = function(message) {
        console.log(message);
    }

    Robot.prototype.setMessage = function(value) {
        self.message = value;
    }

    Robot.prototype.getMessage = function() {
        return self.message;
    }

    message = 'I am a robot. I am working!'
}

function CoffeeRobot() {
    CoffeeRobot.prototype.setMessage = function(value) {
        this.message = value;
    }

    CoffeeRobot.prototype.getMessage = function() {
        return this.message;
    }

    message = 'I am a CoffeRobot. I am doing a coffee!';
}

function RobotDancer() {
    RobotDancer.prototype.setMessage = function(value) {
        this.message = value;
    }

    RobotDancer.prototype.getMessage = function() {
        return this.message;
    }

    message = 'I am a Robot Dancer. I am dancing!';
}

function RobotCoocker() {
     RobotCoocker.prototype.setMessage = function(value) {
        this.message = value;
    }

    RobotCoocker.prototype.getMessage = function() {
        return this.message;
    }

    message = 'I am a Robot Coocker. I am coocking!';
}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = Robot;

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = Robot;

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = Robot;

let robot = new Robot();
console.log(robot.work(message));

let coffeerobot = new CoffeeRobot();
console.log(coffeerobot.work(message));

let robotdancer = new RobotDancer();
console.log(robotdancer.work(message));

let robotcoocker = new RobotCoocker();
console.log(robotcoocker.work(message));
