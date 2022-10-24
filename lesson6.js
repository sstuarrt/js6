function Robot() {
    let self = this;

    self.work = function(message) {
        console.log(message);
    }

    self.setMessage = function(value) {
        self.message = value;
    }

    self.getMessage = function() {
        return self.message;
    }

    message = 'I am a robot. I am working!'
}

function CoffeeRobot() {
    Robot.call(this);

    let self = this;

    self.setMessage = function(value) {
        work.message = value;
    }

    self.getMessage = function() {
        return work.message;
    }

    message = 'I am a CoffeRobot. I am doing a coffee!';
}

function RobotDancer() {
    Robot.call(this);

    let self = this;

    self.setMessage = function(value) {
        work.message = value;
    }

    self.getMessage = function() {
        return work.message;
    }

    message = 'I am a Robot Dancer. I am dancing!';
}

function RobotCoocker() {
    Robot.call(this);

    let self = this;

    self.setMessage = function(value) {
        work.message = value;
    }

    self.getMessage = function() {
        return work.message;
    }

    message = 'I am a Robot Coocker. I am coocking!';
}

let robot = new Robot();
console.log(robot.work(message));

let coffeerobot = new CoffeeRobot();
console.log(coffeerobot.work(message));

let robotdancer = new RobotDancer();
console.log(robotdancer.work(message));

let robotcoocker = new RobotCoocker();
console.log(robotcoocker.work(message));

let robots = [
    new Robot(robot),
    new CoffeeRobot(coffeerobot),
    new RobotDancer(robotdancer),
    new RobotCoocker(robotcoocker)
];

console.log(robots.work(message));