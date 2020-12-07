# ASSESSMENT 5: Ruby Coding Practical Questions

# 1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. .

class Bike
    attr_accessor :model, :frame_size
    def initialize (model, frame_size)
        @model = model
        @wheels = 2
        @frame_size = frame_size
        # 3) Add a speedometer to the Bike class. The speed should be initialized at 0.
        @speedometer = 0
    end

    #Create a get_info method that returns a sentence with all the data about each bike object
    def get_info
        "The #{model} bike has #{@wheels} wheels and a #{frame_size} frame."
    end

 # 2) Add a bell to the bike class and create the ability to ring the bell when the method is called.
    def ring_bell
     'Ding ding!'
    end

    #3 
    def speed
        @speedometer
    end

# 4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.
    def pedal_faster
        @speedometer += 2
    end

#5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.
    def use_break
        @speedometer -= 2
        @speedometer >= 0
    end

end

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'

# trek = Bike.new 'Trek', '168cm'
# p trek.get_info


# Expected output example: my_bike.ring_bell => 'Ding ding!'

bike = Bike.new
p bike.ring_bell


# Expected output example: my_bike.speed => 0

p bike.speed


# Expected output example: my_bike.pedal_faster 10 => 10

bike.pedal_faster
bike.pedal_faster
bike.pedal_faster
bike.pedal_faster
bike.pedal_faster
p bike.speed


# Expected output example: my_bike.brake 15 => 0

bike.use_break
bike.use_break
bike.use_break
bike.use_break
p bike.speed